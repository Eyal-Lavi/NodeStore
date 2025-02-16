'use strict';
const data = require('../data/productImages.json');
const ProductImageModel = require('../models/productImage');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {

    // const createdAt = new Date();
    // const updatedAt = new Date();

    await queryInterface.bulkInsert(ProductImageModel.tableName, data.map(productImage => ({...productImage })), {});
    // await queryInterface.bulkInsert(ProductImageModel.tableName, data.map(productImage => ({ createdAt, updatedAt, ...productImage })), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(ProductImageModel.tableName, null, {});
  }
};
