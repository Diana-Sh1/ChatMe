import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Button from "../Button/Button";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let DialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message store={props.store} message={m.message} person={m.person} src={m.src}/>)

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.content}>
            <h2 className={s.h2}>Dialogs</h2>
            <div className={s.dialogs}>
                <ul className={s.dialogNav}>
                    {DialogsElements}
                </ul>
                <div className={s.messages}>
                    {messagesElements}

                </div>
                <div className={s.enter_text}>
                         <textarea value={newMessageBody}
                                   onChange={onNewMessageChange}></textarea>
                    <button onClick={onSendMessageClick}><img src="arrow3.svg" alt=""/></button>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;