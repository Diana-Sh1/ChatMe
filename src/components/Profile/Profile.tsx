
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";
import {FC} from "react";


type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
    messages: string | null
    isOwner: boolean
}

const Profile: FC<PropsType> = (props) => {

    return (
        <div>
            <div className={s.inner}>
                <ProfileInfo profile={props.profile} status={props.status}
                             updateStatus={props.updateStatus} isOwner={props.isOwner}
                             savePhoto={props.savePhoto} saveProfile={props.saveProfile} messages={props.messages} />
                <MyPostsContainer/>
            </div>
        </div>
    )
}
export default Profile;