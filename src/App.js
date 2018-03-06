import React, { Component } from 'react';
import './App.css';
import { productService } from './services/product.services'
import { FormText } from './components/forms/FormText'
import { Header } from './containers/Header'
import { LoadingSpinner } from './components/LoadingSpinner';
import { ProductItem } from './components/ProductItem';

class App extends Component {
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

  render() {
    return (
      <div className="App">
        <Header></Header>
        {/* Slicing router here later */}
        <div className="store_container scroll_wrapper">
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
                  data={data}></ProductItem>
              )
              :
              <LoadingSpinner
                condition={true}></LoadingSpinner>
            }
            
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
