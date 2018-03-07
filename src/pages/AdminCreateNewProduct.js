import React, { Component } from 'react'
import { AdminProductForm } from '../containers/AdminProductForm'

class componentName extends Component {
  render() {
    return (
      <div>
        <h2>Buat Produk Baru</h2>
        <AdminProductForm></AdminProductForm>
      </div>
    )
  }
}

export const AdminCreateNewProduct = componentName