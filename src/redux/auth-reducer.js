import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const ERRORS = 'ERRORS'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    messages: '',
    captchaUrl: null

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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
    type: SET_USER_DATA, payload: {id, email, login, isAuth}
})
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
})


export const getErrorsMessage = (messages) => ({type: ERRORS, messages})


export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === 10 ) {
            dispatch(getCaptchaUrl());
        }
        let messages = data.messages[0]
        dispatch(getErrorsMessage(messages))
    }

}
export const getCaptchaUrl = () => async (dispatch) => {
    const  data = await securityAPI.getCaptchaUrl();
   const captchaUrl =  data.url;
   dispatch(getCaptchaUrlSuccess(captchaUrl));

}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}

export default authReducer;