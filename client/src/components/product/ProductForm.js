import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
import axios from 'axios';

import {connect} from 'react-redux';
import {addNewProductDispatch} from '../../redux/reducers/productsReducer';

//import InputGroup from '../common/InputGroup';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectInput from '../common/SelectInput'; 
import SectionTitle from '../common/SectionTitle';

export class ProductForm extends Component {

  state = {
    id: '',
    name: '',
    price: 0,
    prevPrice: 0,
    category: 'unavailable',
    offer: false,
    availableQuantity: 0,
    brand: 'unavailable',
    size: 'unavailable',
    color: 'unavailable',
    description: '',
    image: '',
    errors: {},
    offerDisabled: true,
    colorDisabled: true,
    categories: ['men clothes','women clothes','phones','accessories'],
    sizes: ['sm','md','lg','xl']
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onOfferChecked = e => {
    this.setState({
      offerDisabled: !this.state.offerDisabled,
      offer: !this.state.offer
    });
  };

  onColorChecked = e => {
    this.setState({
      colorDisabled: !this.state.colorDisabled,
    });
    if(this.state.colorDisabled === false ){
      this.setState({
        color: 'unavailable',
      });
    } 
  };

  onUpload = e => {
    e.preventDefault();

    // let image = e.currentTarget.querySelector('input[type="file"]').value;

    axios
      .post(`/api/products/product/images/upload`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleOnDrop = (files, rejectedFiles) => {
    console.log(files);
    
          files.forEach((file, i) => this.setState({ image: file.name }));
    // Push all the axios request promise into a single array
    const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tags', `codeinfuse, medium, gist`);
      formData.append(
        'upload_preset',
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      ); // Replace the preset name with your own
      formData.append('api_key', process.env.REACT_APP_CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary key
      formData.append('timestamp', (Date.now() / 1000) | 0);

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios
        .post(
          'https://api.cloudinary.com/v1_1/dujpb3qos/image/upload',
          formData,
          {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
          }
        )
        .then(response => {
          const data = response.data;
          const fileURL = data.secure_url; // You should store this URL for future references in your app
          console.log(data);
        
        });

    });

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      // ... perform after upload is successful operation
  
    });


  };

  handleSubmit = e => {
    e.preventDefault();

    // ******* Validate Data *******

    let productProps = {
      id: Math.ceil(Math.random(1) * 100000000000),
      name: this.state.name,
      price: this.state.price * 1,
      prevPrice: this.state.prevPrice * 1,
      category: this.state.category,
      offer: this.state.offer,
      availableQuantity: this.state.availableQuantity,
      brand: this.state.brand,
      size: this.state.size,
      color: this.state.color,
      description: this.state.description,
      image: this.state.image
    }

    // .... Check for empty fields

    let errors = {}
    Object.keys(productProps).map(key => {
      if(productProps[key] === ''){
        errors[key] = 'Product ' + key + ' Is Required'
      }
    })

    // .... Check for price input
    
    if(productProps.price === 0) {
      errors['price'] = 'Product Price is Required'
    } else if (productProps.price < 0) {
      errors['price'] = 'Product Price Can\'t Be a Negative Value !!!'
    }

    if(this.state.offerDisabled === false) { // With offer
      if(productProps.prevPrice === 0) {
        errors['prevPrice'] = 'Product previous price is Required'
      } else if (productProps.prevPrice < 0) {
        errors['prevPrice'] = 'Product previous price Can\'t Be a Negative Value !!!'
      } else if (productProps.prevPrice <= productProps.price)
        errors['prevPrice'] = 'Product previous price Can\'t Be equal or less than new price !!!'
    } 

    // .... Check available quantity input
    if(productProps.availableQuantity === 0) {
      errors['availableQuantity'] = 'Product Quantity is Required'
    } else if (productProps.availableQuantity < 0) {
      errors['availableQuantity'] = 'Product Quantity Can\'t Be a Negative Value !!!'
    }

    this.setState({
      errors : errors
    })

    //if there is no errors:
    if(Object.keys(errors).length === 0) {
      this.props.addNewProduct(productProps)
    }
  }



