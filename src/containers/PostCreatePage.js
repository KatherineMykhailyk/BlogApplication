import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import PostCreateForm from '../components/PostCreateForm'
import {createPostItem} from '../actions/index'
import '../style/app.css'

class PostCreatePage extends Component {

    state = {
        title: '',
        body: ''
    }

    handleClick = () => {
        const {createPostItem} = this.props
        const {title, body} = this.state
        createPostItem(title, body)
        this.setState({
            title: '',
            body: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <PostCreateForm
                onChange={this.handleChange}
                onHandleClick={this.handleClick}
                titleValue={this.state.title}
                bodyValue={this.state.body}
            />
        )
    }
}

export default compose(
    withRouter,
    connect(null, {createPostItem})
)(PostCreatePage)