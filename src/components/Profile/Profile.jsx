import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://img.freepik.com/free-vector/hand-drawn-people-talking-illustrations_52683-72317.jpg?w=2000&t=st=1676643159~exp=1676643759~hmac=0c2d36d54749acc259531dfa4ee2f2bd9062a57185175d7ab647d01c760c6665" alt="logo"></img>
                <span className={s.line}></span>
            </div>
            <div className={s.inner}>
                <div className={s.profile_content}>
                    <div className={s.image}>
                        <img
                            src="https://cdn.imgbin.com/4/23/20/person-icon-student-icon-social-media-icon-YV1TecZP.jpg"
                            alt="1"></img>
                    </div>
                    <div className={s.card}>
                        <h2>Diana S</h2>
                        <div className={s.card__text}>
                            <span>Date of Birth: 11 may</span>
                            <span>City: Moscow</span>
                            <span>Web Site: yoyo.com</span>
                        </div>
                    </div>
                </div>
                <span className={s.line}></span>
                <MyPosts/>
            </div>
        </div>
    )
}
export default Profile;