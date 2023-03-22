import s from "./Users.module.css"

const Users = (props) => {
    return <div className={s.content}>
            <h2 className={s.title}>List of Users</h2>
        {
            props.users.map(u =>

                <div className={s.inner}>

                    <div className={s.user_logo}>
                        <img src={u.srcLogo} alt=""/>
                    </div>

                    <div className={s.block_main}>
                        <div className={s.user_info}>{u.name}</div>
                        <div className={s.status_info}>{u.status}</div>
                    </div>
                    <div className={s.block_buttons}>
                        {u.follower
                            ? <button onClick={()=> {props.unfollow(u.id)}} className={s.subscribe_btn}>Unfollow</button>
                            : <button onClick={()=> {props.follow(u.id)}} className={s.subscribe_btn}>Follow</button>}


                        <button className={s.userInfo_btn}>User Info</button>
                    </div>

                </div>)
        }
    </div>

}
export default Users;