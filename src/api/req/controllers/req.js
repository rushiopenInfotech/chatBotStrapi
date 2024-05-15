'use strict';

/**
 * req controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::req.req');