  render() {
    
    const { errors } = this.state;

    console.log(this.state)

    return (
      <div className="add-product">
        <div className="container">
          <SectionTitle title={'Add new product'}/>
          <p className="lead mb-5">
            Add a new product, and make sure to include any details with
            specifications.
          </p>
          <form>
            <small className="d-block mb-4 text-muted required-product-hint">
              <span className='asterisk'><i className="fas fa-asterisk"></i></span> = required field
            </small>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <TextFieldGroup
                    placeholder="Product title"
                    name="name"
                    onChange={this.onChange}
                    type="text"
                    error={errors.name}
                    value={this.state.name}
                    info="Be specific"
                    required='required'
                  />
                  <TextFieldGroup
                    placeholder="Price"
                    name="price"
                    onChange={this.onChange}
                    type="number"
                    error={errors.price}
                    // value={this.state.price}
                    info="Product selling price in USD$ currency"
                    required='required'
                  />
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="offer"
                      value={this.state.offer}
                      checked={this.state.offer}
                      onChange={this.onOfferChecked}
                      id="offer"
                    />
                    <label htmlFor="current" className="form-check-label">
                      Make Offer
                    </label>
                  </div>
                  <TextFieldGroup
                    placeholder="Price before markdown offer"
                    name="prevPrice"
                    onChange={this.onChange}
                    type="number"
                    error={errors.prevPrice}
                    // value={this.state.prevPrice}
                    info="Product selling price in USD$ currency before this offer takes place"
                    disabled={this.state.offerDisabled ? 'disabled' : ''}
                    required = 'required'
                  />
                  <SelectInput
                    name="category"
                    onChange={this.onChange}
                    error={errors.category}
                    value={this.state.category}
                    info="Item Main Category Clothes,Electronics,Phones...etc"
                    options={this.state.categories}
                    optionLettersCase={'text-capitalize'}
                    required = 'required' 
                  />
                  <TextFieldGroup
                    placeholder="brand"
                    name="brand"
                    onChange={this.onChange}
                    type="text"
                    error={errors.brand}
                    value={this.state.brand}
                    info="Item Brand"
                  />
                  <SelectInput
                    name="size"
                    onChange={this.onChange}
                    error={errors.size}
                    value={this.state.size}
                    info="Item Size small,medium,large.....etc"
                    options={this.state.sizes}
                    optionLettersCase={'text-uppercase'} 
                  />
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="color-check"
                      value={this.state.color}
                      onChange={this.onColorChecked}
                      id="color-check"
                    />
                    <label htmlFor="current" className="form-check-label">
                      Choose Color
                    </label>
                  </div>
                  <TextFieldGroup
                    name="color"
                    onChange={this.onChange}
                    type="color"
                    error={errors.color}
                    info="Item Color...MAKE SURE COLOR HAS BEEN CAHNGED INSIDE BOX"
                    disabled={this.state.colorDisabled ? 'disabled' : ''}
                    id='color'
                  />
                  <TextFieldGroup
                    placeholder="Available Quantity For Selling"
                    name="availableQuantity"
                    onChange={this.onChange}
                    type="number"
                    error={errors.availableQuantity}
                    // value={this.state.quantity}
                    info="The exact number of this product items which available for selling"
                    required = 'required'
                  />
                  {/* <form onSubmit={this.onUpload}>
                    <TextFieldGroup
                      name="image"
                      onChange={this.onChange}
                      type="file"
                      error={errors.image}
                      value={this.state.image}
                      info="Select product image and press upload button before submitting the product"
                    />
                    <input type="submit" />
                  </form> */}
                  <TextAreaFieldGroup
                    placeholder="Product Description"
                    className="mt-4"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                    error={errors.description}
                    info="A brief description about the product"
                    required = 'required'
                  />
                </div>
              </div>  
              <div className='col-md-6'> 
                {this.state.errors.image && <div className="alert alert-danger rounded-0 text-capitalize">{this.state.errors.image}</div>} 
                {/* <div className='product-imgs-preview d-flex'>
                  <img id="output_image"/>
                </div> */}
                <Dropzone
                  onDrop={this.handleOnDrop}
                  multiple
                  accept="image/*"
                >
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="input-group upload-box position-relative"
                    >
                      <div className="upload-box-text">
                        <input
                          {...getInputProps()}
                          className="form-control form-control-lg"
                          type="file"
                          name="image"
                          required
                        />
                        <p className="input-group-text">
                          Browse for images Or Drop the images here{' '}
                          <i className="fas fa-upload fa-2x ml-2" />{' '}
                        </p>
                      </div>
                      <span className='asterisk position-absolute'><i className="fas fa-asterisk"></i></span>
                    </div>
                  )}
                </Dropzone>
                <small className='orange-color font-weight-bold'>
                  Upload your product's images by drag &amp; drop OR select
                  them from your local storage drive
                </small>
                <div className='mt-5'>
                  <button type='submit' className="btn btn-primary btn-lg" onClick={this.handleSubmit}>
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}



export default connect(null,addNewProductDispatch)(ProductForm);
