import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {

    return (
        <div>
            <div className={s.inner}>
                <ProfileInfo profile={props.profile}/>
                <span className={s.line}></span>
                <MyPostsContainer/>
            </div>
        </div>
    )
}
export default Profile;