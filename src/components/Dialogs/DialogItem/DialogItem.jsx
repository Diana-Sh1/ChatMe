import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
const DialogItem = (props) => {
    return (
        <li className={s.link}>
            <NavLink to={"/dialogs/" + props.id} className = { navData => navData.isActive ? s.active : s.item }>{props.name}</NavLink>
        </li>
    )
}


export default DialogItem;