import './App.css';
import React from "react";
import {Routes, Route, HashRouter, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SoChatty from "./components/SoChatty/SoChatty";
import notFound from "./assets/404.jpeg"
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginPage} from "./components/Login/LoginPage";
import {Component, Suspense} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {AppStateType} from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersPage = React.lazy(() => import('./components/Users/UsersContainer'));
const ChatPage = React.lazy(() => import("./pages/Chat/ChatPage"));


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: ()=> void
}

class App extends Component<MapPropsType & DispatchPropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <HashRouter >
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Suspense fallback={<div><Preloader/></div>}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/SOCHATTY" />} />
                            <Route path="/SOCHATTY" element={<SoChatty/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}>
                                <Route path=":userId" element={<ProfileContainer/>}/>
                            </Route>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/users" element={<UsersPage/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/chat" element={<ChatPage/>}/>
                            <Route path="*" element={<img src={notFound} alt="error"/> }/>
                        </Routes>
                        </Suspense>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, {initializeApp})(App);
