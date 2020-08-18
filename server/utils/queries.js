const db = require("../models/models.js"); // remove after testing

const queries = {};

// GET ALL EVENTS
queries.getAllEvents = `
SELECT * FROM events
`;

queries.getAttendeeEvents = `
SELECT u.*, ue.eventid
FROM usersandevents ue
JOIN users u
ON u.userid = ue.userid
`;

// GET USER'S EVENTS
queries.userEvents = `
SELECT * FROM usersandevents WHERE userid=$1
`;

// GET ALL USER'S PERSONAL INFO
queries.userInfo = `SELECT * FROM users WHERE username=$1`; // const values = [req.query.id]

// QUERY TO ADD USER
queries.addUser = `
INSERT INTO users
  (username, firstname, lastname, profilephoto)
VALUES($1, $2, $3, $4)
RETURNING username
;
`;

// QUERY FOR WHEN USER CREATES EVENT 
queries.createEvent = `
INSERT INTO events
  (eventtitle, eventdate, eventstarttime, eventendtime, eventlocation, eventdetails, eventownerid, eventownerusername, eventmessages)
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING eventid
;
`;

// ADDS ALL CURRENT EVENTS TO USERSANDEVENTS
queries.addNewEventToJoinTable = `
INSERT INTO usersandevents (userid, username, eventid, eventtitle, eventdate, eventstarttime, eventendtime, eventdetails, eventlocation)
SELECT eventownerid, eventownerusername, eventid, eventtitle, eventdate, eventstarttime, eventendtime, eventdetails, eventlocation FROM events
WHERE eventid=$1
RETURNING usersandevents;
`;

// USERS ADDS THEMSELVES TO OTHER PEOPLE'S EVENTS
queries.addUserToEvent = `INSERT INTO usersandevents
  (userid, username, eventid, eventtitle, eventdate, eventstarttime, eventendtime, eventdetails, eventlocation)
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING eventid
;
`;

// GRAB EVENT'S ATTENDEES
queries.selectEventAttendees = `SELECT * FROM usersandevents WHERE eventtitle=$1`;

// CLEAR ALL TABLES & DATA
queries.clearAll = `
DROP TABLE usersandevents;
DROP TABLE events;
DROP TABLE users;
`;

module.exports = queries;