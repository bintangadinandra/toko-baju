import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { AdminProductList } from './AdminProductList'
import { AdminProductDetail } from './AdminProductDetail'
import { AdminCreateNewProduct } from './AdminCreateNewProduct'
import { AdminSidebar } from '../containers/AdminSidebar'
import './AdminProductLayout.css'

export const history = createBrowserHistory()

const componentName = ({ match }) => {
  return (
    <div className="admin_wrapper">
      <AdminSidebar></AdminSidebar>
      <div className="content">
        <div className="store_container scroll_wrapper">  
          <Router history={history}>
            <Switch>
              <Route exact path={`${match.url}`} component={AdminProductList}></Route>
              <Route exact path={`${match.url}/create`} component={AdminCreateNewProduct}></Route>
              <Route exact path={`${match.url}/:id`} component={AdminProductDetail}></Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  )
}

export const AdminProductLayout =  componentName