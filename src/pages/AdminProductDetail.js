import React, { Component } from 'react'
import { AdminProductForm } from '../containers/AdminProductForm'

class componentName extends Component {
  render() {
    return (
      <div>
        <h2>Ubah Data Produk</h2>
        <AdminProductForm productId={window.location.pathname.split('/')[2]}></AdminProductForm>
      </div>
    )
  }
}

export const AdminProductDetail = componentName