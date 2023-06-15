import {FC, useEffect, useState} from "react";
import s from "./ChatPage.module.css"
import {ChatMessageType} from "../../api/chat-api";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/redux-store";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat-reduces";


const ChatPage: FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: FC = () => {
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening)
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return <div>
        <Messages/>
        <AddMessageForm/>
    </div>
}
const Messages: FC= () => {
const messages = useSelector((state: AppStateType) =>state.chat.messages)

    return <div style={{height: "400px", overflowY: "auto"}}>
        {messages.map((m, index) => <Message key={index} message={m}/>)}

    </div>
}
const Message: FC<{ message: ChatMessageType }> = ({message}) => {
    return <div>
        <img className={s.pic} src={message.photo}/> <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
}


const AddMessageForm: FC = () => {
    const [message, setMessage] = useState('');
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');

    const dispatch: AppDispatch = useDispatch()


    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }
    return <div>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div>
            <button disabled={false} onClick={sendMessageHandler}>Send</button>
        </div>

    </div>
}

export default ChatPage;