import {FC, useEffect, useRef, useState} from "react";
import s from "./ChatPage.module.css"
import {ChatMessageAPIType} from "../../api/chat-api";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/redux-store";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat-reduces";
import Button from "../../components/Button/Button";


const ChatPage: FC = () => {

    return <div className={s.content}>
        <Chat/>
    </div>
}

const Chat: FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return <div className={s.wrapper}>
        {status === 'error' ? <div>Some error occured. Please refresh the page.</div> :
            <>
                <Messages/>
                <AddMessageForm/>
            </>
        }
    </div>
}
const Messages: FC = () => {
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    useEffect(()=>{
        if(isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior:'smooth'})
        }
    },[messages])
    return <div className={s.messages}>
        {messages.map((m, index) => <Message key={index} message={m}/>)}
        <div ref={messagesAnchorRef}></div>
    </div>
}

const Message: FC<{ message: ChatMessageAPIType }> = ({message}) => {
    return <div className={s.message_item}>
        <div className={s.person_info}>
            <img className={s.pic} src={message.photo}/>
            <b className={s.username}>{message.userName}</b>
        </div>
        <div className={s.text}>{message.message}</div>

    </div>
}


const AddMessageForm: FC = () => {
    const [message, setMessage] = useState('');
    // const status = useSelector((state: AppStateType) => state.chat.status)


    const dispatch: AppDispatch = useDispatch()
    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }
    return <div className={s.messages}>
        <div className={s.message_wrapper}>
            <textarea className={s.textarea} onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            <div className={s.btn_wrapper}  onClick={sendMessageHandler}><Button/></div>
        </div>
    </div>
}

export default ChatPage;