import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "9e56cc91-3532-448b-aea8-9466297909bb"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

export const followAPI = {
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    }
}