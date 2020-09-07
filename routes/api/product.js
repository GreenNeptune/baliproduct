const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const { addProduct, getAllProducts } = require('../../controllers/productHandler');
const { isValidToken } = require('../../controllers/authHandler');

/**
 * @route GET /api_v1/products
 * @Desc get all products sorted by date in descending order
 */

router.get('/', getAllProducts);

/**
 * @route GET /api_v1/products/:id
 * @Desc get product by ID
 */

router.get('/:id',
  async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.json(product);
    try {
    } catch (err) {
      res.status(500).send('Server error')
    }
  }
);

/**
 * @route Post /api_v1/products/
 * @Desc add Product  
 */
router.post('/', isValidToken, addProduct)


module.exports = router;