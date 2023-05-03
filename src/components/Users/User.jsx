import React from "react";
import s from "./Users.module.css"
import {NavLink} from "react-router-dom";
import userDefaultPic from '../../assets/user_default2.png'


let User = ({user, followingInProgress, unfollow, follow}) => {
    return <div className={s.inner}>
        <div className={s.user_logo}>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userDefaultPic} alt=""/>
            </NavLink>

        </div>
        <div className={s.block_main}>
            <div className={s.user_info}>{user.name}</div>
            <div className={s.status_info}>{user.status}</div>
        </div>
        <div className={s.block_buttons}>
            {user.followed
                ? <button disabled={followingInProgress
                    .some(id => id === user.id)} onClick={() => { unfollow(user.id)
                }} className={s.subscribe_btn}>Unfollow</button>
                : <button disabled={followingInProgress
                    .some(id => id === user.id)} onClick={() => {follow(user.id)
                }} className={s.subscribe_btn}>Follow</button>
            }
        </div>
        </div>
        }
export default User;
