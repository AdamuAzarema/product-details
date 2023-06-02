


1.This a product API, using an Express server to service requests from clients.​Using controller, service, DAO, and route layers
-The Dao layer reads the products.json file and pass information to service layer
-The service layer get the parameter from Dao layer and pass to Controller layer
-The Controller layer pass the information received from servise layer to the routes
-The routes get required information from controller layer and communicates with app.js
​

2.Using all HTTP methods like GET, POST and DELETE​

The routes and the endpoints are as below​

 Get all the products​ "GET-/api/v1/products"

 Get a product by productid​ "GET-/api/v1/products/id"

 Create a new product and post the data​ "POST-/api/v1/products"

 Update product detail by Id "POST-/api/v1/products/id"

 Delete a product by productid "DELETE-/api/v1/products/id"



 


