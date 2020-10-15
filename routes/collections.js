const express = require("express");
const router = express.Router();
const Collection = require("../models/Collection.js");

// Get All Collections
router.get("/", async (req, res) => {
  try {
    const collections = await Collection.find({});
    res.json(collections);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
