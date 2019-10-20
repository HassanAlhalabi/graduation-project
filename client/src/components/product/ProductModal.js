import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//import {connect} from 'react-redux';

//import {getProduct} from '../../redux/reducers/productsReducer';

export class ProductModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  //   componentDidMount(){

  //   }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          {this.props.buttonLabel}
          {this.props.product.name}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} text="center">
            Signup or Login
          </ModalHeader>
          <ModalBody>
            <p>{this.props.product.name}</p>
            <p>{this.props.product.description}</p>
            <p>{this.props.product.price}</p>
          </ModalBody>
          <ModalFooter />
        </Modal>
      </div>
    );
  }
}

export default ProductModal;
