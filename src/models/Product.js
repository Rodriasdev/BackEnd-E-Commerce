import { sequelize } from "../db/connection.js"
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
    stock: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    sku: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull:false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
    }
})
