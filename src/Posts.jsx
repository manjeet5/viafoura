import React from "react";

const DisplayPhoto = ({photoUrl}) => {
    return <div className="photo-container">
    <img loading="eager" className="display-photo" src={photoUrl} alt="user profile" />
    </div>
};

const PostHeader = ({name, userType, creationTime}) => {
    return <div className="post-header">header goes here</div>
}

const PostMessage =({message}) => {
    return <div className="post-message">message goes here</div>
}

const PostFooter = ({replies, likes, dislikes }) => {
    return <div className="post-footer">footer goes here</div>
};

const DisplayContent = ({content}) => {
    const {
        name,
        userType,
        postCreateTime,
        replies,
        likes,
        dislikes,
        message
    } = content;

    return <div className="post-content-container">
        <PostHeader name={name} userType={userType} creationTime={postCreateTime} />
        <PostMessage message={message} />
        <PostFooter replies={replies} likes={likes} dislikes={dislikes} />
    </div>
}
const Post = ({content}) => {
    return (
        <div className="post-container">
            <DisplayPhoto photoUrl={content.photoUrl} />
            <DisplayContent content={content} />   
        </div>
    )
}
const Posts = ({list}) => {
    return list.map(postContent => <Post key={postContent.id} content={postContent}/>)
}

export default Posts;