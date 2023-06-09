import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import yes from "../../../assets/yes_pic.png"
import no from "../../../assets/no_pic.png"
import userDefaultPic from "../../../assets/user_default2.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ChangeEvent, FC, useEffect, useState} from "react";
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../../redux/redux-store";
import {
    getStatus,
    getUserProfile,
    savePhoto as savePhotoThunk,
    saveProfile as saveProfileThunk,
    updateStatus as updateStatusThunk
} from "../../../redux/profile-reducer";


const ProfileInfo: FC = () => {
    const refreshProfile =()=>{
        // @ts-ignore
        let userId: number | null = params.userId;
        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                navigate('/login')
            }
        }
        if (!userId) {
            throw new Error ('ID should exists');
        } else {
            dispatch(getUserProfile(userId));
            dispatch(getStatus(userId));
        }
    }

    useEffect(()=> {
        refreshProfile()
    },[])

    let [editMode, setEditMode] = useState(false);
    let navigate = useNavigate();
    let params = useParams();

    const {profile, status, authorizedUserId, messages} = useSelector((state: AppStateType) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        messages: state.auth.messages,

    }))

    const dispatch: AppDispatch = useDispatch()
    const updateStatus =(status: string)=> {
        dispatch(updateStatusThunk(status))
}
    const savePhoto =(file: File)=> {
        dispatch(savePhotoThunk(file))
}
    const saveProfile =(profile: ProfileType)=> {
        dispatch(saveProfileThunk(profile))
}

    type ContactsPropsType = {
        contactTitle: string
        contactValue: string
    }
    const Contact: FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
        return <div>{contactTitle} - <a href={contactValue}>{contactValue}</a></div>
    }

    type ProfileDataPropsType = {
        profile: ProfileType
        goToEditMode: ()=> void
    }
    const ProfileData: FC<ProfileDataPropsType> = ({profile, goToEditMode}) => {
        let isOwner=!params.userId
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
            </div>

            {editMode
                ? <ProfileDataForm profile={profile} onSubmit={onSubmit} messages={messages}/>
                : <ProfileData profile={profile} goToEditMode={() => {
                    setEditMode(true)
                }}/>}

        </div>
    )

}
export default ProfileInfo;