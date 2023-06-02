const { Router } = require('express')
const express = require('express')
const router = express.Router()

const productsController = require('./productsController')
//This method will get all the Product form the product.json 
router.get("/", (req, res) => {
  try {
   //calling the controller getProducts
    productsController.getProducts((err, results) => {
      if (err) {
    //if error return the response as 400
        return res.status(400).send(err)
      }
  //if result return the response as 200 with status OK and  data as result
      return res.status(200).send({ status: "OK", data: results })
    });
    //Handle the exception return response as 400 with status as some error msg
  } catch (err) {
    return res.status(400).send('Try again later!')
  }
});

//This method will get the product with given productId form the product.json 
router.get("/:productId", (req, res) => {
  try {
    //get the productid from the req.params  
    const productId = req.params.productId;
   //calling the controller getProductById method
    productsController.getProductById(productId, (err, result) => {
      if (err) {
    //if error return the response as 400
        return res.status(400).send(err)
      }
  //if result return the response as 200 with status as OK and  data as result
      return res.status(200).send({ status: "OK", data: result })
    });

  } catch (err) {
     //Handle the exception return response as 400 with status as some error msg
    return res.status(400).send('Unexpected error,try again later!')
  }
});

//This method will update a product detail by id in the product.json 
router.post("/:productId", (req, res) => {
  try {
    //get all the productdetails from the req.body
    const productDetails = req.body
    //calling the controller updateProductDetails method 
   productsController.updateProductDetails(productDetails, (err, results) => {
      if (err) {
         //if error return the response as 400
        return res.status(400).send(err)
      }
       //if result return the response as 201 with status as OK and  data as result
      return res.status(201).send({ status: "OK", data: results })
    });

} catch (err) {
  console.error(err);
  return res.status(400).send('An error occurred while saving the product.');
}
});

//This method will post new product with given productDetails from the product.json
router.post('/', (req, res) => {
  try {
    const productDetails = req.body;
    productsController.addProduct(productDetails, (err, result) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(201).send({ status: 'OK', data: result });
    });
  } catch (err) {
    console.error(err);
    return res.status(400).send('An error occurred while adding the product.');
  }
});


//This method will delete product with specific productid from the product.json 
router.delete("/:productId", (req, res) => {
  try {
     //get the productid from the req.params
    const productId = req.params.productId
   //calling the controller deleteProductById method
    productsController.deleteProductById(productId, (err, result) => {
      if (err) {
     //if error return the response as 400
        return res.status(400).send(err)
      }
    //if result return the response as 200 with status as OK and  data as result
      return res.status(200).send({ status: "OK", data: result })
      
    });

  } catch (err) {
     //Handle the exception return response as 400 with status as some error msg
    return res.status(400).send('Unexpected error.Try after sometimes')
  }
});

module.exports = router;
