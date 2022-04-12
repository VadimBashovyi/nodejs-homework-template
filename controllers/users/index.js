const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const current = require('./current')
const updateSubscription = require('./updateSubscriptions')

module.exports = {
  register,
  login,
  logout,
  current,
  updateSubscription,
}
