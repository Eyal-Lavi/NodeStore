const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/database.js');

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        allowNulll: false,
        field: 'id',
        autoIncrement:true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        field: 'name',
        allowNulll: false,
    }},
    {
        timestamps:false
    }
);


module.exports = Category;