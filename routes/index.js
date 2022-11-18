const { Router } = require('express');
const route = Router()

route.use('/', require('./comments.route'))
route.use('/', require('./saves.route'))
route.use('/', require('./users.route'))
route.use('/', require('./twitts.route'))

module.exports = route