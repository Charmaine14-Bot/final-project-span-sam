const passport = require("passport");
const ErrorResponse = require("../utils/ErrorResponse");

exports.authenticate = passport.authenticate("jwt", { session: false });

exports.authorize =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse("Not authorized to access this route", 403)
      );
    }
    next();
  };
