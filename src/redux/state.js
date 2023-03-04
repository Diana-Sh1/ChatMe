let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?'},
            {id: 2, message: 'I\'s my first react app'}
        ]
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
            {id: 1, message: 'I\'m fine!', person: 'Grigoriy', src: 'logo_dialog.png'}
        ],
        dialogs: [
            {id: 1, name: 'Grigoriy'},
            {id: 2, name: 'Anna'},
            {id: 3, name: 'Olya'},
            {id: 4, name: 'Alisa'},
            {id: 5, name: 'Artem'},
            {id: 6, name: 'Petya'}
        ]
    }
}
export default state;