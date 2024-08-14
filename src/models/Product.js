import { sequelize } from "../db/connection"
import { DataTypes } from "sequelize"

const ProductModel = sequelize.define('product',{
    name:{
        type: String,
        allowNull: DataTypes
    },
    
})