import { sequelize } from "../db/connection"
import { DataTypes } from "sequelize"

export const ProductModel = sequelize.define('product',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Stock: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    SKU: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull:false
    },
    imagen_url: {
        type: DataTypes.STRING,
        allowNull:false
    }
})
