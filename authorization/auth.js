const jwt = require('jsonwebtoken');
const secret = "Venky@1234"

function setUser(user){
  return jwt.sign(user,secret)
}


module.exports = {
  setUser
}