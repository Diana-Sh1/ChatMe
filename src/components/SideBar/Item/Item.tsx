import s from '../Sidebar.module.css';
import {FC} from "react";


type Props = {
    src: string
    person: string
}
const Item: FC<Props> = ({src, person}) => {
    return (
                <div className={s.item}>
                    <img src={src} alt=""/>
                    <span className={s.user}>{person}</span>
                </div>
    )
}
export default Item;