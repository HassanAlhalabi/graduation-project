import React, { Component } from "react";
import ProductCard from "../presentational/Productcard";

//Define sample data for now to display in your cart.
const sampleCartData = [
  { name: "Test 1", description: "Test Product 1", price: 20, id: 1 },
  { name: "Test 2", description: "Test Product 2", price: 10, id: 2 },
  { name: "Test 3", description: "Test Product 3", price: 30, id: 3 }
];

class Cart extends Component {
  render() {
    return (
      <div className="cart container">
        <div className="cart-info container">
          <h2 className="text-center display-5">Your Cart!</h2>
          <div classNmae="row">
            {sampleCartData.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
