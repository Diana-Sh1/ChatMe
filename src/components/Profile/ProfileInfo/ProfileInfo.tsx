import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import yes from "../../../assets/yes_pic.png"
import no from "../../../assets/no_pic.png"
import loadPhoto from "../../../assets/loadImage.svg"
import userDefaultPic from "../../../assets/user_default2.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ChangeEvent, ChangeEventHandler, FC, useState} from "react";
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus:(status: string)=> void
    isOwner: boolean
    savePhoto: (fle: File)=> void
    saveProfile: (profile: ProfileType)=> Promise<any>
    messages: string | null
}
const ProfileInfo: FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, messages}) => {
    let [editMode, setEditMode] = useState(false);

    type ContactsPropsType = {
        contactTitle: string
        contactValue: string
    }
    const Contact: FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
        return <div>{contactTitle} - <a href={contactValue}>{contactValue}</a></div>
    }

    type ProfileDataPropsType = {
        profile: ProfileType
        isOwner: boolean
        goToEditMode: ()=> void
    }
    const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
        return <div className={s.card}>
            <h2>{profile.fullName}</h2>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div className={s.edit_buttons}>
                <div className={s.btn_profile}>{isOwner &&
                    <button onClick={goToEditMode} className={s.edit_profile}>Edit profile</button>}</div>
                <div className={s.edit_photo}>
                    {isOwner &&
                        <input type={"file"} onChange={onMainPhotoSelected} className={s.visible}/>}
                </div>
            </div>
            <div className={s.inner}>
                <div className={s.title_h2}>
                    Looking for a job: {profile.lookingForAJob ?
                    <img alt='' className={s.job_img} src={yes}></img> :
                    <img alt='' className={s.job_img} src={no}></img>}
                </div>
                <div className={s.inner_wrapper}>

                    <div className={s.label}>
                        <span className={s.title}>My skills</span>
                        <div className={s.description}>{profile.lookingForAJobDescription}</div>
                    </div>
                    <div className={s.label}>
                        <span className={s.title}>About me</span>
                        <div className={s.description}>{profile.aboutMe}</div>
                    </div>
                    <div className={s.label}>
                        <span className={s.title}>Contacts</span>
                        <div className={s.descr_contact}> {Object.keys(profile.contacts).map(key => {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
                        })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    }

    if (!profile) return <Preloader/>
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = async (data: ProfileType) => {
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
                ? <ProfileDataForm profile={profile} onSubmit={onSubmit} messages={messages}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                    setEditMode(true)
                }}/>}

        </div>
    )

}
export default ProfileInfo;