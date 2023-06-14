import {FC} from "react";
import pic from "../../assets/friend2.png"
import s from "./ChatPage.module.css"

const ws = new WebSocket()

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
    const messages = [1,2,3,4]
    return <div style={{height: "400px", overflowY: "auto"}}>
        {messages.map ((m: any) => <Message/>)}
        {messages.map ((m: any) => <Message/>)}
        {messages.map ((m: any) => <Message/>)}
    </div>
}
const Message: FC = () => {
    const message = {
        author: 'Di',
        text: 'Hello, friend',
        src: pic
    }
    return <div>
        <img  className={s.pic} src={message.src}/> <b>{message.author}</b>
        <br/>
        {message.text}
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