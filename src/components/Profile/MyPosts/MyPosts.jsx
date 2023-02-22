import Button from "../../Button/Button";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myposts}>
            <h2>My Posts</h2>
            <textarea placeholder="Enter your message..."/>
            <div className={s.btn}>
                <Button/>
            </div>
            <Post message="Hi, how are you?"/>
            <Post message="I's my first react app"/>
        </div>

    )
}
export default MyPosts;