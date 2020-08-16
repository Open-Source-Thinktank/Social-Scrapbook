const db = require("../models/models");
const { ResolvePlugin } = require("webpack");

const fileController = {};

// RENAME THIS FILENAME TO BE USERCONTROLLER FOR SEMANTIC PURPOSES.

fileController.createUser = async (req, res, next) => {
  const {
    username,
    firstName,
    lastName,
    profileImg,
    location,
    motto
  } = req.body;
  
  const textOne = 'placeholder text for creation of new user'; // need to get this from Jen's utils file
  const textTwo = 'placeholder text to query for user ID'; // need to get this from Jen's utils file
  
  try {
    const resultFromAcctCreation = await db.query(textOne);
    const resultFromIDQuery = await db.query(textTwo);
    
    console.log(resultFromAcctCreation); // ultimately should remove this; keeping for now to test what return result is
    console.log(resultFromIDQuery); // ultimately should remove this; keeping for now to test what return result is
    
    res.locals.userID = resultFromIDQuery;

    return next();
  } catch(err) {
    console.log('Error occurred with SQL query: ', err);
    return next('Database malfunctioned');
  }

 };

 fileController.getUser = async (req, res, next) => {

  let targetUser;
  if (req.query.userName) {
    targetUser = req.query.userName // this is in the event that user visits someone else' profile page
  } else {
    // insert logic to set targetUser to JWT.verify method; this is in teh event that user visits their own profile page
  }
  res.locals.username = targetUser
  const text = 'placeholder text to query for user details/information'; // need to get this from Jen's utils file  
  try {
    // res.locals.userInfo = await db.query(text);
    return next();
  } catch(err) {
    console.log('Error occurred with SQL query: ', err);
    return next('Database malfunctioned');
  }
};

fileController.verifyUser = (req, res, next) => {
  // INSERT LOGIC - IS THIS NEEDED
 };

module.exports = fileController;
