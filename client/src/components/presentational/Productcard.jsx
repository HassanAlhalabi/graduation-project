import React, { Component } from "react";

class Productcard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="col-md-3 card p-2 mx-1">
        <div className="card p-2">
          <h5 className="product display-5 mb-2 card-title text-center">
            {product.name}
          </h5>

          <div className="card-body">{product.description}</div>
          <span className="text-muted">{product.price} $</span>
        </div>
      </div>
    );
  }
}

export default Productcard;
