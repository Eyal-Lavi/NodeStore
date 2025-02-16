const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/database');
const ProductImage = require('./productImage');
const ProductCategory = require('./productCategory');
const Category = require('./category');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        allowNulll: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNulll: false,
        field: 'name',
    },
    price: {
        type: DataTypes.INTEGER,
        allowNulll: false,
        field: 'price',
    },
    description: {
        type: DataTypes.TEXT,
        allowNulll: false,
        field: 'description',
        defaultValue: "",
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNulll: false,
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNulll: true,
        field: 'discount',
        defaultValue: 0,
    },
    isDeleted:{
        type: DataTypes.BOOLEAN,
        allowNulll: false,
        field: 'is_deleted',
        defaultValue: 0,
    },
}
    ,{
        // tableName: 'products',
        timestamps: false,
    }
);

Product.hasMany(ProductImage, {
    foreignKey: 'productId', // The foreign key in ProductImages
    as:'images'
});

Product.belongsToMany(Category,{
    through: ProductCategory,
    foreignKey: 'productId',
    otherKey: 'categoryId',
    as : 'categories'
});

module.exports = Product;