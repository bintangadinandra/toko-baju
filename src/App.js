import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { ProductDetail } from './pages/ProductDetail'
import { ProductList } from './pages/ProductList'
import { Header } from './containers/Header'
import { createStore } from 'redux'
import { mainReducer } from './reducers'
import { Provider } from 'react-redux'
import { AdminProductLayout } from './pages/AdminProductLayout'
export const history = createBrowserHistory()

class app extends Component {
  constructor(props){
    super(props)
    this.store = createStore(mainReducer)
  }

  render() {
    return (
      <Provider store={this.store}>
        <div>
          <Header></Header>
          <Router history={history}>
            <Switch>
              <Route path="/admin" component={AdminProductLayout}></Route>
              <Route exact path="/:id" component={ProductDetail}></Route>
              <Route exact path="/" component={ProductList} />
            </Switch>
          </Router>
        </div>
      </Provider>
    )
  }
}

export const App = app
