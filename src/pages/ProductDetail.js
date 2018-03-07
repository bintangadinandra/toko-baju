import React, { Component } from 'react'
import './ProductDetail.css'
import { productService } from '../services/product.services'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { withRouter } from 'react-router-dom'
import { storeProduct, emptyProduct } from '../actions/productDetailActions'
import { connect } from 'react-redux'
import { formatterUtil } from '../utils/formatter'

class componentName extends Component {
  constructor(){
    super()
    this.state = {
      productId: '',
      crntImage: ''
    }
  }
  
  async componentWillMount() {
    let id = window.location.pathname.split('/')[1]
    if (this.props.productDetail) {
      this.setState({
        crntImage: this.props.productDetail.images ? this.props.productDetail.images.primary : ''
      })
    }
    try {
      const res = await productService.getSingleProduct(id)
      if (res.data.status === 'success') {
        this.props.storeProduct(res.data.data)
        this.setState({
          productId: id,
          crntImage: this.state.crntImage || (res.data.data.images ? res.data.data.images.primary : '')
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  backToList = () => {
    this.props.history.push('/')
  }

  changeImage(data) {
    this.setState({
      crntImage: data
    })
  }

  render() {
    let {productDetail} = this.props;
    return (
      <div className="product_detail_wrap store_container scroll_wrapper">
        {
          (productDetail) ? 
          <div className="detail_wrapper">
            <div className="columns is-multiline">
              <button className="column is-1 button is-primary" onClick={this.backToList}>Back</button>
              <div className="column is-9">
                <h2 className="subtitle is-11">Detail Produk</h2>
                <h2 className="title is-3">{productDetail.name}</h2>
              </div>
              <div className="column is-8 is-offset-2">
                <div className="box">
                  <div className="image_carousel">
                    <div className="shown_image">
                      <img src={this.state.crntImage || 'https://nhccpk.com/wp-content/uploads/2015/02/qw.jpg'} alt={this.state.crntImage}/>
                    </div>
                    <div className="carousel_preview_wrapper">
                      {
                        (productDetail.images) && productDetail.images.others.map((data, index) => 
                          <div onClick={() => this.changeImage(data)} key={index} className={`carousel_preview ${this.state.crntImage===data ? 'selected' : ''}`}>
                            <img src={data} alt={data}/>
                          </div>
                        )
                      }
                    </div>
                  </div>
                  <p><strong>Harga:</strong>{formatterUtil.prettifyPrice(productDetail.price)}</p>
                  <p><strong>Deskripsi: </strong>{productDetail.description || 'Tidak ada Deskripsi'}</p>
                </div>
              </div>
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