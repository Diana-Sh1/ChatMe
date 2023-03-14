import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?'},
                {id: 2, message: 'I\'s my first react app'}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: [
            {id: 1, person: 'Petya', src: 'friend1.png'},
            {id: 2, person: 'Anna', src: 'friend2.png'},
            {id: 3, person: 'Grigoriy', src: 'logo_dialog.png'}
        ]
    },
    _callSubscriber (){},
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}




export default store;