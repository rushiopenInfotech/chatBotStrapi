'use strict';

/**
 * req service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::req.req');
