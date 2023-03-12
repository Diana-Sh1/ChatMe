import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, updateNewPostText} from "../../redux/state";



const Profile = (props) => {

    return (
        <div>
            <div className={s.inner}>
                <ProfileInfo/>
                <span className={s.line}></span>
                <MyPosts posts={props.profilePage.posts}
                         newPostText={props.profilePage.newPostText}
                         dispatch={props.dispatch}/>
            </div>
        </div>
    )
}
export default Profile;