import React, {FC} from "react";
import s from "./Login.module.css"
import loginPic from "../../assets/persons2.png"
import logPic from "../../assets/loginPic.png"
import {useSelector} from "react-redux";

import {AppStateType} from "../../redux/redux-store";
import {LoginForm} from "./LoginForm";

export const LoginPage: FC = () => {
    const {captchaUrl, isAuth, messages} = useSelector((state: AppStateType) => ({
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth,
        messages: state.auth.messages
    }))

    return <div className={s.content}>
        <div className={s.inner}>
            <div className={s.card}>
                <div className={s.loginForm}>
                    <div className={s.logo}><img src={logPic} alt=""/></div>
                    <div className={s.login}>
                    <LoginForm isAuth={isAuth}
                               messages={messages}
                               captchaUrl={captchaUrl}
                    />
                    </div>
                </div>
                <div className={s.picture}>
                    <img src={loginPic} alt=""/>
                </div>

            </div>
        </div>
    </div>

}

