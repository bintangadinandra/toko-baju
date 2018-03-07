import React, { Component } from 'react'
import { productService } from '../services/product.services'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { formatterUtil } from '../utils/formatter'
import { withRouter, Link } from 'react-router-dom'
import swal from 'sweetalert'
import { LoadingSpinner } from '../components/LoadingSpinner';

class componentName extends Component {
  constructor(){
    super()
    this.state = {
      productList: '',
      isFetching: false
    }
  }

  async componentWillMount() {
    await this.fetchData()
  }

  async fetchData() {
    this.setState({
      isFetching: true
    })
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
    this.setState({
      isFetching: false
    })
  }

  goToCreatePage = () => {
    this.props.history.push('/admin/create')
  }

  async deleteProduct(id) {
    try {
      const willDelete = await swal({
        title: "Hapus?",
        text: "Apakah anda yakin ingin menghapus data?",
        icon: "warning",
        dangerMode: true,
      })
      if (willDelete) {
        const res = await productService.deleteProduct(id)
        if (res.data.status==='success') {
          swal("Success!", "Sukses membuat data baru!", "success")
          .then(res => {
            if (res) {
              this.fetchData()
            }
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
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
        <button className="button is-danger is-small" onClick={() => this.deleteProduct(props.value)}>Hapus</button>
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
            (this.state.productList && !this.state.isFetching) && 
            <ReactTable
              data={this.state.productList}
              columns={columns}
              defaultPageSize={8}></ReactTable>
          }
          {
            (this.state.isFetching) &&
            <LoadingSpinner condition={true}></LoadingSpinner>
          }
        </div>
      </div>
    )
  }
}

export const AdminProductList = withRouter(componentName)