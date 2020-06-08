import React from "react";
import upImage from "./upImage.svg";

const UPVOTE = "upvote";
const DOWNVOTE = "downvote";

export const DisplayPhoto = ({photoUrl}) => {
    return <div className="photo-container">
    <img loading="eager" className="display-photo" src={photoUrl} alt="user profile" />
    </div>
};

export const determineTimeDetails = (minutes) => {
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
        return `${Math.floor(minutes/MINUTES_IN_WEEK)} WEEK AGO`;
    } else if(minutes < MINUTES_IN_YEAR) {
        return `${Math.floor(minutes/MINUTES_IN_MONTH)} MONTH AGO`;
    } else {
        return `${Math.floor(minutes/MINUTES_IN_YEAR)} YEAR AGO`;
    }
}
export const PostHeader = ({name, userType, creationTime}) => {
    const elapsedTimeInMinutes = (Date.now() - creationTime)/(1000 * 60);
    return (
        <div className="post-header">
            <div className="post-header-name">{name}</div>
            <div className="post-header-user-type">{userType}</div>
            <div className="post-header-creation-time">{determineTimeDetails(elapsedTimeInMinutes)}</div>
        </div>
    );
}

const PostMessage =({message}) => <div className="post-message">{message}</div>

const getVoteImg = (className) => <img className={className} src={upImage} alt=""/>;

const getVoteButton = (voteNumber, className) => <button className="vote-button">{getVoteImg(className)}{voteNumber}</button>;

export const PostFooter = ({replies, likes, dislikes }) => {
    return <div className="post-footer">
        <button className="add-button">reply</button>
        <button className="replies-list-button">{replies.length} replies</button>
        {getVoteButton(likes, UPVOTE)}
        {getVoteButton(dislikes, DOWNVOTE)}
    </div>
};

export const DisplayContent = ({content}) => {
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
export const Post = ({content}) => {
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