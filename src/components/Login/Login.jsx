import React from "react";
import {useForm} from "react-hook-form";
import s from "./Login.module.css"
import loginPic from "../../assets/persons2.png"
import logPic from "../../assets/loginPic.png"

const LoginForm = (props) => {
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({
        mode: "onBlur"
    });
    const onSubmit = (data) => {

        alert(JSON.stringify(data));
        reset();
    }

    return (
        <div className={s.login}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <p>First name:</p>
                    <input {...register('name', {
                        required: "Required field",
                        minLength: {
                            value: 3,
                            message: "Min length 3 symbols"
                        },
                        maxLength: {
                            value: 20,
                            message: "Max length 20 symbols"
                        },
                        pattern: {
                            value: /^\S*$/,
                            message: "No whitespaces"
                        }
                    })} />
                </label>
                <span>
                {errors?.name && <p>{errors.name?.message || "Error!"} </p>}
            </span>
                <div>
                    <label>
                        <p>Password:</p>
                        <input {...register('password', {
                            required: "Required field",
                            minLength: {
                                value: 6,
                                message: "Min length 6 symbols"
                            }
                        })}/>
                    </label>
                    <span>
                {errors?.password && <p>{errors.password?.message || "Error!"} </p>}
            </span>
                </div>


                <div>
                    <input type="submit" disabled={!isValid} className={s.button} value="Send"/>
                </div>
            </form>
        </div>
    )
}
const Login = (props) => {
    return <div className={s.content}>
            <div className={s.inner}>
                <div className={s.card}>
                    <div className={s.loginForm}>
                        <div className={s.logo}><img src={logPic} alt=""/></div>
                        <LoginForm/>
                    </div>
                    <div className={s.picture}>
                        <img src={loginPic} alt=""/>
                        <div className={s.square}></div>
                    </div>

                </div>
            </div>
        </div>

}


export default Login;