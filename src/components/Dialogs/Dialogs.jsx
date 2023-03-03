import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import dialogsData from "App.js"
import messagesData from "my-app/src/App.js"

const Dialogs = () => {
    //создаем массив


    let DialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
//создаем массив

    let messagesElements = messagesData.map(m => <Message message={m.message} person={m.person} src={m.src}/>)


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