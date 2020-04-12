import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      <Link to="/my-products" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        My Products
      </Link>
      <Link to="/add-product" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Add Product
      </Link>
    </div>
  );
};
