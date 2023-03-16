import Button from "../../Button/Button";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from 'react'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";


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