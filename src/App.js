import 'babel-polyfill'; // this is for < IE11
import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Home from './Home/template'
import Blog from './Blog/template'
import BlogPage from './BlogPage/template'

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path="/blog/:year/:month/:day/:slug" component={BlogPage}/>
        <Route path="/blog" component={Blog}/>
        <Route path="*" component={ Home }/>
      </Router>
    )
  }
}

export default App
