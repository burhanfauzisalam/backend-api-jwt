const controller = require('../controllers/auth.controller.js')
const mid = require('../middlewares/authJWT.middleware.js')

module.exports = function(app) {
    app.use(function(req, res, next){
        res.header(
            "Access-Controll-Allow_Headers",
            "Authorization, Origin, Content-Type, Accept"
        )
        next()
    })
    app.post("/register", controller.register)
    app.post("/login", controller.login)
}