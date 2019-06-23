import React, {Component, Fragment} from 'react'
import {Switch, Route} from 'react-router-dom'
import PageHeader from './containers/PageHeader'
import PostListPage from './containers/PostListPage'
import PostDetailPage from './containers/PostDetailPage'
import PostCreatePage from './containers/PostCreatePage'

class App extends Component {
    render() {
        return (
            <Fragment>
                <PageHeader />
                <Switch>
                    <Route exact path="/" component={PostListPage}/>
                    <Route path="/posts/:id" component={PostDetailPage}/>
                    <Route path="/create" component={PostCreatePage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default App;
