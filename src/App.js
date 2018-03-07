import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { ProductDetail } from './pages/ProductDetail'
import { ProductList } from './pages/ProductList'
import { Header } from './containers/Header'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { mainReducer } from './reducers'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
export const history = createBrowserHistory()

class app extends Component {
  constructor(props){
    super(props)
    this.state = {
      rehydrating: true
    }
    const persistConfig = {
      key: 'root',
      storage: storage,
    }
    const persistedReducer = persistReducer(persistConfig, mainReducer)
    this.store = createStore(persistedReducer)
  }

  render() {
    let persistor = persistStore(this.store)
    return (
      <Provider store={this.store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header></Header>
          <div className="store_container scroll_wrapper">
            <Router history={history}>
              <Switch>
                <Route exact path="/:id" component={ProductDetail}></Route>
                <Route exact path="/" component={ProductList} />
              </Switch>
            </Router>
          </div>
        </PersistGate>
      </Provider>
    )
  }
}

export const App = app
