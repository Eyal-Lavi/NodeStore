'use strict';
/** @type {import('sequelize-cli').Migration} */

const ProductCategory = require('../models/productCategory');
const {getModelAttributes} = require('../utils/database');

module.exports = {
  up(queryInterface, Sequelize) {
    const {tableName , attributes} = getModelAttributes(ProductCategory);

    return queryInterface.createTable(tableName,attributes);
  },
  async down(queryInterface, Sequelize) {
    const {tableName} = getModelAttributes(ProductCategory);
    await queryInterface.dropTable(tableName);
  }
};