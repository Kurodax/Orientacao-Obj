const BaseController = require('./BaseController');

const ArrayAddress = require('../models/address');

class AddressController extends BaseController {
  constructor() {
    super('/address', ArrayAddress);
  }

  routes() {
    const routes = super.routes();

    return routes;
  }
}

module.exports = new AddressController();
