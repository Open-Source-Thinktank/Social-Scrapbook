const db = require("../models/models");
const queries = require("../utils/queries");
const eventController = {};

eventController.getFullEvents = (req, res, next) => { // ADD BACK ASYNC IF YOU WANT TO DO TRY CATCH
  // OPTION 1 OR 2: username is saved on res.locals.username
  const { userid } = res.locals.userid;
  const queryString = queries.userEvents;
  const queryValues = [userid]; //user will have to be verified Jen / Minchan
  db.query(queryString, queryValues)
    .then(data => {
      res.locals.userevents = data;
      return next();
    })
    .catch(err => {
      return next({
        log: `Error occurred with queries.userEvents OR eventController.getFullEvents middleware: ${err}`,
        message: { err: "An error occured with SQL, check server for more details." },
      });
    })
  //   try {
  //     // res.locals.eventsInfo = await db.query(text);
  //     return next();
  //   } catch(err) {
  //     console.log('Error occurred with SQL query: ', err);
  //     return next('Database malfunctioned');
  //   }
  // 
};

eventController.getOneEvent = (req, res, next) => {
  // Insert logic
};

eventController.createEvent = (req, res, next) => {
  // Insert logic
  // need to send along the username for event creation (this will be the event owner)
};

// NEED TO ADD THIS IN MIDDLEWARE AFTER eventController.createEven
eventController.addToUsersAndEvents; // JEN ADDED THIS

eventController.addEvent = (req, res, next) => {
  // Insert logic
};

module.exports = eventController;
