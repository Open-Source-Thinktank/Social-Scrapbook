const db = require("../models/models.js");
const queries = require("../utils/queries");
const { ResolvePlugin } = require("webpack");

const fileController = {};

fileController.createUser = (req, res, next) => { // ADD BACK ASYNC IF YOU TURN ON THE TRY / CATCH / AWAIT
  const {
    username,
    firstName,
    lastName,
    profileImg,
  } = req.body;
  const queryString = queries.addUser;
  const queryValues = [username, firstName, lastName, profileImg];

  db.query(queryString, queryValues)
    .then(data => {
      res.locals.username = data.rows[0].username;
      return next();
    })
    .catch(err => {
      return next({
        log: `Error occurred with queries.addUser OR fileController.createUser middleware: ${err}`,
        message: { err: "An error occured with SQL, check server for more details." },
      });
    })
  // try {
  //   const resultFromAcctCreation = await db.query(queryString, queryValues);
  //   // const resultFromIDQuery = await db.query(queries.userInfo);

  //   console.log(resultFromAcctCreation); // ultimately should remove this; keeping for now to test what return result is
  //   // console.log(resultFromIDQuery); // ultimately should remove this; keeping for now to test what return result is

  //   res.locals.username = resultFromIDQuery;

  //   return next();
  // } catch (err) {
  //   console.log('Error occurred with SQL query: ', err);
  //   return next('Database malfunctioned');
  // }

};

fileController.getUser = (req, res, next) => { // SET BACK TO ASYNC IF AWAIT IS USED
  const { user } = req.cookies; // DOUBLE CHECK LATER NOTE FROM JEN & MINCHAN

  let targetUser;
  if (req.query.userName) {
    targetUser = req.query.userName // this is in the event that user visits someone else' profile page
  } else {
    // insert logic to set targetUser to JWT.verify method; this is in teh event that user visits their own profile page
  }

  const queryString = queries.userInfo;
  const queryValues = [user]; //user will have to be verified Jen / Minchan
  db.query(queryString, queryValues)
    .then(data => {
      res.locals.userid = data.rows[0].userid;
      return next();
    })
    .catch(err => {
      return next({
        log: `Error occurred with queries.userInfo OR fileController.getUser middleware: ${err}`,
        message: { err: "An error occured with SQL, check server for more details." },
      });
    })

  // try {
  //   // res.locals.userInfo = await db.query(text);
  //   const resultFromIDQuery = await db.query(queryString, queryValues);
  //   res.locals.username = data.rows[0].username;
  //   return next();
  // } catch (err) {
  //   console.log('Error occurred with SQL query: ', err);
  //   return next('Database malfunctioned');
  // }
};

//This will be needed if we are using session for this
// fileController.verifyUser = (req, res, next) => {
//   // INSERT LOGIC - IS THIS NEEDED
// };

module.exports = fileController;
