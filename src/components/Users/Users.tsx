import React, {FC} from "react";
import s from "./Users.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type Props = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalItemsCount: number
    pageSize: number
    users: UserType[]
    followingInProgress: number[]
    unfollow: (userId: number)=> void
    follow: (userId: number)=> void

}
const Users: FC<Props> = ({currentPage, onPageChanged, totalItemsCount, pageSize, users, ...props}) => {

    return <div className={s.content}>
        <h2 className={s.title}>List of Users</h2>
        <div className={s.pagination}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalItemsCount} pageSize={pageSize}/>
        </div>
        { users.map(u => <User key={u.id} user={u}
                                       followingInProgress={props.followingInProgress}
                                       unfollow={props.unfollow}
                                       follow={props.follow}
            />)
        }
    </div>
}


export default Users;