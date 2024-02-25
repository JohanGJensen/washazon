import express from 'express';

// routes
import productOverview from './getProductOverview';
import productDetails from './getProductDetails';

const product = express.Router();

product.get('/product-overview', productOverview);
product.get('/product-detail/:productid', productDetails);

export default product;
