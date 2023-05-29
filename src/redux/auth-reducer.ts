import {authAPI, ResultCodesEnum, securityAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const ERRORS = 'ERRORS'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

export type InitialStateType = typeof initialState


let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    messages: null as string | null,
    captchaUrl: null as string | null

}

const authReducer = (state = initialState, action: any): InitialStateType => {

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
type SetAuthUserDataPayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataPayloadType
}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA, payload: {id, email, login, isAuth}
})


type GetCaptchaSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string}
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
})

type getErrorsMessageType = {
    type: typeof ERRORS,
    messages: string
}
export const getErrorsMessage = (messages: string): getErrorsMessageType => ({type: ERRORS, messages})


export const getAuthUserData = () => async (dispatch: any) => {
    let meData = await authAPI.me();
    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = meData.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {

    let loginData = await authAPI.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResultCodesEnum.CaptchaIsRequired ) {
            dispatch(getCaptchaUrl());
        }
        let messages = loginData.messages[0]
        dispatch(getErrorsMessage(messages))
    }

}
export const getCaptchaUrl = () => async (dispatch: any) => {
    const  data = await securityAPI.getCaptchaUrl();
   const captchaUrl =  data.url;
   dispatch(getCaptchaUrlSuccess(captchaUrl));

}

export const logout = () => async (dispatch: any) => {
    let data = await authAPI.logout()
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}

export default authReducer;