const fs = require('fs')


//The getProducts function take done as callback
//It will read the product.json file
const getProducts = function(done){
    
  fs.readFile('./src/products.json', (err, fileContent) => {
    if (err) {
      return ("Encounting Errors while getting products details")
    }
//parse the filecontent and save it in another varible say productdata
    let productData = JSON.parse(fileContent);
//return the callback with first parameter as undefined and second parameter as productdata
    return done(undefined, productData)
  })
       
}
//The function getProductById will take two parameters first the id and second the callback
//It will read the product.json file
const getProductById = function(productId,done){
  fs.readFile('./src/products.json', (err, fileContent) => {
    if (err) {
      return done("Encountered error while getting products detail")
    }
    let productData = JSON.parse(fileContent)
    const productDetails = productData.find(prd => prd.id == productId)
    if (productDetails === undefined) {
      return done("No product found for the requested product id");
    }
  //return the callback with first parameter as undefined and second parameter as productDetails
    return done(undefined, productDetails)
  })
      
}
//The updateProductDetails method will take productDetails and done as callback
//It will read the product.json file
const updateProductDetails = function (productDetails, done) {
  fs.readFile('./src/products.json', (err, fileContent) => {
    if (err) {
      return done("Encountered error while updating products detail");
    }

    let productData = JSON.parse(fileContent);
    console.log('ProductDetails:', productDetails);
    productData.forEach(prd => console.log('Product id:', prd.id));

    let productToUpdate = productData.find(prd => prd.id == productDetails.id);

    if (!productToUpdate) {
      return done('No product found for the requested productId!!');
    }

    productToUpdate.name = productDetails.name;
    productToUpdate.description = productDetails.description;
    productToUpdate.price = productDetails.price;
    productToUpdate.quantity = productDetails.quantity;

    fs.writeFile('./src/products.json', JSON.stringify(productData), (err) => {
      if (err) {
        return done('Encountered error while updating product details');
      }
      return done(undefined, 'Product details updated successfully');
    });
  });
};

const addProduct = function (productDetails, done) {
  fs.readFile('./src/products.json', (err, fileContent) => {
    if (err) {
      return done('Encountered error while adding a product');
    }

    let productData = JSON.parse(fileContent);
    productData.push(productDetails);

    fs.writeFile('./src/products.json', JSON.stringify(productData), (err) => {
      if (err) {
        return done('Encountered error while adding a product');
      }
      return done(undefined, productDetails);
    });
  });
};
  //The method deleteProductById will take productId and done as parameters
  //It will read the product.json file

const deleteProductById = function (productId, done) {
  fs.readFile('./src/products.json', (err, fileContent) => {
    if (err) {
      return done("Encountered error while deleting a product");
    }
    let productData = JSON.parse(fileContent);
    let index = productData.findIndex(prd => prd.id == productId);

    if (index == -1) {
      return done('No product found for requested productId!!');
    }

    productData.splice(index, 1); // Remove the product from the array

    fs.writeFile('./src/products.json', JSON.stringify(productData), (err) => {
      if (err) {
        return done('Encountered error while deleting a product');
      }
      // Return the callback with undefined and the deleted product ID
      done(undefined, productId);
    });
  });
};


module.exports ={
    getProducts,
    getProductById,
    updateProductDetails,
    addProduct,
    deleteProductById
    
}