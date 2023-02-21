import Button from "../../Button/Button";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myposts}>
            <h2>My Posts</h2>
            <textarea placeholder="Enter your message..." autoFocus/>
            <div className={s.btn}>
                <Button/>
            </div>
            <Post/>
        </div>

    )
}
export default MyPosts;