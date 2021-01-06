const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('User')

module.exports = (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    //Render login
    return res.status(401).json({ error: 'you need to be logged in' })
  }
  //Grabs token
  const token = authorization.replace('Bearer ', '')

  //Checks to see if the tokens are matched
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: 'you must be logged in' })
    }
    const { _id } = payload
    User.findById(_id).then((userdata) => {
      req.user = userdata

      next()
    })
  })
}
