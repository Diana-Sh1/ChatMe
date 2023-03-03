import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Grigoriy'},
    {id: 2, name: 'Anna'},
    {id: 3, name: 'Olya'},
    {id: 4, name: 'Alisa'},
    {id: 5, name: 'Artem'},
    {id: 6, name: 'Petya'}
]
let messagesData = [
    {id: 1, message: 'Hi', person: 'Grigoriy', src: 'logo_dialog.png'},
    {
        id: 2,
        message: 'How are you?Lorem Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dicta fuga hic labore laudantium libero nostrum, nulla, om',
        person: 'Me',
        src: 'logo_dialog2.png'
    },
    {id: 1, message: 'I\'m fine!', person: 'Grigoriy', src: 'logo_dialog.png'},
]
let posts = [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: 'I\'s my first react app'}
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
