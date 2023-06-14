import {useForm} from "react-hook-form";
import React, {FC} from "react";
import {FilterType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/users-selector";

type PropsType = {
    onFilterChanged: (filter: FilterType)=> void
}

export const UsersSearchForm: FC<PropsType> = React.memo((props) => {

    const filter = useSelector(getUsersFilter)

    type FriendType = "true" | "false" | "null"

    type FormType = {
        term: string;
        friend: FriendType
    };

    const onSubmit = (data: FormType) => {
        const filterF: FilterType = {
            term: data.term,
            friend: data.friend === "null" ? null : data.friend === "true"
        }
        props.onFilterChanged(filterF);

    }
    const {register, handleSubmit} = useForm<FormType>({
        mode: "onSubmit",
    });

    return <div className={s.form_wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={filter.term} className={s.input} {...register('term') }/>
            <select  className={s.select} {...register('friend' )}>
                <option value="null">All</option>
                <option value="true">Followed</option>
                <option value="false">Unfollowed</option>
            </select>
            <input type="submit" value="Find" className={s.btn}></input>
        </form>
    </div>

})