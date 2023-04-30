import React from "react";
import s from "./Users.module.css"
import {NavLink} from "react-router-dom";
import userDefaultPic from '../../assets/user_default.png'

import isDivisibleBy from "validator/es/lib/isDivisibleBy";
import Paginator from "../common/Paginator/Paginator";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {

    return <div className={s.content}>
        <h2 className={s.title}>List of Users</h2>
        <div className={s.pagination}>

            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
        </div>
        {
            props.users.map(u =>
                <div className={s.inner}>
                    <div className={s.user_logo}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userDefaultPic} alt=""/>
                        </NavLink>

                    </div>
                    <div className={s.block_main}>
                        <div className={s.user_info}>{u.name}</div>
                        <div className={s.status_info}>{u.status}</div>
                    </div>
                    <div className={s.block_buttons}>
                        {u.followed
                            ? <button disabled={props.followingInProgress
                                .some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }} className={s.subscribe_btn}>Unfollow</button>
                            : <button disabled={props.followingInProgress
                                .some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }} className={s.subscribe_btn}>Follow</button>}
                    </div>

                </div>)
        }
    </div>
}


export default Users;