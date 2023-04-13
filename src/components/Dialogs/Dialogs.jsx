import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {useForm} from "react-hook-form";
import React from "react";
import arrowPic from "../../assets/arrow3.svg"


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let DialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message store={props.store} key={m.id} message={m.message} person={m.person} src={m.src}/>)

    const onSubmit = (data) => {
        props.sendMessage(data.newMessageBody);
        reset();
    }
    const {register, formState: {errors}, handleSubmit, reset} = useForm({
        mode: "onSubmit"
    });
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
                <form className={s.enter_text} onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('newMessageBody', {
                        required: "Required field",
                        maxLength: {
                            value: 300,
                            message: "Max length 300 symbols"
                        }
                    })}/>
                    <span>{errors?.newMessageBody && <p className={s.errors}>{errors.newMessageBody?.message} </p>}</span>
                    <input type="submit" value="Send"></input>
                </form>
            </div>

        </div>
    )
}
export default Dialogs;