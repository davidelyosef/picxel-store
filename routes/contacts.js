const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const auth = require('../middlewares/auth');

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
router.post("/", auth, async (req, res) => {
  try {
    const contact = req.body;
    
    // check if already exists
    // ...

    const newContact = new Contact(contact);
    const contactJson = await newContact.save();

    res.status(201).json(contactJson);

  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
