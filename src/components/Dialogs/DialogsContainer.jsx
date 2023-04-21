import Dialogs from "./Dialogs";
import {sendMessage} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps,
        {sendMessage}),
    withAuthRedirect)(Dialogs)
