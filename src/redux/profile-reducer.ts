import {profileAPI} from "../api/api";
import {getErrorsMessage} from "./auth-reducer";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';



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

const profileReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state;
    }
}
type addPostActionType = {
    type: typeof ADD_POST,
    newPostText: string
}
export const addPost = (newPostText: string):addPostActionType => ({type: ADD_POST, newPostText});
type setUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileType => ({type: SET_USER_PROFILE, profile})
type setStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): setStatusType => ({type: SET_STATUS, status})
type deletePostType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): deletePostType => ({type: DELETE_POST, postId})
type savePhotoSuccess = {
    type: typeof SAVE_PHOTO_SUCCESS
    photo: PhotosType
}
export const savePhotoSuccess = (photo: PhotosType): savePhotoSuccess => ({type: SAVE_PHOTO_SUCCESS, photo})


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {

    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id
    let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        let messages = data.messages[0]
        dispatch(getErrorsMessage(messages))
        return Promise.reject(messages)
    }
}
export default profileReducer;