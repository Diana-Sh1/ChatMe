

const SEND_MESSAGE = 'SEND_MESSAGE';

type MessagesType = {
    id: number
    message: string
    person: string
    src: string
}
type DialogsType = {
    id: number
    name: string
}

let initialState = {
    messages: [
        {id: 1, message: 'Hi', person: 'Grigoriy', src: 'logo_dialog.png'},
        {
            id: 2,
            message: 'How are you?Lorem Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dicta fuga hic labore laudantium libero nostrum, nulla, om',
            person: 'Me',
            src: 'logo_dialog2.png'
        },
        {id: 1, message: 'Hi', person: 'Grigoriy', src: 'logo_dialog.png'},
        {
            id: 2,
            message: 'How are you?Lorem Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dicta fuga hic labore laudantium libero nostrum, nulla, om',
            person: 'Me',
            src: 'logo_dialog2.png'
        },
    ]  as MessagesType[],
    dialogs: [
        {id: 1, name: 'Grigoriy'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Olya'},
        {id: 4, name: 'Alisa'},
        {id: 5, name: 'Artem'},
        {id: 6, name: 'Petya'}
    ] as DialogsType[],
}
export type InitialStateType = typeof initialState
const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body, person: 'Grigoriy', src: 'logo_dialog.png'}]
            };
        default:
            return state;
    }

}
type SendMessageCreatorType = {
    type: typeof SEND_MESSAGE
    newMessageBody : string
}
export const sendMessage = (newMessageBody:string): SendMessageCreatorType => ({type: SEND_MESSAGE, newMessageBody});
export default dialogsReducer;