import React from "react";

const DisplayPhoto = ({photoUrl}) => {
    return <div className="photo-container">
    <img loading="eager" className="display-photo" src={photoUrl} alt="user profile" />
    </div>
};

const determineTimeDetails = (minutes) => {
    const MINUTES_IN_HOUR = 60,
    MINUTES_IN_DAY = 24 * MINUTES_IN_HOUR,
    MINUTES_IN_WEEK = MINUTES_IN_DAY * 7,
    MINUTES_IN_MONTH = MINUTES_IN_WEEK * 4,
    MINUTES_IN_YEAR = MINUTES_IN_MONTH * 12;
    if (minutes < MINUTES_IN_HOUR) {
        return `${minutes} MINUTES AGO`;
    } else if(minutes < MINUTES_IN_DAY) {
        return `${Math.floor(minutes/MINUTES_IN_HOUR)} HOURS AGO`;
    } else if(minutes < MINUTES_IN_WEEK) {
        return `${Math.floor(minutes/MINUTES_IN_DAY)} DAYS AGO`;
    } else if(minutes < MINUTES_IN_MONTH) {
        return `${Math.floor(minutes/MINUTES_IN_WEEK)} WEEKS AGO`;
    } else if(minutes < MINUTES_IN_YEAR) {
        return `${Math.floor(minutes/MINUTES_IN_MONTH)} MONTH AGO`;
    } else {
        return `${Math.floor(minutes/MINUTES_IN_YEAR)} YEAR AGO`;
    }
}
const PostHeader = ({name, userType, creationTime}) => {
    console.log(creationTime,  Date.now());
    const elapsedTimeInMinutes = (Date.now() - creationTime)/(1000 * 60);
    console.log("elapsedTime", elapsedTimeInMinutes);
    return (
        <div className="post-header">
            <div className="post-header-name">{name}</div>
            <div className="post-header-user-type">{userType}</div>
            <div className="post-header-creation-time">{determineTimeDetails(elapsedTimeInMinutes)}</div>
        </div>
    );
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