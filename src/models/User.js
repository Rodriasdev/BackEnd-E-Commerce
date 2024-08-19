import { sequelize } from "../db/connection.js";
import { DataTypes } from "sequelize";

export const UserModel = sequelize.define('user', {
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'vendedor', 'cliente'),
        defaultValue: 'cliente',
      }
})