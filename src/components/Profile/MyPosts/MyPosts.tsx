import Button from "../../Button/Button";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import React, {FC} from 'react'
import {useForm} from "react-hook-form";
import {PostType} from "../../../types/types";


type PropsType = {
    posts: PostType[]
    addPost: (newPostText: string) => void
}
const MyPosts: FC<PropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message}/>)
    const onSubmit = (data: FormValues) => {
        props.addPost(data.newPostText);
        reset();
    }
    type FormValues = {
        newPostText: string
    }
    const {register, formState: {errors}, handleSubmit, reset} = useForm<FormValues>({
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
                <div className={s.btn_wrapper}><Button/></div>
                {postsElements}
            </form>
            </div>


    )
}
export default MyPosts;