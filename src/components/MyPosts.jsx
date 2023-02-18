import Button from "./Button";

const MyPosts = () => {
    return (
        <div className="myposts">
            <h2>My Posts</h2>
            <textarea placeholder="Enter your message..." autoFocus/>
            <div className="button-send">
                <Button/>
            </div>
        </div>
    )
}
export default MyPosts;