'use strict';
const data = require('../data/productCategory.json');
const ProductCategory = require('../models/productCategory');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {

    // const createdAt = new Date();
    // const updatedAt = new Date();

    await queryInterface.bulkInsert(ProductCategory.tableName, data.map(productImage => ({...productImage })), {});
    // await queryInterface.bulkInsert(ProductCategory.tableName, data.map(productImage => ({ createdAt, updatedAt, ...productImage })), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(ProductCategory.tableName, null, {});
  }
};
