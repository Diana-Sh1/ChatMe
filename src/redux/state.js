const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST';


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
            ]
        },
        sidebar: [
            {id: 1, person: 'Petya', src: 'friend1.png'},
            {id: 2, person: 'Anna', src: 'friend2.png'},
            {id: 3, person: 'Grigoriy', src: 'logo_dialog.png'}
        ]
    },
    _callSubscriber (){},
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText ) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);

    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text})
export default store;