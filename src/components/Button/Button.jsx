import s from "./Button.module.css"
const Button = () => {
    return (

            <button className={s.button} type="submit">Send<img src="arrow3.svg" alt=""/></button>

    )
}
export default Button;