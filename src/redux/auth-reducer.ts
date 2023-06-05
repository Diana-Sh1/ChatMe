import { ResultCodesEnum} from "../api/api";
import { BaseThunkType, InferActionsTypes} from "./redux-store";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";



let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    messages: null as string | null,
    captchaUrl: null as string | null

}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        case 'ERRORS': {
            return {
                ...state,
                messages: action.messages
            }
        }
        default:
            return state;
    }
}


export const actionsAuth = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: 'SET_USER_DATA', payload: {id, email, login, isAuth}} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({type: 'GET_CAPTCHA_URL_SUCCESS',payload: {captchaUrl}}as const),
    getErrorsMessage: (messages: string) => ({type: 'ERRORS', messages} as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me();
    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = meData.data;
        dispatch(actionsAuth.setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResultCodesEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        let messages = loginData.messages[0]
        dispatch(actionsAuth.getErrorsMessage(messages))
    }

}
export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actionsAuth.getCaptchaUrlSuccess(captchaUrl));

}

export const logout = ():ThunkType => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actionsAuth.setAuthUserData(null, null, null, false))
    }

}

export default authReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actionsAuth>

type ThunkType = BaseThunkType<ActionsTypes>