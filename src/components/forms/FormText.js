import React from 'react'

const component = (props) => {
  return (
    <div className="field">
      {/* <label className="label">Search Product</label> */}
      <div className="control has-icons-right">
        <input className="input" type="text" onChange={props.onChange} placeholder="Search Product"/>
        <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span>
      </div>
    </div>
  )
}

export const FormText = component