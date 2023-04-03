const jwt = require('jsonwebtoken')
const secret = require('../config/auth.config.js')
const db = require('../models/model.js')
const parents = db.parents


verifyToken = (req, res, next) => {
    let token
    try {
        token = req.headers['authorization'].split(' ')[1]
    } catch (error) {
        return res.send({message: 'token error'})
    }
    if(!token) return res.send({message: 'No token'})

    jwt.verify(token, secret.secret, (err, decoded) => {
        if(err) {
            return res.send({message: 'Unauthorized'})
        }
        req.email = decoded.p_email
    })
    next()
}

const authJWT = {
    verifyToken: verifyToken
}
module.exports = authJWT