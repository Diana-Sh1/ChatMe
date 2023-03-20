import s from './Sidebar.module.css'
import Item from "./Item/Item";

const SideBar = (props) => {

    let friendElement = props.sidebar.map(f => <Item person={f.person} key={f.id} src={f.src}/>);

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