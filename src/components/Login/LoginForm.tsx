import React, {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Navigate} from "react-router-dom";
import s from "./Login.module.css";
import {useDispatch} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppDispatch} from "../../redux/redux-store";

type PropsType = {
    isAuth: boolean
    messages: string | null
    captchaUrl: string | null
    // login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
export const LoginForm: FC<PropsType> = ({isAuth, messages, captchaUrl}) => {
    const dispatch: AppDispatch = useDispatch()

    type FormValues = {
        email: string
        password: string
        rememberMe: boolean
        captcha: string
        checkbox: boolean
    }

    type FormValuesKeys = keyof FormValues

    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm<FormValues>({
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        dispatch(login(data.email, data.password, data.rememberMe, data.captcha));
        reset();
    }
    if (isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className={s.label}>
                <p>First name:</p>
                <input {...register<FormValuesKeys>( 'email', {
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
                    <input {...register<FormValuesKeys>('password', {
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
                <input {...register<FormValuesKeys>('checkbox',)} type="checkbox"/><p>remember me</p>
            </div>
            <div className={s.captcha_wrapper}>
                {captchaUrl && <img src={captchaUrl} className={s.captcha_img}/>}
                {captchaUrl &&
                    <input {...register<FormValuesKeys>('captcha', {required: "Required field"})} className={s.captcha_input}/>}
            </div>
            <div>
                <input type="submit" disabled={!isValid} className={s.button} value="Send"
                       style={{color: isValid ? '#6F3B22' : ''}}/>
            </div>
            <div className={s.errors}>{messages}</div>
        </form>
    </>

}