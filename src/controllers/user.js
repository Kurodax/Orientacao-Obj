const BaseController = require('./BaseController');

const ArrayUser = require('../models/users');

class UsersController extends BaseController {
  constructor() {
    super('/users', ArrayUser);
  }

  auth(req, res) {
    res.json({
      messages: 'Auth OK',
    });
  }

  routes() {
    const routes = super.routes();

    routes.post('/auth', this.auth.bind(this));

    return routes;
  }
}
module.exports = new UsersController();
