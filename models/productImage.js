const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/database.js');

const ProductImage = sequelize.define('ProductImage', {
    productId: {
        type: DataTypes.STRING,
        allowNulll: false,
        field: 'product_id',
        primaryKey: true
    },
    url: {
        type: DataTypes.STRING,
        allowNulll: false,
        primaryKey: true

    }},
    {
        tableName:'product_images',
        timestamps:false
    }
);

module.exports = ProductImage;