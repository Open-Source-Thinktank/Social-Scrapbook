const db = require("../models/models");

const eventController = {};

eventController.getFullEvents = async (req, res, next) => {
  // OPTION 1 OR 2: username is saved on res.locals.username

  const text = 'placeholder text to query for event listing'; // need to get this from Jen's utils file
  
  try {
    // res.locals.eventsInfo = await db.query(text);
    return next();
  } catch(err) {
    console.log('Error occurred with SQL query: ', err);
    return next('Database malfunctioned');
  }
};

eventController.getOneEvent = (req, res, next) => {
  // Insert logic
};

eventController.createEvent = (req, res, next) => {
  // Insert logic
  // need to send along the username for event creation (this will be the event owner)
};
 
eventController.addEvent = (req, res, next) => {
  // Insert logic
};

module.exports = eventController;
