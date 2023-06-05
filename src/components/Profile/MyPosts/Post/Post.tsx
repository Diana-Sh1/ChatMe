import s from "./Post.module.css"
import {FC} from "react";

type PropsType = {
    message: string
}

const Post: FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <div className={s.image}>
                <img src="https://paneljam2.s3.amazonaws.com/uploads/avatar/content/199/content.png" alt=""/>
            </div>
            <div className={s.text}>
                {props.message}
            </div>
        </div>
    )
}
export default Post;