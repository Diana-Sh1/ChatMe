import Button from "../../Button/Button";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from 'react'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let addPost = ()=> {
        props.dispatch(addPostActionCreator())

    }

    let postsElements = props.posts.map(p => <Post message={p.message}/>)
    let onPostChange= ()=> {
        let text = newPostElement.current.value;

        let action = updateNewPostActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={s.content}>
            <h2 className={s.h2}>My Posts</h2>
            <textarea className={s.textarea} onChange={onPostChange} ref={newPostElement}  value={props.newPostText}/>
            <div className={s.btn} onClick={addPost}>
                <Button/>
            </div>
            {postsElements}

        </div>

    )
}
export default MyPosts;