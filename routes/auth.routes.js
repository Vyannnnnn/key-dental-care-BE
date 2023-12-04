const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.post(
    "/api/auth/signup",
    [verifySignUp.checkRolesExisted],
    controller.signup
  );

  app.post(
    "/api/auth/validate-unique-email",
    verifySignUp.checkDuplicateUsernameOrEmail
  );

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/signout", controller.signout);
};
