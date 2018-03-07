import React from 'react'
import './ProductItem.css'
import { withRouter } from 'react-router-dom'
import { formatterUtil } from '../utils/formatter'
import { storeProduct, emptyProduct } from '../actions/productDetailActions'
import { connect } from 'react-redux'

const productItem = withRouter((props) => {
  const handleClick = (e) => {
    props.storeProduct(props.data)
    props.history.push(props.data.id)
  }

  return (
    <div className="column is-4">
      <div className="box product_item">
        <img src={props.data.images.primary} alt={props.data.images.primary}/>
        <h2 className="title is-6">{props.data.name}</h2>
        <p className="subtitle is-6">{formatterUtil.prettifyPrice(props.data.price)}</p>
        <div className="has-text-right">
          <button className="button is-info is-small" onClick={handleClick}>Lihat Detail</button>
        </div>
      </div>
    </div>
  );
})

const mapStateToProps = (state) => {
  return {
    productDetail: state.productDetail
  }
}

export const ProductItem = connect(mapStateToProps, {storeProduct, emptyProduct})(withRouter(productItem))