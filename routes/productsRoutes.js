const express = require('express');
const router = express.Router();

//Get models
const Product = require('../models/product');
const User = require('../models/user');

//Get validation
const validateProductInput = require('../validation/product');

//@route    GET /api/products
//@desc     Get all products
//@access   Public
router.get('/', (req, res) => {
  Product.find()
    .sort({ date: -1 })
    .then(products => res.send(products))
    .catch(err =>
      res.status(404).json({ noproductsfound: 'No Products Found' })
    );
});

//@route    GET /api/products/:id
//@desc     Get a single product
//@access   Public
router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(product => res.send(product))
    .catch(err => res.status(404).json({ noproductfound: 'No Product Found' }));
});

//@route    GET /api/products/:id
//@desc     Edit a product
//@access   Private

router.post('/:id', (req, res) => {
  if (!req.user) {
    res
      .status(403) //forbidden
      .json({ notloggedin: 'You need to login to edit product' });
  } else {
    Product.findById(req.params.id)
      .then(product => {
        if (product.userId === req.user.id) {
          const productFields = {};
          if (req.body.name) productFields.name = req.body.name;
          if (req.body.description)
            productFields.description = req.body.description;
          if (req.body.price) productFields.price = req.body.price;

          Product.findOneAndUpdate(
            { userId: req.user.id },
            { $set: productFields },
            { new: true }
          ).then(product => res.send(product));
        } else {
          // unauthorized
          res.status(401).json({
            unautherized: 'You are not authorized to access this product'
          });
        }
      })
      .catch(err =>
        res
          .status(404) //not found
          .json({ noproductfound: 'No product found to edit with this ID' })
      );
  }
});

//@route    POST /api/products/
//@desc     Create a new product
//@access   Private
router.post('/', (req, res) => {
  uploadImage(req.body, req.user.id);
});

//@route    DELETE  api/products/:id
//@desc     Delete product by product id
//@access   Private
router.delete('/:id', (req, res) => {
  User.findById(req.user.id)
    .then(user => {
      Product.findById(req.params.id)
        .then(product => {
          if (product.userId.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' });
          }

          product.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ productnotfound: 'No product found!' })
        );
    })
    .catch(err => res.status(404).send(err));
});

let imageUrl = '';
async function uploadImage(body, userId) {
  const cloudinary = require('cloudinary');

  await cloudinary.v2.uploader.upload(
    body.image,
    { width: 200, height: 400, crop: 'fill' },
    (err, res) => {
      imageUrl = res.url;
    }
  );

  createProduct(body, userId);
}

createProduct = (body, userId) => {
  const newProduct = new Product({
    userId: userId,
    name: body.name,
    description: body.description,
    price: body.price,
    picture: imageUrl,
    date: new Date()
  });
  newProduct
    .save()
    .then(product => console.log(product))
    .catch(err => console.log(err));
};

module.exports = router;
