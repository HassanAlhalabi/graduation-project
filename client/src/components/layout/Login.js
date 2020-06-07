import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class Login extends Component {
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

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} className='login-signup-btn'>
          {this.props.buttonLabel}
          Signup or Login
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
            <ul className="list-unstyled text-center">
              <li className="mb-3">
                <a
                  className="nav-link px-2 text-white rounded"
                  id="google-login"
                  href="/auth/google"
                >
                  <i className="fab fa-google-plus-g fa-lg" /> Login With Google
                </a>
              </li>
              <li>
                <a
                  className="nav-link px-2 text-white rounded"
                  href="/auth/facebook"
                  id="facebook-login"
                >
                  <i className="fab fa-facebook fa-lg" /> Login With Facebook
                </a>
              </li>
            </ul>
          </ModalBody>
          <ModalFooter />
        </Modal>
      </div>
    );
  }
}

export default Login;
