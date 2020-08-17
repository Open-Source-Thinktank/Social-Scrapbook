const db = require("../models/models.js");
const queries = require("../utils/queries");
const jwtDecode = require('jwt-decode');
const { serviceusage } = require("googleapis/build/src/apis/serviceusage");
const e = require("express");
const fileController = {};

fileController.createUser = (req, res, next) => { // ADD BACK ASYNC IF YOU TURN ON THE TRY / CATCH / AWAIT
  const decoded = jwtDecode(res.locals.token);

  const { email, given_name, family_name, picture } = decoded;

  const queryString1 = queries.userInfo;
  const queryValues1 = [email];
  
  const queryString2 = queries.addUser;
  const queryValues2 = [email, given_name, family_name, picture];

  db.query(queryString1, queryValues1)
    .then(data => {
      console.log('whole data:', data);
      if (!data.rows.length) {
        console.log('data.rows is empty')
        db.query(queryString2, queryValues2)
          .then(data => {
          res.locals.username = data.rows[0].username; // is this superfluous?
          console.log('NEW USER: ', res.locals.username);
          return next();
          })
        .catch(err => {
          return next({
            log: `Error occurred with queries.addUser OR fileController.createUser middleware: ${err}`,
            message: { err: "An error occurred with adding new user to the database." },
          });
        })
      } else {
        return next();
      }
    })
    .catch(err => {
      return next({
        log: `Error occurred with queries.userInfo OR fileController.createUser middleware: ${err}`,
        message: { err: "An error occurred when checking user information from database." },
      });
    });
};

fileController.getUser = (req, res, next) => { 
  let decoded;
  if(!res.locals.token) {
    decoded = jwtDecode(req.cookies.user)
  } else {
    decoded = jwtDecode(res.locals.token);
  }

  const { email } = decoded;

  let targetUser;
  if (req.query.userName) {
    targetUser = req.query.userName // this is in the event that user visits someone else' profile page
  } else {
    targetUser = email;
  }

  const queryString = queries.userInfo;
  const queryValues = [targetUser]; //user will have to be verified Jen / Minchan
  db.query(queryString, queryValues)
    .then(data => {
      console.log('data.rows[0]', data.rows[0]);
      res.locals.allUserInfo = data.rows[0];
      return next();
    })
    .catch(err => {
      return next({
        log: `Error occurred with queries.userInfo OR fileController.getUser middleware: ${err}`,
        message: { err: "An error occured with SQL or server when retrieving user information." },
      });
    })
};

fileController.verifyUser = (req, res, next) => {
  const decoded = jwtDecode(req.cookies.user);
  const { email } = decoded;

  if (email == req.query.userName) {
    return next();
  } else {
    return next({
      log: `Error occurred with fileController.verifyUser`,
      code: 401,
      message: { err: "Unauthorized Access." },
    })  
  }
}

module.exports = fileController;
