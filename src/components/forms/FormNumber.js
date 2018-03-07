import React from 'react'

const component = (props) => {
  return (
    <div className="field">
      {
        (props.label) && 
        <label className="label">{props.label}</label>
      }
      <div className="control has-icons-right">
        <input className="input" type="number" name={props.name} onChange={props.onChange} placeholder={props.placeholder || 'Search Product'} value={props.value}/>
        <span className="icon is-small is-right">
        </span>
      </div>
    </div>
  )
}

export const FormNumber = component