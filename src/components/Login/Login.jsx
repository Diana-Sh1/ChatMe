import React from "react";
import {useForm} from "react-hook-form";
import s from "./Login.module.css"
import loginPic from "../../assets/persons2.png"
import logPic from "../../assets/loginPic.png"
import {connect} from "react-redux";
import {login, getErrorsMessage} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";




const Login = (props) => {
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        props.login(data.email, data.password, data.rememberMe);
        reset();
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return <div className={s.content}>
        <div className={s.inner}>
            <div className={s.card}>
                <div className={s.loginForm}>
                    <div className={s.logo}><img src={logPic} alt=""/></div>
                    <div className={s.login}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                <p>First name:</p>
                                <input {...register('email', {
                                    required: "Required field",
                                    minLength: {
                                        value: 3,
                                        message: "Min length 3 symbols"
                                    },
                                    maxLength: {
                                        value: 40,
                                        message: "Max length 40 symbols"
                                    },
                                    pattern: {
                                        value: /^\S*$/,
                                        message: "No whitespaces"
                                    }
                                })} style={{border: errors.email ? '1px solid red' : ''}}/>
                            </label>
                            <span>
                            {errors?.email && <p className={s.errors}>{errors.email?.message} </p>}
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
                                    })} style={{border: errors.password ? '1px solid red' : ''}}/>
                                </label>
                                <span className={s.errors}>
                                        {errors?.password && <p>{errors.password?.message} </p>}
                                  </span>
                            </div>
                            <div className={s.checkbox}>
                                <input {...register('checkbox',)} type="checkbox" /><p>remember me</p>
                            </div>
                            <div>
                                <input type="submit" disabled={!isValid} className={s.button} value="Send"
                                       style={{color: isValid ? '#6F3B22' : ''}}/>
                            </div>
                        <div className={s.errors}>{props.messages}</div>
                        </form>
                    </div>
                </div>
                <div className={s.picture}>
                    <img src={loginPic} alt=""/>
                </div>
            </div>
        </div>
    </div>

}
// const Login = (props) => {
//     return <div className={s.content}>
//         <div className={s.inner}>
//             <div className={s.card}>
//                 <div className={s.loginForm}>
//                     <div className={s.logo}><img src={logPic} alt=""/></div>
//                     <LoginForm/>
//                 </div>
//                 <div className={s.picture}>
//                     <img src={loginPic} alt=""/>
//                 </div>
//
//             </div>
//         </div>
//     </div>
//
// }

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    messages: state.auth.messages


})
export default connect (mapStateToProps, {login, getErrorsMessage}) (Login);