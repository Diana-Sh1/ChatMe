import {usersAPI} from "../api/api";
import {useParams} from "react-router-dom";
import React from "react";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'I\'s my first react app'}
    ],
    newPostText: '',
    profile: null,

}

const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            return {...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
           return {...state,
                newPostText: action.newText
            };
    }
        case SET_USER_PROFILE: {
           return {...state,
                profile: action.profile
            };
    }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile})



export const getUserProfile = (userId) => {
    return (dispatch) => {

        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}
export default profileReducer;