import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) return <Preloader/>
    return (
        <div className={s.content}>
            <div className={s.image}>
                <img
                    src={props.profile.photos.large}></img>
            </div>
            <div className={s.card}>
                <h2>{props.profile.fullName}</h2>
                <div className={s.text}>
                    {/*<span>Date of Birth: 11 may</span>*/}
                    <span className={s.title}>City:</span>
                    <span className={s.title}>Web Site:</span>
                    <span className={s.title}>Contacts:</span>
                    <span>{props.profile.contacts.github}</span>
                    <span>{props.profile.contacts.facebook}</span>
                    <span className={s.title}>About me: </span>
                    <span>{props.profile.aboutMe}</span>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;