import s from "./../Dialogs.module.css"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/state";


const Message = (props) => {
    let newMessageBody = props.state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.person_message}>
            <div className={s.logo_name}>
                <div className={s.logo}>
                    <img className={s.image} src={props.src} alt=""/>
                </div>
                <span>{props.person}</span>
            </div>
            <div className={s.message}>{props.message}</div>
            <div className={s.enter_text}>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}></textarea>
                <button onClick={onSendMessageClick}><img src="arrow3.svg" alt=""/></button>
            </div>
        </div>
    )
}

export default Message;