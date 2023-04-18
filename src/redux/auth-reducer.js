import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const ERRORS = 'ERRORS';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    messages: 1111
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
            ...action.payload
            }
        case ERRORS: {
            return{
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}
export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const errorMessage = (messages) => ({type: ERRORS, data: {messages}})
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData (id, email, login, true));
                }
            });

    }
}
export const login = (email, password, rememberMe) => (dispatch) => {

        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let messages = data.messages.length > 0 ? data.messages[0] : "some error";
                    dispatch(errorMessage(messages))
                    console.log(messages)
                }
            });
    }

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}

export default authReducer;