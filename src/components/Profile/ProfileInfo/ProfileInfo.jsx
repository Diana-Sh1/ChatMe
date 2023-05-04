import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import yes from "../../../assets/yes_pic.png"
import no from "../../../assets/no_pic.png"
import userDefaultPic from "../../../assets/user_default2.png";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    const Contact = ({contactTitle, contactValue}) => {
        return <div>{contactTitle}: <a href={'https://' + contactValue}>{contactValue}</a></div>
    }

    if (!profile) return <Preloader/>
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.content}>
            <div className={s.image}>
                <img alt=''
                    src={profile.photos.large || userDefaultPic}></img>

            </div>
            <div className={s.card}>
                <h2>{profile.fullName}</h2>
                <div className={s.inner}>
                    <span className={s.title}>Web Site:</span>
                    <span className={s.title}>Contacts:</span>{Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })
                    }

                    {/*<span>{profile.contacts.website}</span>*/}
                    {/*<span className={s.title}>Contacts:</span>*/}
                    {/*<span>{profile.contacts.github}</span>*/}
                    {/*<span>{profile.contacts.facebook}</span>*/}
                    <span className={s.title}>
                        Looking for a job: {profile.lookingForAJob ?
                        <img alt='' className={s.job_img} src={yes}></img> : <img alt='' className={s.job_img} src={no}></img>}
                    </span>
                    <span>{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</span>

                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    )

}
export default ProfileInfo;