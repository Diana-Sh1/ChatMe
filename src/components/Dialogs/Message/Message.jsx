import s from "./../Dialogs.module.css"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/state";


const Message = (props) => {

    return (
        <div className={s.person_message}>
            <div className={s.logo_name}>
                <div className={s.logo}>
                    <img className={s.image} src={props.src} alt=""/>
                </div>
                <span>{props.person}</span>
            </div>
            <div className={s.message}>{props.message}</div>

        </div>

    )
}

export default Message;