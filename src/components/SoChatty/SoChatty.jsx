import s from "./SoChatty.module.css"
import titleImg from "../../assets/image_bg.svg"
const SoChatty = () => {
    return (
        <div className={s.content}>
            <img className={s.img} src={titleImg} alt=""/>

        </div>
    )
}
export default SoChatty;