import { sequelize } from "../db/connection.js";
import { DataTypes } from "sequelize";

export const VentaModel = sequelize.define('venta', {
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0.01
        }
    },
    status: {
        type: DataTypes.ENUM('procesando', 'completada', 'cancelada'),
        defaultValue: 'procesando',
        allowNull: false
    },
    saleDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
});
