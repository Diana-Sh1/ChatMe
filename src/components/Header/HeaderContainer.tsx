import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import { logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    logout: ()=> void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<PropsType>  {
    render () {
        return <Header isAuth={this.props.isAuth}
                        logout={this.props.logout}/>
    }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
});

export default connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>
(mapStateToProps, {logout}) (HeaderContainer);