import Dialogs from "./Dialogs";
import {actions} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

import React from "react";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages

    }
}

export default compose<React.ComponentType>
(connect(mapStateToProps, {sendMessage: actions.sendMessage}),
    withAuthRedirect)(Dialogs)
