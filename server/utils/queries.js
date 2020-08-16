const db = require("../models/models.js"); // remove after testing

const queries = {};


// GRAB EVENT'S ATTENDEES
queries.selectEventAttendees = `SELECT * FROM usersandevents WHERE eventid=$1`;

// GET USER'S EVENTS
queries.userEvents = `SELECT * FROM usersandevents WHERE userid=$1`;

// GET ALL USER'S PERSONAL INFO
queries.userInfo = `SELECT * FROM users WHERE userid=$1`; // const values = [req.query.id]

// QUERY TO ADD USER
queries.addUser = `
INSERT INTO users
  (username, firstname, lastname, profilephoto)
VALUES($1, $2, $3, $4);
`;

// let addStella = ['stella123', 'stella', 'song', 'photo TBD'];
// let addMarc = ['marc123', 'marc', 'burnie', 'photo TBD'];
// db.query(queries.addUser, addStella);
// db.query(queries.addUser, addMarc);


// DELETE USER
queries.deleteUser = `
  DELETE FROM usersandevents WHERE userid=$1;
  DELETE FROM events WHERE eventownerid=$1;
  DELETE FROM users WHERE userid=$1;
`;

// QUERY FOR WHEN USER CREATES EVENT 
queries.createEvent = `
INSERT INTO events
  (eventtitle, eventdate, eventstarttime, eventendtime, eventlocation, eventdetails, eventownerid, eventownerusername)
VALUES($1, $2, $3, $4, $5, $6, $7, $8);
`;

// let marcBirthday = ['marc birthday', '9/1/2020', '02:00 PM', '08:00 PM', 'Mohegan Sun', 'birthday parteeee', 4, 'marc123']
// let stellaWedding = ['stella wedding', '2/3/2021', '05:00 PM', '08:00 PM', 'Castle in Ireland', 'weddingggg', 3, 'stella123']
// db.query(queries.createEvent, marcBirthday);
// db.query(queries.createEvent, stellaWedding);


// ADDS ALL CURRENT EVENTS TO USERSANDEVENTS
queries.addtoUsersAndEvents = `
INSERT INTO usersandevents (userid, username, eventid, eventtitle)
SELECT eventownerid, eventownerusername, eventid, eventitle FROM events;
`;

// QUERY TO DELETE EVENT
queries.deleteEvent = `
DELETE FROM usersandevents WHERE eventid=$1;
DELETE FROM events WHERE eventid=$1;
`;

// QUERY FOR USERS ADDS THEMSELVES TO OTHER PEOPLE'S EVENTS
queries.addUserToEvent = `INSERT INTO usersandevents
  (userid, username, eventid, eventtitle)
VALUES($1, $2, $3, $4);`;





// CLEAR ALL TABLES & DATA
queries.clearAll = `
DROP TABLE usersandevents;
DROP TABLE events;
DROP TABLE users;
`;

module.exports = queries;