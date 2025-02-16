'use strict';
/** @type {import('sequelize-cli').Migration} */

const ProductImageModel = require('../models/productImage');
const {getModelAttributes} = require('../utils/database');

module.exports = {
  up(queryInterface, Sequelize) {
    const {tableName , attributes} = getModelAttributes(ProductImageModel);

    return queryInterface.createTable(tableName,attributes);
  },
  async down(queryInterface, Sequelize) {
    const {tableName} = getModelAttributes(ProductImageModel);
    await queryInterface.dropTable(tableName);
  }
};