import s from "./../Dialogs.module.css"


const Message = (props) => {
    return (
        <div className={s.person_message}>
            <div className={s.logo_name}>
                <div className={s.logo}>
                    <img className={s.image} src={props.src} alt=""/>
                </div>
                <span>{props.person}</span>
            </div>
            <div className={s.message}>{props.message}</div>
            <div className={s.enter_text}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button><img src="arrow3.svg" alt=""/></button>
            </div>
        </div>
    )
}

export default Message;