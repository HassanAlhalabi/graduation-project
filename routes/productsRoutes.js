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

//@route    GET /api/products/user/:id
//@desc     Get a specific user products
//@access   Public
router.get('/user/:id', (req, res) => {
  Product.find({ userId: req.params.id })
    .sort({ date: -1 })
    .then(products => res.send(products))
    .catch(err =>
      res.status(404).json({ noproductsfoundforthisuser: 'No Products Found' })
    );
});

//@route    GET /api/products/product/:id
//@desc     Get a single product
//@access   Public
router.get('/product/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(product => res.send(product))
    .catch(err => res.status(404).json({ noproductfound: 'No Product Found' }));
});

//@route    POST /api/products/product/:id
//@desc     Edit a product
//@access   Private

router.post('/product/:id', (req, res) => {
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

//@route    POST /api/products/product
//@desc     Create a new product
//@access   Private
router.post('/product', (req, res) => {
  createProduct(body, userId);
});

//@route    DELETE  api/products/product/:id
//@desc     Delete product by product id
//@access   Private
router.delete('/product/:id', (req, res) => {
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

//@route    POST /api/products/product/images/upload/:image
//@desc     Upload product's image to Cloudinary
//@access   Private
router.post('/product/images/upload', (req, res) => {
  //uploadImage(req.params.image);
  console.log(req.body.image);
});

let imageUrl = '';
const uploadImage = async image => {
  const cloudinary = require('cloudinary');

  await cloudinary.v2.uploader
    .upload(image, { quality: 'auto:low' }, (err, result) => {
      if (err) console.log(err);
      //imageUrl = result.url;
      console.log(result);
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

createProduct = (body, userId) => {
  const specArr = body.specification.split('-').map(spec => spec.trim());
  const newProduct = new Product({
    userId: userId,
    name: body.name,
    description: body.description,
    specifications: specArr,
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
