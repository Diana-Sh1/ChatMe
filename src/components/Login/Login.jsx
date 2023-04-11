import React from "react";
import {useForm} from "react-hook-form";


const LoginForm = (props) => {
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({
        mode: "onBlur"
    });
    const onSubmit = (data) => {

        alert(JSON.stringify(data));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                First name: <br/>
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
                    Password: <br/>
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
                <input type="submit" disabled={!isValid}/>
            </div>
        </form>
    )
}
const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}


export default Login;