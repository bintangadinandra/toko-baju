import React, { Component } from 'react'
import { FormText } from '../components/forms/FormText'
import { FormNumber } from '../components/forms/FormNumber'
import { FormTextArea } from '../components/forms/FormTextarea'
import { FormMultipleImageUploader } from '../components/forms/FormMultipleImageUploader'

class componentName extends Component {

  constructor() {
    super()
    this.state = {
      formData: {
        images: {
          others: []
        }
      }
    }
  }
  handleDelete() {

  }

  handlePrimary (data) {
    this.setState({
      formData:{
        images: {
          primary: data
        }
      }
    })
  }

  handleAddImage(data) {
    if (this.state.formData.images.others.length) {
      this.setState({
        formData: {...this.state.formData, 
          images: {
            others: [...this.state.formData.images.others, data]
          },
          primary: this.state.formData.images.primary
        }
      })
    } else {
      this.setState({
        formData: {...this.state.formData, 
          images: {
            others: [data],
            primary: data
          }
        }
      })
    }
  }

  handleInputChange = (e) => {
    this.setState({
      formData: {...this.state.formData, [e.target.name]: e.target.value }
    })
  }

  test = () => {
    console.log(this.state.formData)
  }
  
  render() {
    return (
      <div>
        <h4>Admin Product Form</h4>
        <FormText
          label={'Name Produk'}
          placeholder={'Masukkan Nama Produk'}
          onChange={this.handleInputChange}
          name={'name'}
          ></FormText>
        <FormNumber
          label={'Harga'}
          name={'price'}
          onChange={this.handleInputChange}></FormNumber>
        <FormTextArea
          label={'Deskripsi Produk'}
          placeholder={'Bahan terbuat dari kain sutra India'}
          name={'description'}
          onChange={this.handleInputChange}></FormTextArea>
        <FormMultipleImageUploader
          label={'Foto/Gambar Produk'}
          handleAddImage={this.handleAddImage.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
          handlePrimary={this.handlePrimary.bind(this)}
          images={this.state.formData.images || {}}></FormMultipleImageUploader>
        <button className="button" onClick={this.test}></button>
      </div>
    )
  }
}

export const AdminProductForm = componentName