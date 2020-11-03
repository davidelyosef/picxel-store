const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");

// @route     POST api/auth
// @desc      Auth user & get token
// @access    Public
router.get("/", async (req, res) => {
  try {
    jwt.sign(
      { user: { id: "zxc345sdftert" } },
      config.get("jwtSecret"),
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
