const { Router } = require('express');

class BaseController {
  constructor(path, array) {
    this.path = path;
    this.array = array;
  }

  index(req, res) {
    return res.status(200).json({
      messages: 'All in Array',
      response: this.array,
    });
  }

  show(req, res) {
    const show = this.array.find((value) => value.id.toString() === req.params.id.toString());
    if (!show) {
      return res.status(500).json({
        messages: 'ID not found',
      });
    }
    return res.status(200).json({
      messages: 'Successfully found item',
      response: show,
    });
  }

  store(req, res) {
    this.array.push(req.body);
    return res.status(200).json({
      messages: 'successfully included',
      response: this.array,
    });
  }

  update(req, res) {
    const updateShow = this.array.find((value) => value.id.toString() === req.params.id);
    if (!updateShow) {
      return res.status(500).json({
        messages: 'ID not found',
      });
    }
    const {
      name, username, password, email, phone,
    } = req.body;

    this.array.map((item) => {
      if (item.id === req.params.id.toString()) {
        const response = {
          id: req.params.id, name, username, password, email, phone,
        };
        return response;
      }
      return item;
    });
    return res.json({
      messages: 'updated successfully',
      response: this.array,
    });
  }

  destroy(req, res) {
    const destroyShow = this.array.find((value) => value.id.toString() === req.params.id);
    if (!destroyShow) {
      return res.status(500).json({
        messages: 'ID not found',
      });
    }
    const pos = this.array.findIndex((value) => value.id === req.params.id.toString());
    this.array.splice(pos, 1);
    return res.json({
      messages: 'successfully deleted',
      response: this.array,
    });
  }

  routes() {
    const routes = Router();

    routes.get(this.path, this.index.bind(this));
    routes.get(`${this.path}/:id`, this.show.bind(this));
    routes.post(this.path, this.store.bind(this));
    routes.put(`${this.path}/:id`, this.update.bind(this));
    routes.delete(`${this.path}/:id`, this.destroy.bind(this));

    return routes;
  }
}
module.exports = BaseController;
