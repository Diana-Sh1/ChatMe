import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {

    return (
        <div>
            <div className={s.inner}>
                <ProfileInfo/>
                <span className={s.line}></span>
                <MyPosts posts={props.posts}/>
            </div>
        </div>
    )
}
export default Profile;