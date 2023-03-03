import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div className={s.image}>
                <img
                    src="profile_img.png"></img>
            </div>
            <div className={s.card}>
                <h2>Diana S</h2>
                <div className={s.text}>
                    <span>Date of Birth: 11 may</span>
                    <span>City: Moscow</span>
                    <span>Web Site: yoyo.com</span>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;