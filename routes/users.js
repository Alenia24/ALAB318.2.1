const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/new", (req, res) => {
  res.render("newUser");
});

router.post("/new", (req, res) => {
  console.log({ name: req.body.name });
  console.log({ email: req.body.email });
  res.send("Registration successful!")
});
// Get user by id
router.get("/:id", (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

module.exports = router;
