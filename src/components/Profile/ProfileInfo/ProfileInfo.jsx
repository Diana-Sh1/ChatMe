import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import yes from "../../../assets/yes_pic.png"
import no from "../../../assets/no_pic.png"
import userDefaultPic from "../../../assets/user_default.png";



const ProfileInfo = (props) => {
    if (!props.profile) return <Preloader/>
    return (
        <div className={s.content}>
            <div className={s.image}>
                <img
                    src={props.profile.photos.large != null ? props.profile.photos.large : userDefaultPic}></img>
            </div>
            <div className={s.card}>
                <h2>{props.profile.fullName}</h2>
                <div className={s.text}>
                    {/*<span>Date of Birth: 11 may</span>*/}
                    {/*<span className={s.title}>City:</span>*/}
                    <span className={s.title}>Web Site:</span>
                    <span>{props.profile.contacts.website}</span>
                    <span className={s.title}>Contacts:</span>
                    <span>{props.profile.contacts.github}</span>
                    <span>{props.profile.contacts.facebook}</span>
                    <span className={s.title}>About me: </span>
                    <span>{props.profile.aboutMe}</span>
                    <span className={s.title}>Looking for a job: {props.profile.lookingForAJob === true ? <img className={s.job_img} src={yes}></img> : <img className={s.job_img} src={no}></img> }</span>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;