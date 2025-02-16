const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/database');

const ProductCategory = sequelize.define('ProductCategory', {
    categoryId: {
        type: DataTypes.INTEGER,
        allowNulll: false,
        // autoIncrement: true,
        field:'category_id',
        primaryKey: true
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNulll: false,
        // autoIncrement: true,
        field:'product_id',
        primaryKey: true
    },
}
    ,{
        tableName: 'product_category',
        timestamps: false,
    }
);


module.exports = ProductCategory;