import {useForm} from "react-hook-form";
import React, {FC} from "react";
import {FilterType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import Button from "../Button/Button";

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
    return <div className={s.form_wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className={s.input} {...register('term')}/>
            <select className={s.select} {...register("friend")}>
                <option value="null">All</option>
                <option value="true">Followed</option>
                <option value="false">Unfollowed</option>
            </select>
            {/*<span>{errors?.term && <p className={s.errors}>{errors.term?.message} </p>}</span>*/}
            {/*<input className={s.btn} type="submit" value="Find"></input>*/}
            <input type="submit" value="Find" className={s.btn}></input>
        </form>
    </div>

}