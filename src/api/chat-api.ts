const subscribers = {
    'message-received': [] as MessageReceivedSubscriberType[],
    'status-changed': [] as StatusReceivedSubscriberType[]
}

let ws: WebSocket | null
type EventNameType = 'message-received' | 'status-changed'


const closeHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createChannel, 3000);
}
let messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers['message-received'].forEach(s => s(newMessages))
}
let openHandler = () => {
    notifySubscribersAboutStatus('ready')
}
let errorHandler = () => {
    notifySubscribersAboutStatus('error')
    console.log('RESTART PAGE')
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status: StatusType) => {
    subscribers['status-changed'].forEach(s => s(status))
}

function createChannel() {
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers['message-received'] = []
        subscribers['status-changed'] = []

        cleanUp()
        ws?.close();
    },
    subscribe(eventName: EventNameType, callback: MessageReceivedSubscriberType | StatusReceivedSubscriberType) {
        // @ts-ignore
        subscribers[eventName].push(callback)
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe(eventName: EventNameType, callback: MessageReceivedSubscriberType | StatusReceivedSubscriberType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}


type MessageReceivedSubscriberType = (messages: ChatMessageType[]) => void
type StatusReceivedSubscriberType = (status: StatusType) => void
export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
export type StatusType = 'pending' | 'ready' | 'error'