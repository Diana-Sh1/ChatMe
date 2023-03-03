import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div>
            <div className={s.inner}>
                <ProfileInfo/>
                <span className={s.line}></span>
                <MyPosts/>
            </div>
        </div>
    )
}
export default Profile;