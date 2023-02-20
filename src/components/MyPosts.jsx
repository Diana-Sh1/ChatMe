import Button from "./Button";
import s from "./MyPosts.module.css"

const MyPosts = () => {
    return (
        <div className={s.myposts}>
            <h2>My Posts</h2>
            <textarea placeholder="Enter your message..." autoFocus/>
            <div className={s.button_send}>
                <Button/>
            </div>
        </div>
    )
}
export default MyPosts;