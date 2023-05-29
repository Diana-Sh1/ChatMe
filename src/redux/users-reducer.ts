import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import { UserType} from "../types/types";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {ThunkAction} from "redux-thunk";

let initialState = {
    users: [] as UserType[],
    pageSize: 10,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[] //array of users ids
}
type InitialState = typeof initialState;
const usersReducer = (state = initialState, action: ActionsTypes):InitialState => {

    switch (action.type) {
        case "FOLLOW" :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true}  )
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false}  )
            }
        case "SET_USERS":
            return {...state, users: action.users}

        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalItemsCount: action.count}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    followSuccess: (userID: number) => ({type: 'FOLLOW', userID} as const),
    unfollowSuccess: (userID: number) => ({type: 'UNFOLLOW', userID} as const),
    setUsers: (users: UserType[]) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalItemsCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', count: totalItemsCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, id: number) => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, id} as const)
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (page: number, pageSize: number): ThunkType =>
    async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    let data = await usersAPI.requestUsers(page, pageSize)
    dispatch(actions.setCurrentPage(page));
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let data = await usersAPI.follow(userId)
    if (data.resultCode === 0) {
        dispatch(actions.followSuccess(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    let data = await usersAPI.unfollow(userId)
    if (data.resultCode === 0) {
        dispatch(actions.unfollowSuccess(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}


export default usersReducer;