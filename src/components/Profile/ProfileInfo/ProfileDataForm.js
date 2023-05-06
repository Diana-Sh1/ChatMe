import s from "./ProfileInfo.module.css";
import {useForm} from "react-hook-form";
import React from "react";



const ProfileDataForm = ({onSubmit, profile, messages}) => {
    const {register, formState: {errors}, handleSubmit} = useForm({
        defaultValues: profile,
        mode: "onBlur"
    });

    return <>
    <form className={s.card} onSubmit={handleSubmit(onSubmit)}>

            <div>Full name: <input {...register('fullName')}/></div>
            <div>Contacts:</div>
            {Object.keys(profile.contacts).map(key => {
                return <div>
                    <b>{key}: <input {...register("contacts." + key)}/> </b>
                </div>
            })}
            <div>
                <span>Looking for a job:</span>
                <input {...register("lookingForAJob")} type="checkbox"/><span>Yes</span>
                <p>My skills:</p>
                <textarea {...register("lookingForAJobDescription", {maxLength: {value: 100, message: "Max length 100 symbols"},})}/>
                {errors?.lookingForAJobDescription && <p className={s.errors}>{errors.lookingForAJobDescription?.message}</p>}
            </div>
            <div><p>About me:</p>
                <textarea {...register("aboutMe", {maxLength: {value: 100, message: "Max length 100 symbols"},})} />
                {errors?.aboutMe && <p className={s.errors}>{errors.aboutMe?.message}</p>}
            </div>
        <div className={s.errors}>{messages}</div>

        <input type='submit' value='Save'></input>

    </form>
    <button onClick={()=>{}}>Cancel</button>
    </>
}
export default ProfileDataForm;