import s from './Sidebar.module.css'
import Item from "./Item/Item";
import {FC} from "react";
import {SideBarType} from "../../types/types";

type Props = {
    sidebar: SideBarType[]
}
const SideBar: FC<Props> = ({sidebar}) => {

    let friendElement = sidebar.map(f => <Item person={f.person} key={f.id} src={f.src}/>);

    return (
        <div className={s.content}>
            <h3>Friends online</h3>
            <div className={s.block}>
                {friendElement}
            </div>
        </div>
    )
}
export default SideBar;