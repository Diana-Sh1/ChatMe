import React from 'react'
import {actions} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost: actions.addPost})(MyPosts);
export default MyPostsContainer;