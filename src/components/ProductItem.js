import React, { Component } from 'react'
import './ProductItem.css'
import { withRouter } from 'react-router-dom'

const componentName = withRouter((props) => {
  const handleClick = (e) => {
    props.history.push(props.data.id)
  }

  return (
    <div className="column is-4">
      <div className="box product_item">
        <img src={props.data.images.primary} alt="image"/>
        <h2 className="title is-6">{props.data.name}</h2>
        <p className="subtitle is-6">{props.data.price}</p>
        <div className="has-text-right">
          <button className="button is-info is-small" onClick={handleClick}>Lihat Detail</button>
        </div>
      </div>
    </div>
  );
})

export const ProductItem = componentName