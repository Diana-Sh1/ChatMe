import s from "./Button.module.css"
import React, {FC} from "react";


const Button: FC = () => {
    return (
        <input type="submit" value="Send" className={s.btn}></input>
    )
}
export default Button;