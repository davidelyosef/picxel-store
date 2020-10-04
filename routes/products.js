const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");

// Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
