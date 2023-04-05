const controller = require("../controllers/parents.controller.js");
const mid = require("../middlewares/authJWT.middleware.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Controll-Allow_Headers",
      "authorization, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/parents", mid.verifyToken, controller.parent);
  app.get("/all", controller.all);
};
