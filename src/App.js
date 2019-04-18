import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'

import { Home, Menu } from 'pages'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/menu" component={Menu}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
