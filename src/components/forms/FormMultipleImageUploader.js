import React, { Component } from 'react'
import { FormText } from '../forms/FormText'
import './FormMultipleImageUploader.css'

class componentName extends Component {
  constructor() {
    super()
    this.state = {
      crntInput: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      crntInput: e.target.value
    })
  }
  render() {
    return (
      <div className="form_image">
        <label className="label">{this.props.label}</label>
        <div className="image_input_wrap">
          <FormText onChange={this.handleInputChange}></FormText>
          <button className="button is-info" disabled={!this.state.crntInput} onClick={() => this.props.handleAddImage(this.state.crntInput)}>
            +
          </button>
        </div>
        {
          (this.props.images && this.props.images.others) && this.props.images.others.map((data, index) => 
            <div className="image_item" key={index}>
              <div>{data}</div>
              <div>
                <button className="button is-success is-small" onClick={() => this.props.handlePrimary(data)}>Set As Primary</button>
                <button className="button is-danger is-small" onClick={() => this.props.handleDelete(data)}>-</button>
              </div>
            </div>
          )
        }
        {
          (this.props.images && this.props.images.primary) &&
          <div className="primary Image">
            <h5>Your primary image</h5>
            <img src={this.props.images.primary} alt={this.props.images.primary}/>
          </div>
        }
      </div>
    )
  }
}

export const FormMultipleImageUploader = componentName