import React, { Component } from 'react'

class component extends Component {
  render() {
    return (
      <div className="field">
        {/* <label className="label">Search Product</label> */}
        <div className="control has-icons-right">
          <input className="input" type="text" placeholder="Search Product"/>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
      </div>
    );
  }
}

export const FormText = component