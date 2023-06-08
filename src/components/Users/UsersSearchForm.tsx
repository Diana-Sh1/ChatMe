import {useForm} from "react-hook-form";
import React, {FC} from "react";
import {FilterType} from "../../redux/users-reducer";
import s from "./Users.module.css"

type PropsType = {
    onFilterChanged: (filter: FilterType)=> void
}

export const UsersSearchForm: FC<PropsType> = (props) => {
    type FormValues = {
        term: string;
        friend: null | boolean
    };
    const onSubmit = (data: FilterType) => props.onFilterChanged(data);
    const {register, formState: {errors}, handleSubmit} = useForm<FormValues>({
        mode: "onSubmit"
    });
    return <div className={s.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('term', {
                maxLength: {
                    value: 10,
                    message: "Max length 10 symbols"
                }
            })}/>
            <select {...register("friend")}>
                <option value="null">All</option>
                <option value="true">Followed</option>
                <option value="false">Unfollowed</option>
            </select>
            <span>{errors?.term && <p className={s.errors}>{errors.term?.message} </p>}</span>
            <input type="submit" value="Find"></input>
        </form>
    </div>

}