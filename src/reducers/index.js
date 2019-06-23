import {combineReducers} from 'redux'
import * as constants from '../constants'

const initialState = {
    isFetching: false,
    didInvalidate: false,
    isProcessing: false,
    error: null,
    items: []
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case constants.FETCH_POSTS_REQUEST:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case constants.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts
            }
        case constants.DELETE_POST_REQUEST:
            return {
                ...state,
                isProcessing: true
            }
        case constants.DELETE_POST_SUCCESS:
            return {
                ...state,
                isProcessing: false
            }
        default:
            return state
    }
}

const post = (state = {
    isFetching: false,
    didInvalidate: false,
    isProcessing: false,
    post: null
}, action) => {
    switch (action.type) {
        case constants.FETCH_POST_REQUEST:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case constants.FETCH_POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                item: action.post.data
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    posts,
    post
})

export default rootReducer
