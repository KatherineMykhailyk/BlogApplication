import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom"
import {compose} from 'redux'
import {Row} from 'antd'
import {fetchPosts, deletePostItem} from '../actions/index'
import PostListItem from '../components/PostListItem'
import 'antd/dist/antd.css'

class PostListPage extends Component {

    componentDidMount = () => {
        this.props.fetchPosts()
    }

    componentDidUpdate = (prevProps) => {
        console.log(this.props.history, prevProps.history)
        if (this.props.isProcessing !== prevProps.isProcessing &&
            this.props.isProcessing === false
        ) {
            this.refreshPage()
        }
    }

    navigateToPostDetailPage = (event, id) => {
        const {history} = this.props
        if (event.target.tagName !== 'DIV') return
        history.push(`/posts/${id}`)
    }

    refreshPage = () => {
        this.props.fetchPosts()
    }

    handleDelete = (id) => {
        this.props.deletePostItem(id)
    }

    render() {
        const {postItems} = this.props
        return (
            <div style={{background: '#ECECEC', padding: '30px'}}>
                <Row gutter={16}>
                    {
                        postItems.map((item) =>
                            <PostListItem
                                post={item}
                                onDeletePost={this.handleDelete}
                                onGetInfo={this.navigateToPostDetailPage}
                                key={item.id}
                                id={item.id}
                            />
                        )
                    }
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postItems: state.posts.items,
        isProcessing: state.posts.isProcessing
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {fetchPosts, deletePostItem})
)(PostListPage)