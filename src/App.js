import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { ProductDetail } from './pages/ProductDetail'
import { ProductList } from './pages/ProductList'
import { Header } from './containers/Header'
export const history = createBrowserHistory()

class app extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className="store_container scroll_wrapper">
          <Router history={history}>
            <Switch>
              <Route exact path="/:id" component={ProductDetail}></Route>
              <Route exact path="/" component={ProductList} />
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

export const App = app
