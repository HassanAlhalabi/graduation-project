import React from 'react';

import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleToken } from '../../redux/reducers/authReducer';

const OrderTotal = ({ subtotal, shipping, total }) => (
  <div className="order-total">
    <div className="order-total-inner d-flex justify-content-end">
      <div className="table-responsive w-auto">
        <table className="table">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td className="sub-total">
                <span>$ {subtotal}</span>
              </td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td className="shipping">
                <span>{shipping}</span>
              </td>
            </tr>
            <tr>
              <td className="total-label">Total</td>
              <td className="total">
                <span>$ {total}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="d-flex justify-content-end">
      <StripeCheckout
        description="Desciption here.."
        amount={total * 100}
        token={(token) => {
          console.log(token);
          this.props.handleToken(token);
        }}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn btn-primary">Order Checkout</button>
      </StripeCheckout>
    </div>
  </div>
);

OrderTotal.propTypes = {
  handleToken: PropTypes.func.isRequired,
};

export default connect(null, { handleToken })(OrderTotal);
