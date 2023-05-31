import { ResultCodesEnum} from "../api/api";
import {actionsAuth} from "./auth-reducer";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {profileAPI} from "../api/profile-api";



const profileReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
            let newPost = {
                id: 5,
                message: action.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status
            };
        }
        case 'DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case 'SAVE_PHOTO_SUCCESS': {
            return {
                ...state,
                profile: {...state.profile, photos: action.photo} as ProfileType
            }
        }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    addPost: (newPostText: string) => ({type: 'ADD_POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'DELETE_POST', postId} as const),
    savePhotoSuccess: (photo: PhotosType) => ({type: 'SAVE_PHOTO_SUCCESS', photo} as const)
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setStatus(status));
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch:any, getState) => {
    const userId = getState().auth.id
    let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === ResultCodesEnum.Success) {
        if (userId != null) {
            dispatch(getUserProfile(userId));
        } else throw new Error("userId can't be null")

    } else {
        let messages = data.messages[0]
        dispatch(actionsAuth.getErrorsMessage(messages))
        return Promise.reject(messages)
    }
}
export default profileReducer;

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'I\'s my first react app'}
    ] as PostType[],
    newPostText: '',
    profile: null as ProfileType | null,
    status: ''
}
export type  InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsTypes>