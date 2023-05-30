import axios from "axios";
import {UserType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "9e56cc91-3532-448b-aea8-9466297909bb"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: UserType[]
    totalCount: number
    error: string | null
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: string[]
    resultCode: RC
}