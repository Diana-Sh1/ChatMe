import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state:AppStateType) => {
    return {
        sidebar: state.sidebar,
    }
}
const SidebarContainer = connect(mapStateToProps)(Sidebar);
export default SidebarContainer;