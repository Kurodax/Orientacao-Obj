const controllersUsers = require('./controllers/user');
const controllersAddress = require('./controllers/address');

const routes = [
  controllersUsers.routes(),
  controllersAddress.routes(),
];

module.exports = routes;
