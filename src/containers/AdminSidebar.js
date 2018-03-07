import React, { Component } from 'react'
import './AdminSidebar.css'

class componentName extends Component {
  render() {
    return (
      <div className="admin_sidebar">
        <h2 className="title is-2">Admin Panel</h2>
        <ul>
          <li>Product List</li>
        </ul>
      </div>
    )
  }
}

export const AdminSidebar = componentName