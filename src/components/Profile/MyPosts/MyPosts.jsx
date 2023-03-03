import Button from "../../Button/Button";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message}/>)
    return (
        <div className={s.content}>
            <h2 className={s.h2}>My Posts</h2>
            <textarea className={s.textarea} placeholder=" Enter your message..."/>
            <div className={s.btn}>
                <Button/>
            </div>
            {postsElements}

        </div>

    )
}
export default MyPosts;