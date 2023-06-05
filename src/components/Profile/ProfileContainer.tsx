import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus, } from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppStateType} from "../../redux/redux-store";

type PathParamType = {
    userId: string
}
type withRouterProps = {
   
}
export const withRouter = (Component: React.ComponentType) => {
    return (props: withRouterProps) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{navigate, params, location}}
            />
        );
    };
}

type MapPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
        getUserProfile: (userId: string)=> void
        getStatus: (userId: string)=> void
        updateStatus: ()=> void
        savePhoto: ()=> void
        saveProfile: ()=> void
}
class ProfileContainer extends React.Component<MapPropsType & MapDispatchPropsType & PathParamType > {
    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.router.navigate('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isOwner={!this.props.router.params.userId}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
                     messages={this.props.messages}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    messages: state.auth.messages
})
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
