import s from "./ProfileInfo.module.css";
import {useForm} from "react-hook-form";
import React, {FC} from "react";
import {ContactsType, PhotosType, ProfileType} from "../../../types/types";


type ProfileFormPropsType = {
    onSubmit: (data: ProfileType) => Promise<void>
    profile: ProfileType
    messages: string | null
}
const ProfileDataForm: FC<ProfileFormPropsType> = ({onSubmit, profile, messages}) => {
    type FormValues = {
        lookingForAJob: boolean
        fullName: string
        lookingForAJobDescription: string
        aboutMe: string
        contacts: ContactsType
        photos: PhotosType
    }
    const {register, formState: {errors}, handleSubmit} = useForm<FormValues & ProfileFormPropsType>({
        defaultValues: profile,
        mode: "onBlur"
    });

    return <>
        <form className={s.card} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inner}>
                <div className={s.title_h2}><span className={s.title_job}>Looking for a job</span>
                    <input {...register("lookingForAJob")} type="checkbox" className={s.checkbox}/>
                </div>
                <div className={s.name_red}><span className={s.title_name}>Full name:</span>
                    <input {...register('fullName', {
                        maxLength: {
                            value: 30,
                            message: "Max length 30 symbols"
                        },
                    })}/>
                    <div>{errors?.fullName &&
                        <p className={s.errors}>{errors.fullName?.message}</p>}
                    </div>
                </div>
                <div className={s.inner_wrapper}>
                    <div className={s.label}>
                        <span className={s.title}>My skills</span>
                        <div className={s.description}>
                            <textarea {...register("lookingForAJobDescription", {
                                maxLength: {
                                    value: 100,
                                    message: "Max length 100 symbols"
                                },
                            })}/>
                           <div className={s.errors_label}>{errors?.lookingForAJobDescription &&
                               <p className={s.errors}>{errors.lookingForAJobDescription?.message}</p>}
                           </div>
                        </div>
                    </div>
                    <div className={s.label}><span className={s.title}>About me</span>
                        <div className={s.description}>
                        <textarea {...register("aboutMe", {
                            maxLength: {
                                value: 100,
                                message: "Max length 100 symbols"
                            },
                        })} />
                           <div className={s.errors_label}>
                               {errors?.aboutMe && <p className={s.errors}>{errors.aboutMe?.message}</p>}
                           </div>
                        </div>
                    </div>
                    <div className={s.label}><span className={s.title}>Contacts</span>
                        {Object.keys(profile.contacts).map(key => {
                            return <div className={s.contact_block}>
                                <b>{key}: <input {...register("contacts." + key )} className={s.input_contact}/> </b>
                            </div>
                        })}

                    </div>
                </div>
                <div className={s.errors}>{messages}</div>
                <input type='submit' value='Save' className={s.submit}></input>
            </div>
        </form>


    </>
}
export default ProfileDataForm;