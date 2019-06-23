import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { compose } from 'redux'
import PostDetailItem from "../components/PostDetailItem"
import {getPostItem, comment} from "../actions/index";

class PostDetailPage extends Component {

    componentDidMount = () => {
        const {history, getPostItem} = this.props
        const postId = history.location.pathname.slice(-2)
        getPostItem(postId)
    }

    render() {
        const {post} = this.props
        return (
            <PostDetailItem post={post} />
        )
    }
}

const mapStateToProps = ({post}) => {
    return {
        post
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getPostItem, comment})
)(PostDetailPage)