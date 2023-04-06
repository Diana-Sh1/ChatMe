import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
    }
    render() {
        return (
            <div className={s.input_block}>
                {!this.state.editMode &&
                    <div className={s.status}>
                        <span onDoubleClick={ this.activateEditMode} className={s.title}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={s.status}>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} className={s.input}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;