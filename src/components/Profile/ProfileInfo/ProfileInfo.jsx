import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import yes from "../../../assets/yes_pic.png"
import no from "../../../assets/no_pic.png"
import loadPhoto from "../../../assets/loadImage.svg"
import userDefaultPic from "../../../assets/user_default2.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, messages,}) => {
    let [editMode, setEditMode] = useState(false);

    const Contact = ({contactTitle, contactValue}) => {
        return <div>{contactTitle} - <a href={contactValue}>{contactValue}</a></div>
    }
    const ProfileData = ({profile, isOwner, goToEditMode}) => {
        return <div className={s.card}>
            <h2>{profile.fullName}</h2>
            <div className={s.edit_buttons}>
                <div className={s.btn_profile}>{isOwner &&
                    <button onClick={goToEditMode} className={s.edit_profile}>Edit profile</button>}</div>
                <div className={s.edit_photo}>
                    {isOwner &&
                        <input type={"file"} onChange={onMainPhotoSelected} className={s.visible}/>}
                </div>
            </div>
            <div className={s.inner}>
                <span className={s.title}>Contacts:</span>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
                <span className={s.title}>
                        Looking for a job: {profile.lookingForAJob ?
                    <img alt='' className={s.job_img} src={yes}></img> :
                    <img alt='' className={s.job_img} src={no}></img>}
                     </span>
                <div className={s.title}>My skills:
                    <span>{profile.lookingForAJobDescription}</span>
                </div>

                <div className={s.title}>About me:
                    <span>{profile.aboutMe}</span>
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    }

    if (!profile) return <Preloader/>
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = async (data) => {
        await saveProfile(data);
        setEditMode(false)
    }
    return (
        <div className={s.content}>
            <div className={s.image_content}>
                <div className={s.image}>
                    <img alt='' src={profile.photos.large || userDefaultPic}></img>
                </div>
                {/*tut*/}
            </div>

            {editMode
                ? <ProfileDataForm profile={profile} status={status} updateStatus={updateStatus}
                                   onSubmit={onSubmit} messages={messages}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                    setEditMode(true)
                }}/>}

        </div>
    )

}
export default ProfileInfo;