const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

router.get("/", (req, res) =>
  res.status(200).send('hi');
);

// router.post("/login", (req,res) => {

// });


module.exports = router;