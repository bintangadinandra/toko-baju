import React, { Component } from 'react';
import './ProductList.css';
import { productService } from '../services/product.services'
import { FormText } from '../components/forms/FormText'
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ProductItem } from '../components/ProductItem';
import { storeProductList, emptyProductList } from '../actions/productListActions'
import { connect } from 'react-redux'

class productList extends Component {
  constructor() {
    super()
    this.state = {
      productList: '',
      isLoadingMore: false,
      crntLastUpdated: '',
      isBottom: false,
      searchKey: ''
    }
  }

  async componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    window.scrollTo(0, this.props.uiState || 0)
    if (!this.props.ProductList.crntLastUpdated) {
      const res = await productService.getProduct()
      if (res.data.status === 'success') {
        this.props.storeProductList({
          data: [...res.data.data_list],
          crntLastUpdated: res.data.data_list.pop().updatedAt
        })
      }
    }
    
  }

  onScroll = () => {
    if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && !this.state.isLoadingMore && !this.state.isBottom) {
      this.setState({
        isLoadingMore: true
      })
      productService.getMoreProduct(this.props.ProductList.crntLastUpdated).then(
        res => {
          if (res.data.status === 'success') {
            if (res.data.data_list.length !== 0) {
              this.props.storeProductList({
                data: [...this.props.ProductList.data, ...res.data.data_list],
                crntLastUpdated: res.data.data_list.pop().updatedAt
              })
            } else {
              this.setState({
                isBottom: true
              })
            }
          }
          this.setState({
            isLoadingMore: false
          })
        }
      )
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  handleInputChange = (e) => {
    this.setState({
      searchKey: e.target.value
    })
  }

  render() {
    return (
      <div className="store_container scroll_wrapper">
        <h2 className="title is-3">Cari Produk</h2>
        <div className="search_bar">
          <FormText 
            onChange={this.handleInputChange}></FormText>
        </div>
        {
          this.state.searchKey &&
          <p className="search_key">Memunculkan hasil pencarian untuk: <strong>{this.state.searchKey}</strong></p>
        }
        <hr/>
        <div className="columns is-multiline">
          {
            (this.props.ProductList) && this.props.ProductList.data.map((data, index) =>
              <ProductItem 
                key={index} 
                data={data}></ProductItem>
            )
          }
          {
            (this.state.isLoadingMore) && 
            <div className="column is-12">
              <LoadingSpinner
                condition={true}>
              </LoadingSpinner>
            </div>
          }
        </div>
        <div className="fetch_wrap">
          <button className="button is-primary">
            Refresh
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ProductList: state.productList,
    uiState: state.uiState
  }
}

export const ProductList = connect(mapStateToProps, { storeProductList, emptyProductList })(productList) 