import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {FC} from "react";

type Props = {
    name: string
    id: number
}
const DialogItem: FC<Props> = ({name, id}) => {
    return (
        <li className={s.link}>
            <NavLink to={"/dialogs/" + id} className = { navData => navData.isActive ? s.active : s.item }>{name}</NavLink>
        </li>
    )
}


export default DialogItem;