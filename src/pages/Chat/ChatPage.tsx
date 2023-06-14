import {FC, useEffect, useState} from "react";
import pic from "../../assets/friend2.png"
import s from "./ChatPage.module.css"
import message from "../../components/Dialogs/Message/Message";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
const ChatPage: FC = () => {
    return <div>
        <Chat/>
    </div>
}


const Chat: FC = () => {

    return <div>
        <Messages/>
        <AddMessageForm/>
    </div>
}
const Messages: FC = () => {
 const [messages, setMessages] = useState<ChatMessageType[]>([])
    useEffect(()=>{
        ws.addEventListener('message', (e)=>{
            setMessages(JSON.parse(e.data))
        })
    },[])

    return <div style={{height: "400px", overflowY: "auto"}}>
        {messages.map ((m, index) => <Message key={index} message={m}/>)}

    </div>
}
const Message: FC<{message: ChatMessageType}> = ({message}) => {
    return <div>
        <img  className={s.pic} src={message.photo}/> <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
}


const AddMessageForm: FC = () => {
    return <div>
        <div>
            <textarea name="" id=""></textarea>
        </div>
        <div>
            <button>Send</button>
        </div>

    </div>
}

export default ChatPage;