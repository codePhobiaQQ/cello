const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const loggedService = require('../services/users')

module.exports = {
  async logged(ctx) {
    return loggedService.logged(ctx);
  }
};
