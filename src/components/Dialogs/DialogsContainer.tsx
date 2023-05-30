import Dialogs from "./Dialogs";
import {actions} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {DialogsType, MessagesType} from "../../types/types";

type MapStatePropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages

    }
}

export default compose<PropsType>
(connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps, {sendMessage: actions.sendMessage}),
    withAuthRedirect)(Dialogs)
