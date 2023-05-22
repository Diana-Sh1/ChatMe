import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {useForm} from "react-hook-form";
import React, {FC} from "react";
import Button from "../Button/Button";
import {DialogsType, MessagesType} from "../../types/types";

type Props = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    sendMessage: (newMessageBody: string) => void
}

const Dialogs: FC<Props> = ({dialogs, messages, sendMessage}) => {
    let DialogsElements = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message  key={m.id} message={m.message} person={m.person} src={m.src}/>)

    type FormValues = {
        newMessageBody: string;
    };
    const onSubmit = (data: any) => {
        sendMessage(data.newMessageBody);
        reset();
    }
    const {register, formState: {errors}, handleSubmit, reset} = useForm<FormValues>({
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
                    <textarea {...register('newMessageBody', {
                        required: "Required field",
                        maxLength: {
                            value: 300,
                            message: "Max length 300 symbols"
                        }
                    })} className={s.textarea}/>
                    <span>{errors?.newMessageBody && <p className={s.errors}>{errors.newMessageBody?.message} </p>}</span>
                    <div className={s.btn_wrapper}><Button/></div>
                </form>
            </div>

        </div>
    )
}
export default Dialogs;