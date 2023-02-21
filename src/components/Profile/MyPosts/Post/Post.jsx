import s from "./Post.module.css"

const Post = () => {
    return (
        <div className={s.item}>
            <div className={s.image}>
                <img src="https://paneljam2.s3.amazonaws.com/uploads/avatar/content/199/content.png" alt=""/>
            </div>
            <div className={s.text}>
                hey!
            </div>
        </div>
    )
}
export default Post;