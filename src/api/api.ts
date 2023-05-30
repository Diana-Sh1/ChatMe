import axios from "axios";
import {ProfileType, UserType} from "../types/types";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "9e56cc91-3532-448b-aea8-9466297909bb"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

type RequestUsersType = {
    items: UserType[]
        // {
        //     id: number
        //     name: string
        //     status: string
        //     photos: {
        //         small: string
        //         large: string
        //     }
        //     followed: boolean
        // }
    totalCount: number
    error: string
}
export const usersAPI = {

    requestUsers(currentPage = 1, pageSize = 10) {
        return instance.get<RequestUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }
}

type ProfileResponseType = {
    userId: number
}
type StatusResponseType = {
    userId: number
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data);
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data);
    },

    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
            .then(response => response.data);
    }
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: string[]

}
type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum
    messages: string[]

}
export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    }
}

type CaptchaResponseType = {
    url: string
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<CaptchaResponseType>(`security/get-captcha-url`)
            .then(response => response.data)
    }
}