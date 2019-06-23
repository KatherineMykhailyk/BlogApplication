import React from 'react'
import {Card, Col} from 'antd'
import {Icon} from 'antd'
import 'antd/dist/antd.css'

const PostListItem = (props) => {
    const {post, id, onDeletePost, onGetInfo} = props

    const deletePost = () => {
        return onDeletePost(id)
    }

    const viewDetails = (event) => {
        return onGetInfo(event, id)
    }

    return (
        <Col span={8} style={{paddingTop: '15px'}}
        >
                <Card onClick={viewDetails}
                      title={post.title}
                      bordered={true}
                      hoverable={true}
                      extra={<Icon type="close" onClick={deletePost}/>}
                >
                    {post.body}
                </Card>
        </Col>
    )
};

export default PostListItem
