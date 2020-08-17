const express = require("express");
const router = express.Router();
const path = require('path');
const fileController = require('../controllers/fileController');
const cookieController = require('../controllers/cookieController');
const eventController = require('../controllers/eventController');
const loginController = require('../controllers/loginController');

// EXISING USER LOGIN

router.get('/login',
  loginController.oAuth,
  (req, res) => {
    // res.send('ok');
    return res.redirect(res.locals.url)
  });

router.get('/login/google',
  loginController.afterConsent,
  cookieController.setSSIDCookie,
  fileController.createUser, // if username already exists, return next() => getUser // if not, create user in SQL database
  // fileController.getUser,
  // eventController.getFullEvents,
  (req, res) => {
    // const responseObj = {
    //   users: res.locals.allUserInfo,
    //   events: res.locals.allEventsInfo
    // };
    return res.redirect('http://localhost:8080/')
  });

// REVISIT WEBSITE AFTER LEAVING, OR VISITING SOMEONE ELSE'S PROFILE PAGE

router.get('/info',
  cookieController.isLoggedIn, // this is really only is applicable for the same user
  fileController.getUser,
  eventController.allEvents, // COMMENT OUT IF IT BREAKS
  eventController.filterForUser, // COMMENT OUT IF IT BREAKS
  // eventController.getFullEvents,
  // eventController.getAllAttendees,
  // eventController.getUserDetail,
  // eventController.consolidation,
  (req, res) => {
    const responseObj = {
      users: res.locals.allUserInfo,
      events: res.locals.allEventsInfo,
    };
    console.log('responseObj: ', responseObj);
    return res.status(200).json(responseObj);
  });

// LOGGING OUT

router.use('/logout', // SWITCH THIS TO POST REQUEST!!
  cookieController.removeCookie,
  (req, res) => {
    return res.status(200).json('Successful logout.');
  });

// CREATE A NEW EVENT

router.post('/create', // SWITCH THIS TO POST REQUEST!!
  fileController.verifyUser,
  fileController.getUser,
  eventController.createEvent,
  eventController.addNewEventToJoinTable,
  (req, res) => {
    return res.status(200).json('Event succcessfully created.');
  });

// ADD USER TO AN EXISTING EVENT

router.post('/add',
  fileController.getUser,
  eventController.verifyAttendee,
  eventController.addAttendee,
  (req, res) => {
    return res.status(200).json('User successfully added as attendee.');
  });

router.get('/events', // SWITCH THIS TO A GET REQUEST!!
  eventController.allEvents,
  (req, res) => {
    return res.status(200).json(res.locals.allEventsInfo);
  }
)

module.exports = router;
