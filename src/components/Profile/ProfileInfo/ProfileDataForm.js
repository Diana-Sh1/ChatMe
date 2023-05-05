import s from "./ProfileInfo.module.css";
import yes from "../../../assets/yes_pic.png";
import no from "../../../assets/no_pic.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {useForm} from "react-hook-form";

const ProfileDataForm = ({profile}) => {
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({
        mode: "onBlur"
    });

    return <div className={s.card}>
        {isOwner && <button onClick={goToEditMode}>Edit profile</button>}
        <h2>{profile.fullName}</h2>
        <div className={s.inner}>
            <span className={s.title}>Contacts:</span>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
            <span className={s.title}>
                        Looking for a job: {profile.lookingForAJob ?
                <img alt='' className={s.job_img} src={yes}></img> :
                <img alt='' className={s.job_img} src={no}></img>}
                    </span>
            <span>{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</span>

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>

}
export default ProfileDataForm;