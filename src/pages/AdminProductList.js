import React, { Component } from 'react'
import { productService } from '../services/product.services'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { formatterUtil } from '../utils/formatter'
import { withRouter, Link } from 'react-router-dom'

class componentName extends Component {
  constructor(){
    super()
    this.state = {
      productList: ''
    }
  }

  async componentWillMount() {
    try {
      const res = await productService.getAllProduct() 
      console.log('data', res)
      if (res.data.status === 'success') {
        this.setState({
          productList: res.data.data_list
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  showDetail(data) {
    console.log(data)
  }

  goToCreatePage = () => {
    console.log('Hi!')
  }

  render() {
    const columns = [{
      Header: 'Product Name',
      accessor: 'name',
    },{
      Header: 'Created At',
      accessor: 'createdAt',
      Cell: props => <span>{formatterUtil.prettifyDate(props.value)}</span>
    },{
      Header: 'Updated At',
      accessor: 'updatedAt',
      Cell: props => <span>{formatterUtil.prettifyDate(props.value)}</span>
    },
    {
      Header: 'Action',
      accessor: 'id',
      Cell: props => 
      <div className="has-text-centered">
        <Link to={`/admin/${props.value}`}>
          <button className="button is-info is-small">View Detail</button>
        </Link>
      </div>
    }]
    return (
      <div>
        <h2>Product List</h2>
        <div className="has-text-right">
          <button className="button is-primary" onClick={this.goToCreatePage}>Create New</button>
        </div>
        <hr/>
        <div className="admin_product_list">
          {
            this.state.productList && 
            <ReactTable
              data={this.state.productList}
              columns={columns}
              defaultPageSize={8}></ReactTable>
          }
        </div>
      </div>
    )
  }
}

export const AdminProductList = withRouter(componentName)