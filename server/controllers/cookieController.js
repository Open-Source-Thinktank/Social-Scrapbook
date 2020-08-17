const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('user', res.locals.token, { httpOnly: true });
  return next();
};

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

cookieController.removeCookie = (req, res, next) => {
  res.clearCookie('user');
  return next();
}

module.exports = cookieController;
