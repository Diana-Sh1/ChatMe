import Button from "../../Button/Button";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from 'react'
import {useForm} from "react-hook-form";


const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let postsElements = props.posts.map(p => <Post message={p.message}/>)
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    const onSubmit = (data) => {
        props.sendMessage(data.newMessageBody);
        reset();
    }
    const {register, formState: {errors}, handleSubmit, reset} = useForm({
        mode: "onSubmit"
    });

    return (
        <div className={s.content}>
            <h2 className={s.h2}>My Posts</h2>
            <textarea className={s.textarea} onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <div className={s.btn} onClick={onAddPost}>
                <Button/>
            </div>
            {postsElements}

        </div>

    )
}
export default MyPosts;