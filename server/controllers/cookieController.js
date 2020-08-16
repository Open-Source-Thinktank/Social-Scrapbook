const cookieController = {};

/**
* setSSIDCookie - store the user id in a cookie
*/

cookieController.setSSIDCookie = (req, res, next) => {
  // need to understand how information is being passed in from OAuth to here (i.e., capture username somehow)
    // might have to do a query here to the SQL database to get username that is tied to the email used for OAuth
  // const { username } = req.body;
  res.cookie('user', '?JWT.sign?', {'httpOnly': true});
  return next();
};

cookieController.isLoggedIn = (req, res, next) => {
  if (req.cookies.user) {
    return next();
  } else {
    return next('User is not logged in');
  }
};

module.exports = cookieController;
