import React, { Component } from 'react'
import { FormText } from '../components/forms/FormText'
import { FormNumber } from '../components/forms/FormNumber'
import { FormTextArea } from '../components/forms/FormTextarea'
import { FormMultipleImageUploader } from '../components/forms/FormMultipleImageUploader'
import { productService } from '../services/product.services'
import { withRouter } from 'react-router-dom'
import swal from 'sweetalert'
import { LoadingSpinner } from '../components/LoadingSpinner';

class componentName extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formData: {
        images: {
          others: [],
          primary: ''
        }
      },
      requiredFields: ['name', 'price', 'description'],
      isLoading: false,
      isSubmit: false
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

  async componentWillMount() {
    if (this.props.productId) {
      this.setState({
        isLoading: true
      })
      try {
        const res = await productService.getSingleProduct(this.props.productId)
        if (res.data.status==='success') {
          this.setState({
            formData: res.data.data
          })
        }
      } catch (error) {
        console.log(error)
      }
      this.setState({
        isLoading: false
      })
    }
  }

  handleAddImage(data) {
    if (this.state.formData.images.others.length) {
      this.setState({
        formData: {...this.state.formData, 
          images: {
            others: [...this.state.formData.images.others, data],
            primary: this.state.formData.images.primary
          }
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

  validateForm = async() => {
    try {
      if (this.state.formData.name &&
        this.state.formData.price &&
        this.state.formData.description &&
        this.state.formData.images.primary &&
        this.state.formData.images.others.length) {
        if (this.props.productId) {
          const res = await productService.updateProduct(this.state.formData, this.props.productId)
          if (res.data.status === 'success') {
            swal("Success!", "Sukses update data produk", "success")
            .then(res => {
              if (res) {
                this.props.history.push('/admin')
              }
            })
          }
        } else {
          const res = await productService.createNewProduct(this.state.formData)
          if (res.data.status === 'success') {
            swal("Success!", "Sukses membuat data baru!", "success")
            .then(res => {
              if (res) {
                this.props.history.push('/admin')
              }
            })
          }
        }
      } else {
        swal("Oops!", "Mohon Lengkapi Formnya :3", "error")
      }
    } catch (error) {
      console.log(error)
      swal("Oops!", "An error has occured", "error")
    }
  }
  
  render() {
    return (
      <div>
        {/* <h4>Admin Product Form</h4> */}
        <pre>{JSON.stringify(this.state.formData, null, 2) }</pre>
        {
          (this.state.isLoading) ?
          <LoadingSpinner condition={true}></LoadingSpinner>
          :
          <div>
            <FormText
              label={'Name Produk'}
              placeholder={'Masukkan Nama Produk'}
              onChange={this.handleInputChange}
              name={'name'}
              value={this.state.formData.name}
              ></FormText>
            <FormNumber
              label={'Harga'}
              name={'price'}
              onChange={this.handleInputChange}
              value={this.state.formData.price}></FormNumber>
            <FormTextArea
              label={'Deskripsi Produk'}
              placeholder={'Bahan terbuat dari kain sutra India'}
              name={'description'}
              onChange={this.handleInputChange}
              value={this.state.formData.description}></FormTextArea>
            <FormMultipleImageUploader
              label={'Foto/Gambar Produk'}
              handleAddImage={this.handleAddImage.bind(this)}
              handleDelete={this.handleDelete.bind(this)}
              handlePrimary={this.handlePrimary.bind(this)}
              images={this.state.formData.images || {}}></FormMultipleImageUploader>
            <hr/>
            <div className="has-text-centerd">
              <button className="button" onClick={this.validateForm}>Submit</button>
            </div>
          </div>
        }
      </div>
    )
  }
}

export const AdminProductForm = withRouter(componentName)