import s from './Header.module.css';
import logo from '../../assets/logo.svg'
import {NavLink} from "react-router-dom";
import profile_img from '../../assets/profile_img.png'
import {FC} from "react";

type Props = {
    isAuth: boolean
    logout: ()=> void
}

const Header: FC<Props> = ({isAuth, logout}) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo}></img>
            </div>
            <div className={s.login_block}>
                <div className={s.login_img}>
                    {isAuth
                        ? <div><img src={profile_img}></img><span className={s.logout} onClick={logout}>LOG OUT</span></div>
                        : <div className={s.login}><NavLink to={'/login'}>Sign In</NavLink></div>
                    }
                </div>
            </div>

        </header>
    )
}
export default Header;