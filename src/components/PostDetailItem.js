import React, {Fragment} from 'react'
import {Card} from 'antd'
import 'antd/dist/antd.css'

const PostDetailItem = ({post}) => {
    return (
        post.item ?
            <Fragment>
                <div>
                    <Card title={post.item.title} style={{width: 300, margin: 'auto', marginTop: '100px'}}>
                        <p>{post.item.body}</p>
                    </Card>
                </div>
            </Fragment>
            :
            null
    )
}

export default PostDetailItem
