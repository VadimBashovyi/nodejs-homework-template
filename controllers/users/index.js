const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const current = require('./current')
const updateSubscription = require('./updateSubscriptions')
const updateAvatar = require('./updateAvatar')
const verifyEmail = require('./verifyEmail')
const reverifyEmail = require('./reverifyEmail')

module.exports = {
  register,
  login,
  logout,
  current,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  reverifyEmail,
}
