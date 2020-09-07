const Product = require('../models/Product');
const { serverError } = require('../util/server');

exports.getAllProducts = async (req, res) => {
  const products = await Product.find().sort({ date: 'descending' });
  res.json(products);
  try {
  } catch (err) {
    res.status(500).send('Server error')
  }
}

exports.getAllProductsByUser = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id }).populate('user');
    return !products ? res.status(400).json({ msg: 'no products where found for this user' }) :
      res.json(products);
  } catch (error) {
    serverError(error, res);
  }
}

exports.addProduct = async (req, res) => {
  const product = req.body
  const { id } = req.user;
  const newProduct = new Product({ user: id, ...product });
  try {
    await newProduct.save();
    res.json({ newProduct });
  } catch (error) {
    serverError(error, res);
  }
}


exports.updateProduct = async (req, res) => {
  const filter = { _id: req.params.productId };
  const data = { ...req.body };
  const options = { returnOriginal: false };
  try {
    const product = await Product.findOneAndUpdate(filter, data, options);
    return res.json({ product });
  } catch (error) {
    serverError(error, res);
  }
}

exports.deleteItem = async (req, res) => {
  const filter = { _id: req.params.productId };
  const options = { returnOriginal: false };
  try {
    const product = await Product.findByIdAndDelete(filter, options);
    return product ?
      res.json({ product }) :
      res.status(301).json({ msg: 'No product was found' });
  } catch (error) {
    serverError(error, res);
  }
}
