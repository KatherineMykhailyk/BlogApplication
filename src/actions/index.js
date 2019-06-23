import * as constants from '../constants/index.js';
import { getPosts, deletePost, createPost, getPost, commentPost } from '../api/index.js';

// GET POSTS FROM API

export const fetchPosts = () => dispatch => {
    dispatch(fetchPostsRequest())
    return getPosts()
        .then(data => dispatch(fetchPostsSuccess(data)))
}

export const fetchPostsRequest = () => {
    return {
        type: constants.FETCH_POSTS_REQUEST
    }
};

export const fetchPostsSuccess = (json) => {
    return {
        type: constants.FETCH_POSTS_SUCCESS,
        posts: json.data.map(result => result),
        receivedAt: Date.now()
    }
};

// DELETE POST

export const deletePostItem = id => dispatch => {

    if (id === null || id === '') {
        throw new Error('ERROR while deleting: \'postId\' is mandatory')
    }

    dispatch(deletePostRequest(id))
    return deletePost(id)
        .then(data => dispatch(deletePostSuccess(id)))
}

export const deletePostRequest = (id) => {
    return {
        type: constants.DELETE_POST_REQUEST,
        id
    }
}


export const deletePostSuccess = (id) => {
    return {
        type: constants.DELETE_POST_SUCCESS,
        id
    }
}

// CREATE A NEW POST

export const createPostItem = (title, body) => dispatch => {

    if (!title && !body) {
        throw new Error('ERROR while creating: \'title and body\' are mandatory')
    }

    dispatch(createPostRequest())
    return createPost(title, body)
        .then(data => dispatch(createPostSuccess()))
}

export const createPostRequest = () => {
    return {
        type: constants.CREATE_POST_REQUEST
    }
}

export const createPostSuccess = () => {
    return {
        type: constants.CREATE_POST_SUCCESS
    }
}

// GET INDIVIDUAL POST

export const getPostItem = id => dispatch => {
    console.log('getPostItem')
    dispatch(getPostRequest())
    return getPost(id)
        .then(data => dispatch(getPostSuccess(data)))
}

export const getPostRequest = () => {
    return {
        type: constants.FETCH_POST_REQUEST
    }
}

export const getPostSuccess = (data) => {
    console.log('json')
    return {
        type: constants.FETCH_POST_SUCCESS,
        post: data,
        receivedAt: Date.now()
    }
}

// CREATE COMMENT TO POST

export const comment = (id, body) => dispatch => {
    dispatch(commentPostRequest())
    return commentPost(id, body)
        .then(data => dispatch(commentPostSuccess()))
}

export const commentPostRequest = () => {
    return {
        type: constants.COMMENT_POST_REQUEST
    }
}

export const commentPostSuccess = () => {
    return {
        type: constants.COMMENT_POST_SUCCESS
    }
}



