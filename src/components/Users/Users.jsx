import React from "react";
import s from "./Users.module.css"
import axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return <div className={s.content}>
            <h2 className={s.title}>List of Users</h2>
            {
                this.props.users.map(u =>
                    <div className={s.inner}>
                        <div className={s.user_logo}>
                            <img src={u.photos.small != null ? u.photos.small : "user_default.png"} alt=""/>
                        </div>
                        <div className={s.block_main}>
                            <div className={s.user_info}>{u.name}</div>
                            <div className={s.status_info}>{u.status}</div>
                        </div>
                        <div className={s.block_buttons}>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }} className={s.subscribe_btn}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }} className={s.subscribe_btn}>Follow</button>}
                            <button className={s.userInfo_btn}>User Info</button>
                        </div>

                    </div>)
            }
        </div>

    }
}
export default Users;