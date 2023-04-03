const db = require('../models/model.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = require('../config/auth.config.js')

const parents = db.parents

exports.register = (req, res) => {
    parents.create({
        p_name: req.body.name,
        p_email: req.body.email,
        p_password: bcrypt.hashSync(req.body.password, 8)
    }).then( parents => {
        res.send({
            message: `${req.body.name} registered.`
        })
    }).catch( err => {
        console.log(err)
        res.send({
            message: err.message
        })
    })
}

exports.login = (req, res) => {
    parents.findOne({ where:{
        p_email: req.body.email,
    }}).then( parent => {
        if(!parent) {
            return res.send({message: 'not found'})
        }
        if(!bcrypt.compareSync(req.body.password, parent.p_password)){
            return res.send({message: 'not match'})
        }

        const token = jwt.sign({p_email: parent.p_email}, secret.secret,{
            expiresIn: 360000
        })
        res.send({
            accessToken: token
        })
    }).catch( err => {
        console.log(err)
        res.send({
            message: err.message
        })
    })
}