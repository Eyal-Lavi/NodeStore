'use strict';
const data = require('../data/products.json');
const ProductModel = require('../models/product');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {

    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert(ProductModel.tableName, data.map(product => ({ createdAt, updatedAt, ...product })), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(ProductModel.tableName, null, {});
  }
};
