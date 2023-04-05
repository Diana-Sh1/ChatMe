import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SoChatty from "./components/SoChatty/SoChatty";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";



const App = () => {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/SOCHATTY" element={<SoChatty/>}/>
                    <Route path="/profile" element={<ProfileContainer/>}>
                        <Route path=":userId" element={<ProfileContainer/>}/>
                    </Route>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>

            </div>
        </div>
        </BrowserRouter>
    );

}

export default App;
