import {authAPI, usersAPI} from "../api/api";
import {Navigate} from "react-router-dom";
import React from "react";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const ERRORS = 'ERRORS'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    messages: ''

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case ERRORS: {
            return {
                ...state,
                messages: action.messages
            }
        }
        default:
            return state;
    }
}
export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})
export const getErrorsMessage = (messages) => ({type: ERRORS, messages})


export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let messages = data.messages[0]
        dispatch(getErrorsMessage(messages))
    }

}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}

export default authReducer;