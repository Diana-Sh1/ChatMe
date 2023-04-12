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
                    })} style={{border: errors.name ? '1px solid red' : '' }} />
                </label>
                <span >
                     {errors?.name && <p className={s.errors}>{errors.name?.message} </p>}
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
                        })} style={{border: errors.password ? '1px solid red' : '' }} />
                    </label>
                    <span className={s.errors}>
                {errors?.password && <p className={s.p}>{errors.password?.message} </p>}
            </span>
                </div>


                <div>
                    <input type="submit" disabled={!isValid} className={s.button} value="Send" style={{color: isValid ? '#6F3B22' : '' }}/>
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
                    <LoginForm />
                </div>
                <div className={s.picture}>
                    <img src={loginPic} alt=""/>
                </div>

            </div>
        </div>
    </div>

}


export default Login;