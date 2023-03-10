import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import SideBar from "../SideBar/Sidebar";


    const Navbar = (props) => {

    return (

        <nav className={s.nav}>
            <ul>
                <li className={s.li}><NavLink to="/SOCHATTY" className = { navData => navData.isActive ? s.active : s.item }>SoChatty</NavLink></li>
                <li className={s.li}><NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink></li>
                <li className={s.li}><NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Dialogs</NavLink></li>
                <li className={s.li}><NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink></li>
                <br/>
                <li className={s.li}><NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink></li>
            </ul>
            <SideBar sidebar={props.sidebar}/>
        </nav>
    )
}
export default Navbar;
