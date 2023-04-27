import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=> {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={s.input_block}>
            {!editMode &&
                <div className={s.status}>
                    <span onDoubleClick={activateEditMode} className={s.title}>{props.status || '----'}</span>
                </div>
            }
            {editMode &&
                <div className={s.status}>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}
                           className={s.input}/>
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;