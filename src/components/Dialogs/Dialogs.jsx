import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Button from "../Button/Button";


const Dialogs = (props) => {

    let DialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} person={m.person} src={m.src}/>)

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
            </div>

        </div>
    )
}
export default Dialogs;