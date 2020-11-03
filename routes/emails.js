const express = require("express");
const router = express.Router();
const Email = require("../models/Email");
const auth = require('../middlewares/auth');

// Get emails
router.get("/", async (req, res) => {
  try {
    const emails = await Email.find({});
    res.json(emails);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// Add email
router.post("/", auth, async (req, res) => {
  try {
    const newMail = req.body;

    const newEmail = new Email(newMail);
    const email = await newEmail.save();

    res.status(201).json(email);

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
