const express = require("express");
const router = express.Router();

const fileController = require('../controllers/fileController');
const cookieController = require('../controllers/cookieController');
const eventController = require('../controllers/eventController');
const loginController = require("../controllers/loginController");

router.get("/", (req, res) => {
  return res.status(200).send('hi');

})

router.get("/login", loginController.oAuth, (req, res) => {
  return res.redirect(res.locals.url)
});

router.get("/login/google", loginController.afterConsent, (req, res) => {
  return res.send('You are logged in');
})

router.get('/login', // be mindful if this is GET vs. POST request
  // need to go through OAuth before this route is accessed
  cookieController.setSSIDCookie,
  fileController.getUser,
  eventController.getFullEvents,
  (req, res) => {
    // available for use: res.locals.userInfo, res.locals.eventsInfo
    const responseObj = {

    };
    return res.status(200).json(responseObj);
  });


// REVISITING THE WEBSITE AND CHECKING TO SEE IF THEY ARE ALREADY LOGGED IN

router.get('/info', // be mindful if this is GET vs. POST request
  cookieController.isLoggedIn,
  fileController.getUser,
  eventController.getFullEvents,
  (req, res) => {
    // available for use: res.locals.userInfo, res.locals.eventsInfo
    const responseObj = {

    };
    res.status(200).json(responseObj);
  });


// router.post('/signup',
//   // fileController.OAuth /* Might remove this controller from here -- have Minchan's completed OAuth process redirect to /api/signup */
//   fileController.createUser,
//   cookieController.setSSIDCookie,
//   eventController.getFullEvents,
//   (req, res) => {
//     return res.status(200).json('SEND FULL EVENT LISTING');
//   });

// router.post('/logout',
//   // figure out logic to delete cookie
//   (req, res) => {
//     return res.sendStatus(200);
//   });

// router.post('/create',
//   fileController.verifyUser,
//   eventController.createEvent,
//   // Might need an additional db query to get that event's details,
//   eventController.addToUsersAndEvents, // JEN ADDED THIS
//   eventController.getOneEvent,
//   (req, res) => {
//     return res.status(200).json('SEND INDIVIDUAL EVENT DETAILS');
//   });

// router.post('/add',
//   fileController.verifyUser,
//   eventController.addEvent,
//   // Might need an additional db query to get that event's details,
//   eventController.getOneEvent,
//   (req, res) => {
//     return res.status(200).json('SEND INDIVIDUAL EVENT DETAILS');
//   });

module.exports = router;
