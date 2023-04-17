import s from './Header.module.css';
import logo from '../../assets/logo.svg'
import {NavLink} from "react-router-dom";
import profile_img from '../../assets/profile_img.png'
import arrow_pic from '../../assets/arrow_down.png'
import button from "../Button/Button";


const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo}></img>
            </div>
            <div className={s.login_block}>
                <div className={s.login_img}>
                    {props.isAuth
                        ? <div><img src={profile_img}></img><span className={s.logout} onClick={props.logout}>LOG OUT</span></div>
                        : <div className={s.login}><NavLink to={'/login'}>Sign In</NavLink></div>
                    }
                </div>
            </div>

        </header>
    )
}
export default Header;