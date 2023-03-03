import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import SoChatty from "./components/SoChatty/SoChatty";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {
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
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/SOCHATTY" element={<SoChatty/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>

            </div>
        </div>
        </BrowserRouter>
    );

}

export default App;
