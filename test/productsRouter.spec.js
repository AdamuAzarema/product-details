const express = require('express');
const { expect } = require("chai");
const supertest = require("supertest");

const app = require("../app");

describe("Testing products API", function () {
  it("Testing get products API", function (done) {
    this.timeout(500);
    setTimeout(done, 300);
    supertest(app)
      .get("/api/v1/products/")
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.equal(null);
        expect(err).to.equal(null);
        expect(res.body).to.be.an("object");
        expect(res.body.STATUS).to.equal("OK");
        expect(res.body.data[0].name).to.be.equal("LED Monitor");
         expect(res.body.data[1].name).to.be.equal("Fridge");
         expect(res.body.data[2].name).to.be.equal("Optical Mouse");
         expect(res.body.data[3].name).to.be.equal("Wireless Keyboard");
        done(err);
      });
  });
  it("Testing get product API with valid productId", function (done) {
    this.timeout(500);
    setTimeout(done, 300);
    supertest(app)
      .get("/api/v1/products/3")
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an("object");
        expect(res.body.STATUS).to.equal("OK");
        expect(res.body.data.id).to.be.equal(3);
        expect(res.body.data.name).to.be.equal("Optical Mouse");
        expect(res.body.data.price).to.be.equal(25);
        expect(res.body.data.quantity).to.be.equal(1);
        done(err);
      });
  });

  it("Testing addProduct product API", function (done) {
    this.timeout(500);
    setTimeout(done, 300);
    let newProduct = {
      "name": "WashngMachine",
      "description": "To wash clothes",
      "price": 10000,
      "quantity": 10
    }

    supertest(app)
      .post("/api/v1/products/")
      .send(newProduct)
      .expect(201)
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.body).to.be.an("object");
        expect(res.body.STATUS).to.equal("OK");
        expect(res.body.data.name).to.equal(newProduct.name);
        expect(res.body.data.price).to.be.equal(newProduct.price);
        done(err);
      });
  });
  
  it("Testing update product API", function (done) {
    this.timeout(500);
    setTimeout(done, 300);
    let newProduct = {
    "name": "WashngMachine",
      "description": "To wash clothes",
      "price": 10000,
      "quantity": 10
    }

    supertest(app)
      .post("/api/v1/products/3")
      .send(newProduct)
      .expect(201)
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.body).to.be.an("object");
        expect(res.body.STATUS).to.equal("OK");
        expect(res.body.data.name).to.equal(newProduct.name);
        expect(res.body.data.price).to.be.equal(newProduct.price);
        done(err);
      });
  });

 
});