'use strict';
/** @type {import('sequelize-cli').Migration} */

const CategoryModel = require('../models/category');
const {getModelAttributes} = require('../utils/database');

module.exports = {
  up(queryInterface, Sequelize) {
    const {tableName , attributes} = getModelAttributes(CategoryModel);

    return queryInterface.createTable(tableName,attributes);
  },
  async down(queryInterface, Sequelize) {
    const {tableName} = getModelAttributes(CategoryModel);
    await queryInterface.dropTable(tableName);
  }
};