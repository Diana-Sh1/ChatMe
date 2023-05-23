
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType

}
export type PostType = {
    id: number
    message: string
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
}
export type MessagesType = {
    id: number
    message: string
    person: string
    src: string
}
export type DialogsType = {
    id: number
    name: string
}
export type SideBarType = {
    person: string
    id: number
    src: string
}