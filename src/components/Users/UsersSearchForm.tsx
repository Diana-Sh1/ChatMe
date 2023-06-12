import {useForm} from "react-hook-form";
import React, {FC} from "react";
import {FilterType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import Button from "../Button/Button";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/users-selector";

type PropsType = {
    onFilterChanged: (filter: FilterType)=> void
}

export const UsersSearchForm: FC<PropsType> = (props) => {
    const filter = useSelector(getUsersFilter)

    type FormValues = {
        term: string;
        friend: null | boolean
    };
    const onSubmit = (data: FilterType) => props.onFilterChanged(data);

    const {register, handleSubmit} = useForm<FormValues>({
        mode: "onSubmit",
    });

    return <div className={s.form_wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={filter.term} className={s.input} {...register('term') }/>
            <select  className={s.select} {...register("friend" )}>
                <option  value="">All</option>
                <option  value="true">Followed</option>
                <option  value="false">Unfollowed</option>
            </select>
            <input type="submit" value="Find" className={s.btn}></input>
        </form>
    </div>

}