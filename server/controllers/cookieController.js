const cookieController = {};
//set new cookie from JWT
cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('user', res.locals.token, { httpOnly: true });
  return next();
};
//check if user is logged in (has cookie) - if not return 401 error
cookieController.isLoggedIn = (req, res, next) => {
  if (req.cookies.user) {
    return next();
  } else {
    return next({
      log: `User is not logged in`,
      code: 401,
      message: { err: "User is not logged in." },
    });
  }
};
//cookie removal
cookieController.removeCookie = (req, res, next) => {
  res.clearCookie('user');
  return next();
}

module.exports = cookieController;
