import React, { Component } from 'react'
import './ProductItem.css'

const componentName = (props) => {
  return (
    <div className="column is-4">
      <div className="box product_item">
        <img src={props.data.images.primary} alt="image"/>
        <h2 className="title is-6">{props.data.name}</h2>
        <p className="subtitle is-6">{props.data.price}</p>
      </div>
    </div>
  );
}

export const ProductItem = componentName;