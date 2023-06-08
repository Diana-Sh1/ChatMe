import React, {FC} from "react";
import s from "./Users.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";
import {useForm} from "react-hook-form";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType} from "../../redux/users-reducer";


type Props = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filer: FilterType) => void
    totalItemsCount: number
    pageSize: number
    users: UserType[]
    followingInProgress: number[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void

}
const Users: FC<Props> = ({currentPage, onPageChanged, totalItemsCount, pageSize, users, ...props}) => {

    return <div className={s.content}>

        <h2 className={s.title}>List of Users</h2>
        <div className={s.pagination}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalItemsCount} pageSize={pageSize}/>
        </div>
        <div><UsersSearchForm onFilterChanged={props.onFilterChanged}/></div>
        {users.map(u => <User key={u.id} user={u}
                              followingInProgress={props.followingInProgress}
                              unfollow={props.unfollow}
                              follow={props.follow}/>)
        }
    </div>
}


export default Users;