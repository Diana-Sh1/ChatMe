import React from "react";
import s from "./Users.module.css"
import {NavLink} from "react-router-dom";
import userDefaultPic from '../../assets/user_default.png'




let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let slicedPages;
    let curPage = props.currentPage;

    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }
    return <div className={s.content}>
        <h2 className={s.title}>List of Users</h2>
        <div className={s.pagination}>

            {slicedPages.map(p => {
                return <span onClick={() => {
                    props.onPageChanged(p)
                }}
                             className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
            })}
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