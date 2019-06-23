import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Layout, Menu} from 'antd'
import 'antd/dist/antd.css'
import {compose} from 'redux'
import {connect} from 'react-redux'

const {Header} = Layout

class PageHeader extends Component {

    getSelectedKey = (history) => {
        return history.location.pathname === `/` ? '1' : '2'
    }

    render() {
        const {history} = this.props
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={this.getSelectedKey(history)}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">
                            <Link to={`/`}>HOME</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to={`/create`}>CREATE</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}

export default compose(
    withRouter,
    connect(null, null)
)(PageHeader)

