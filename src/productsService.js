
//import the DAO layer
const productDao = require('./productDao')


const getProducts = function(done){
//call dao getproducts method and pass the parameter
  productDao.getProducts(done)
}

const getProductById = function(id, done){
  //call dao getProductById method and pass the parameter
  productDao.getProductById(id,done)

 }
const updateProductDetails = function(productDetails, done){
  //call dao updateProductDetails method and pass the parameter
productDao.updateProductDetails(productDetails,done)
}

const addProduct = function (productDetails, done) {
  productDao.addProduct(productDetails, done);
};

const deleteProductById = (productId, done) => {
  // Call dao deleteProductById method and pass the parameter
  productDao.deleteProductById(productId, done);
}




module.exports = {
  getProducts, getProductById, updateProductDetails, addProduct, deleteProductById
}
