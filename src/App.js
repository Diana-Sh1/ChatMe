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


    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/SOCHATTY" element={<SoChatty/>}/>
                    <Route path="/profile" element={<Profile posts={props.posts}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>

            </div>
        </div>
        </BrowserRouter>
    );

}

export default App;
