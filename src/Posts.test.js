import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from './enzyme';
import Posts, {
    Post,
    DisplayContent,
    PostFooter,
    getVoteButton,
    getVoteImg,
    PostMessage, 
    PostHeader,
    determineTimeDetails,
    DisplayPhoto
} from './Posts';

const postContent = {
    id: "1",
    replies: [],
    likes: 12,
    dislikes: 13,
    message: "hello world",
    postCreateTime: 1591360993160
}
test('should render Post when list is not empty ', () => {
  const wrapper = shallow(<Posts list={[postContent]} />);
  expect(wrapper.find("Post").exists()).toBe(true);
});

test('should not render Post when list is not empty', () => {
    const wrapper = shallow(<Posts list={[]} />);
    expect(wrapper.find("Post").exists()).toBe(false);
});

test('Post should render DisplayPhoto and DisplayContent', () => {
    const wrapper = shallow(<Post content={postContent} />);
    expect(wrapper.find("DisplayPhoto").exists()).toBe(true);
    expect(wrapper.find("DisplayContent").exists()).toBe(true);
});

test('DisplayContent should render PostHeader, PostMessage, PostFooter', () => {
    const wrapper = shallow(<DisplayContent content={postContent} />);
    expect(wrapper.find("PostHeader").exists()).toBe(true);
    expect(wrapper.find("PostMessage").exists()).toBe(true);
    expect(wrapper.find("PostFooter").exists()).toBe(true);
});

test('PostFooter should render 4 buttons', () => {
    const wrapper = shallow(<PostFooter {...postContent} />);
    expect(wrapper.find("button").length).toBe(4);
});

test('PostHeader should render post-header classname', () => {
    const wrapper = shallow(<PostHeader {...postContent} />);
    expect(wrapper.find(".post-header").exists()).toBe(true);
});

test('determineTimeDetails should return 49 minutes ago', () => {
    expect(determineTimeDetails(49)).toBe("49 MINUTES AGO");
});

test('determineTimeDetails should return 2 hours ago', () => {
    expect(determineTimeDetails(127)).toBe("2 HOURS AGO");
});

test('determineTimeDetails should return 2 days ago', () => {
    expect(determineTimeDetails(2880)).toBe("2 DAYS AGO");
});

test('determineTimeDetails should return 1 week ago', () => {
    expect(determineTimeDetails(11520)).toBe("1 WEEK AGO");
});

test('determineTimeDetails should return 1 month ago', () => {
    expect(determineTimeDetails(50400)).toBe("1 MONTH AGO");
});

test('determineTimeDetails should return 5 year ago', () => {
    expect(determineTimeDetails(2520000)).toBe("5 YEAR AGO");
});

test('DisplayPhoto should render photo-container', () => {
    const wrapper = shallow(<DisplayPhoto {...postContent} />);
    expect(wrapper.find(".photo-container").exists()).toBe(true);
});