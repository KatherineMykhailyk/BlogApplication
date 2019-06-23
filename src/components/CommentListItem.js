import React from 'react'
import {List, Avatar} from 'antd'
import 'antd/dist/antd.css'

const CommentListItem = ({comment}) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={comment}
            renderItem={
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">Basic comment</a>}
                        description={comment.body}
                    />
                </List.Item>
            }
        />
    )
}

export default CommentListItem


