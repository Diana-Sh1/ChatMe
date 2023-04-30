import React from "react";
import s from "./Users.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {

    return <div className={s.content}>
        <h2 className={s.title}>List of Users</h2>
        <div className={s.pagination}>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
        </div>
        { props.users.map(u => <User key={u.id} user={u}
                                       followingInProgress={props.followingInProgress}
                                       unfollow={props.unfollow}
                                       follow={props.follow}
            />)
        }
    </div>
}


export default Users;