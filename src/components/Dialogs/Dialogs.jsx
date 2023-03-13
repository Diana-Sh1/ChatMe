import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Button from "../Button/Button";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let DialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} person={m.person} src={m.src}/>)

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
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
                    <div className={s.enter_text}>
                         <textarea value={newMessageBody}
                          onChange={onNewMessageChange}></textarea>
                        <button onClick={onSendMessageClick}><img src="arrow3.svg" alt=""/></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;