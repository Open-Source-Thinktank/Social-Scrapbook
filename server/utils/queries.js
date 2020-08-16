const db = require("../models/models.js"); // remove after testing

const queries = {};


// GRAB EVENT'S ATTENDEES
queries.selectEventAttendees = `SELECT * FROM usersandevents WHERE eventid=$1`;

// let stellaWeddingEventId = [4];
// db.query(queries.selectEventAttendees, stellaWeddingEventId).then(data => console.log(data.rows));


// GET USER'S EVENTS
queries.userEvents = `
SELECT * FROM usersandevents WHERE userid=$1
`;

// let stellaUserId = [1];
// db.query(queries.userEvents, stellaUserId).then(data => console.log(data.rows));

// GET ALL USER'S PERSONAL INFO
queries.userInfo = `SELECT * FROM users WHERE username=$1`; // const values = [req.query.id]

// let stella = ['stella123'];
// db.query(queries.userInfo, stella).then(data => console.log(data.rows));


// QUERY TO ADD USER
queries.addUser = `
INSERT INTO users
  (username, firstname, lastname, profilephoto)
VALUES($1, $2, $3, $4)
RETURNING username
;
`;

// let addStella = ['stella123', 'stella', 'song', 'photo TBD'];
// let addMarc = ['marc123', 'marc', 'burnie', 'photo TBD'];
// db.query(queries.addUser, addStella).then(data => console.log(data.rows));
// db.query(queries.addUser, addMarc).then(data => console.log(data.rows));


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
VALUES($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING eventid
;
`;

// let marcBirthday = ['marc birthday', '9/1/2020', '02:00 PM', '08:00 PM', 'Mohegan Sun', 'birthday parteeee', 2, 'marc123']
// let stellaWedding = ['stella wedding', '2/3/2021', '05:00 PM', '08:00 PM', 'Castle in Ireland', 'weddingggg', 1, 'stella123']
// let stellaBirthday = ['stella birthday', '2/3/2021', '02:00 PM', '04:00 PM', 'Bunny Bunny', 'bussday', 1, 'stella123'];
// db.query(queries.createEvent, marcBirthday).then(data => console.log(data.rows));
// db.query(queries.createEvent, stellaWedding).then(data => console.log(data.rows));;
// db.query(queries.createEvent, stellaBirthday).then(data => console.log(data.rows));;


// USERS ADDS THEMSELVES TO OTHER PEOPLE'S EVENTS
queries.addUserToEvent = `INSERT INTO usersandevents
  (userid, username, eventid, eventtitle)
VALUES($1, $2, $3, $4)
RETURNING eventid
;
`;

// let markAttendingStellaWedding = [2, 'marc123', 4, 'stella wedding'];
// db.query(queries.addUserToEvent, markAttendingStellaWedding).then(data => console.log(data.rows));;


// ADDS ALL CURRENT EVENTS TO USERSANDEVENTS
queries.addtoUsersAndEvents = `
INSERT INTO usersandevents (userid, username, eventid, eventtitle)
SELECT eventownerid, eventownerusername, eventid, eventtitle FROM events
RETURNING usersandevents;
`;

// db.query(queries.addtoUsersAndEvents).then(data => console.log(data.rows));





// QUERY TO DELETE EVENT
queries.deleteEvent = `
DELETE FROM usersandevents WHERE eventid=$1;
DELETE FROM events WHERE eventid=$1;
`;






// CLEAR ALL TABLES & DATA
queries.clearAll = `
DROP TABLE usersandevents;
DROP TABLE events;
DROP TABLE users;
`;

module.exports = queries;