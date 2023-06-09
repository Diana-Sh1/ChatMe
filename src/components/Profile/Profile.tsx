import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {FC} from "react";

const Profile: FC = () => {
    return (
        <div>
            <div className={s.inner}>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        </div>
    )
}
export default Profile;