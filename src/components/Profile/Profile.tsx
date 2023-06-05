
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = (props) => {

    return (
        <div>
            <div className={s.inner}>
                <ProfileInfo profile={props.profile} status={props.status}
                             updateStatus={props.updateStatus} isOwner={props.isOwner}
                             savePhoto={props.savePhoto} saveProfile={props.saveProfile} messages={props.messages} />
                {/*<span className={s.line}></span>*/}
                <MyPostsContainer/>
            </div>
        </div>
    )
}
export default Profile;