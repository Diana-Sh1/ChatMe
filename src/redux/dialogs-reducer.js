const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
    ],
    dialogs: [
        {id: 1, name: 'Grigoriy'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Olya'},
        {id: 4, name: 'Alisa'},
        {id: 5, name: 'Artem'},
        {id: 6, name: 'Petya'}
    ],
    newMessageBody: ""
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body, person: 'Grigoriy', src: 'logo_dialog.png'})
            return state;
        default:
            return state;
    }

}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;