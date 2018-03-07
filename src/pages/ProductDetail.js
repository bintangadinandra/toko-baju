import React, { Component } from 'react'
import './ProductDetail.css'
import { productService } from '../services/product.services'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { withRouter } from 'react-router-dom'
import { storeProduct, emptyProduct } from '../actions/productDetailActions'
import { connect } from 'react-redux'

class componentName extends Component {
  constructor(){
    super()
    this.state = {
      productId: ''
    }
  }
  
  async componentWillMount() {
    let id = window.location.pathname.split('/')[1]
    const res = await productService.getSingleProduct(id)
    if (res.data.status === 'success') {
      this.props.storeProduct(res.data)
      console.log('Props updated')
      this.setState({
        productId: id
      })
    }
  }

  backToList = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="product_detail_wrap">
        {
          (this.props.productDetail) ? 
          <div className="head">
            <button className="button is-primary" onClick={this.backToList}>Back</button>
            <div>
              <h2 className="subtitle is-6">Detail Produk</h2>
              <h2 className="title is-3">{this.props.productDetail.name}</h2>
              <p>{this.props.productDetail.price}</p>
            </div>
          </div>
          :
          <LoadingSpinner condition={true}></LoadingSpinner>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productDetail: state.productDetail
  }
}

export const ProductDetail = connect(mapStateToProps, { storeProduct, emptyProduct })(withRouter(componentName))