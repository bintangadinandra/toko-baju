import React, { Component } from 'react';
import './ProductList.css';
import { productService } from '../services/product.services'
import { FormText } from '../components/forms/FormText'
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ProductItem } from '../components/ProductItem';

class productList extends Component {
  constructor() {
    super()
    this.state = {
      productList: ''
    }
  }

  async componentDidMount() {
    // Api Test
    const res = await productService.getProduct()
    console.log(res.data)
    if (res.data.status === 'success') {
      this.setState({
        productList: res.data.data_list
      })
    }
  }

  handleClick = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div>
        <h2 className="title is-3">Cari Produk</h2>
        <div className="search_bar">
          <FormText></FormText>
        </div>
        <hr/>
        <div className="columns">
          {
            this.state.productList ? this.state.productList.map((data, index) =>
              <ProductItem 
                key={index} 
                data={data}
                onClick={this.handleClick}></ProductItem>
            )
            :
            <LoadingSpinner
              condition={true}></LoadingSpinner>
          }
          
        </div>
        
      </div>
    );
  }
}

export const ProductList = productList