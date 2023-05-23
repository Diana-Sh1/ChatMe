import s from "./../Dialogs.module.css"
import {FC} from "react";


type Props = {
    src: string
    person: string
    message: string
}

const Message: FC<Props> = ({src, person, message}) => {
    return (

        <div className={s.person_message}>
            <div className={s.logo_name}>
                <div className={s.logo}>
                    <img className={s.image} src={src} alt=""/>
                </div>
                <span>{person}</span>
            </div>
            <div className={s.message}>{message}</div>

        </div>

    )
}

export default Message;