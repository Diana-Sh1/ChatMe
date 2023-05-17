import s from "./Button.module.css"
import React from "react";
const Button = () => {
    return (
        <input type="submit" value="Send" className={s.btn}></input>
    )
}
export default Button;