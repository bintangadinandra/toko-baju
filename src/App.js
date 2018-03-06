import React, { Component } from 'react';
import './App.css';
import { productService } from './services/product.services'
import { FormText } from './components/forms/FormText'
import { Header } from './containers/Header'
import { LoadingSpinner } from './components/LoadingSpinner';

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
        <div className="store_container">
          <div className="search_bar">
            <FormText></FormText>
          </div>
          <hr/>
          <h2 className="title is-3">Cari Produk</h2>
          <div className="columns">
            {
              this.state.productList ? this.state.productList.map((data, index) =>
                <div className="column is-4" key={index}>
                  <div className="box">
                  <img src={data.images.find(data => {return data.is_primary === true}).url} alt="image"/>
                  <h2>{data.name}</h2>
                  <p>{data.price}</p>
                  </div>
                </div>
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
