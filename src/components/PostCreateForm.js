import React from 'react'
import {Button} from 'antd'
import {Input} from "antd/lib/index"
import 'antd/dist/antd.css'

const {TextArea} = Input

const PostCreateForm = ({onChange, onHandleClick, titleValue, bodyValue}) => {
    return (
        <div className={'create_container'}>
            <h2 style={{alignSelf: 'center', paddingBottom: '20px'}}>CREATE A NEW POST</h2>
            <TextArea
                placeholder="Post name"
                autosize id={'title'}
                onChange={onChange}
                value={titleValue}
            />
            <div style={{margin: '24px 0'}}/>
            <TextArea
                placeholder="Post description"
                autosize={{minRows: 6, maxRows: 12}}
                id={'body'}
                onChange={onChange}
                value={bodyValue}
            />
            <Button
                onClick={onHandleClick}
                disabled={!(titleValue && bodyValue)}
                type="primary"
                value="default"
                style={{width: '90px', marginTop: '10px', alignSelf: 'flex-end'}}
            >
                Create
            </Button>
        </div>
    )
}

export default PostCreateForm
