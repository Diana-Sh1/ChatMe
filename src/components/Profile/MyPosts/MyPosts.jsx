import Button from "../../Button/Button";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from 'react'
import {useForm} from "react-hook-form";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message}/>)
    const onSubmit = (data) => {
        props.addPost(data.newPostText);
        reset();
    }
    const {register, formState: {errors}, handleSubmit, reset} = useForm({
        mode: "onSubmit"
    });

    return (
        <div className={s.content}>

            <h2 className={s.h2}>My Posts</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register('newPostText', {
                    required: "Required field",
                    maxLength: {
                        value: 300,
                        message: "Max length 300 symbols"
                    },

                    pattern: {
                        value: /^(?! )/,
                        message: "No whitespaces at the start of the line"
                    }
                })} className={s.textarea}/>
                <span>{errors?.newPostText && <p className={s.errors}>{errors.newPostText?.message} </p>}</span>
                <input type="submit" value="Send" className={s.btn}></input>
                {postsElements}
            </form>
            </div>


    )
}
export default MyPosts;