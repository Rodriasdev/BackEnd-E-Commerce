import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection";

export const RolesModel = sequelize.define('role', {
    type:{
        type: DataTypes.STRING,
        allowNull: false
    }
})