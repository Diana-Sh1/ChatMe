import s from '../Sidebar.module.css';

const Item = (props) => {

    return (
                <div className={s.item}>
                    <img src={props.src} alt=""/>
                    <span className={s.user}>{props.person}</span>
                </div>
    )
}
export default Item;