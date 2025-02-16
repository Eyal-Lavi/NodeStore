'use strict';
const data = require('../data/category.json');
const CategoryModel = require('../models/category');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {

    // const createdAt = new Date();
    // const updatedAt = new Date();

    await queryInterface.bulkInsert(CategoryModel.tableName, data.map(productImage => ({...productImage })), {});
    // await queryInterface.bulkInsert(CategoryModel.tableName, data.map(productImage => ({ createdAt, updatedAt, ...productImage })), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(CategoryModel.tableName, null, {});
  }
};
