import React, { Component } from 'react'
import { AdminProductForm } from '../containers/AdminProductForm'

class componentName extends Component {
  render() {
    return (
      <div>
        <h2>Product Detail Here</h2>
        <AdminProductForm isEdit={false}></AdminProductForm>
      </div>
    )
  }
}

export const AdminProductDetail = componentName