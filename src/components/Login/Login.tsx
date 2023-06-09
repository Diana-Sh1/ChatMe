import React, {FC} from "react";
import s from "./Login.module.css"
import loginPic from "../../assets/persons2.png"
import logPic from "../../assets/loginPic.png"
import {connect, useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {LoginForm} from "./LoginForm";


type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const Login: FC<MapDispatchPropsType> = ({login}) => {
    const {captchaUrl, isAuth, messages} = useSelector((state: AppStateType) => ({
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth,
        messages: state.auth.messages
    }))
    const dispatch = useDispatch()


    return <div className={s.content}>
        <div className={s.inner}>
            <div className={s.card}>
                <div className={s.loginForm}>
                    <div className={s.logo}><img src={logPic} alt=""/></div>
                    <div className={s.login}>
                    <LoginForm isAuth={isAuth}
                               messages={messages}
                               captchaUrl={captchaUrl}
                               login={login}
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

export default connect(null, {login})(Login);