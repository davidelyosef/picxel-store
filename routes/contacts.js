const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Get contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});
// Add contact info

module.exports = router;
