import s from './Header.module.css';
import logo from '../../assets/logo.svg'
import {NavLink} from "react-router-dom";
import profile_img from '../../assets/profile_img.png'
import arrow_pic from '../../assets/arrow_down.png'


const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo}></img>
            </div>
            <div className={s.login_block}>
                <div className={s.login_img}>
                    {props.isAuth ? <img src={profile_img}></img>:
                        <NavLink to={'/login'} className={s.login}>Sign In</NavLink>}
                </div>
            </div>

        </header>
    )
}
export default Header;