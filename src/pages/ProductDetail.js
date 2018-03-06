import React, { Component } from 'react'
import './ProductDetail.css'
import { productService } from '../services/product.services'
import { LoadingSpinner } from '../components/LoadingSpinner'

class componentName extends Component {
  constructor(){
    super()
    this.state = {
      productId: '',
      data: ''
    }
  }
  
  async componentWillMount() {
    let id = window.location.pathname.split('/')[1]
    const res = await productService.getSingleProduct(id)
    this.setState({
      productId: id,
      data: res.data
    })
  }

  render() {
    return (
      <div className="product_detail_wrap">
        {
          (this.state.data) ? 
          <div className="head">
            <button className="button is-primary">Back</button>
            <div>
              <h2 className="subtitle is-6">Detail Produk</h2>
              <h2 className="title is-3">{this.state.data.name}</h2>
            </div>
          </div>
          :
          <LoadingSpinner condition={true}></LoadingSpinner>
        }
        
      </div>
    )
  }
}

export const ProductDetail = componentName