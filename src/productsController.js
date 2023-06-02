//import the productService
const productsService = require('./productsService')

const getProducts = (done) => {
   //call service getproducts method and pass the parameter
  productsService.getProducts(done)
}

const getProductById = (productId, done) => {
   //call service getProductById method and pass the parameter
  productsService.getProductById(productId,done)
}

const updateProductDetails = (productDetails, done) => {
  //call service updateProductDetails method and pass the parameter
  productsService.updateProductDetails(productDetails, done)
}

const addProduct = function (productDetails, done) {
  productsService.addProduct(productDetails, done);
};

 const deleteProductById = (productId, done) => {
   //call service deleteProductById method and pass the parameter
   productsService.deleteProductById(productId, done)
 }

module.exports = {
  getProducts, getProductById, updateProductDetails, addProduct, deleteProductById
}
