import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { productService } from './services/product.services'

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
    if (res.data.status === 'success') {
      this.setState({
        productList: res.data.product_list
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {
          this.state.productList && this.state.productList.map((data, index) => 
            <div key={index}>
              <h2>{data.name}</h2>
              <p>{data.description}</p>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
