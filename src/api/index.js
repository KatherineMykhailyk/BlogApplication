import axios from "axios";

const API_PREFIX_POSTS = 'https://simple-blog-api.crew.red/posts'
const API_PREFIX_POST_COMMENTS = 'https://simple-blog-api.crew.red/comments'

// GET POSTS FROM THE REMOTE API

function getPosts() {
    return axios.get(`${API_PREFIX_POSTS}`)
}

// DELETE POST

function deletePost(id) {
    return axios.delete(`${API_PREFIX_POSTS}/${id}`, {
        data: {}
    })
}

// CREATE POST

function createPost(title, body) {
    return axios.post(`${API_PREFIX_POSTS}`,
        {
            title: title,
            body: body
        })
}

// COMMENT POST

function commentPost(postId, body) {
    return axios.post(`${API_PREFIX_POST_COMMENTS}`,
        {
            postId: postId,
            body: body
        })
}

// GET 1 POST WITH ID

function getPost(id) {
    return axios.get(`${API_PREFIX_POSTS}/${id}?_embed=comments`)
}


export {
    getPosts,
    deletePost,
    createPost,
    commentPost,
    getPost
}