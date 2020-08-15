const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");
const loginController = require("../controllers/loginController");

router.get("/", (req, res ) => {
  return res.status(200).send('hi');

})

router.get("/login", loginController.oAuth, (req,res) => {
  console.log('hihihi')
    return res.redirect(res.locals.url)
});

router.get("/login/google", loginController.afterConsent, (req,res) => {
  return res.send('You are logged in');
})

router.post("/signup", (req,res) => {

});


module.exports = router;