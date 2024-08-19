import { sequelize } from "../db/connection.js";
import { DataTypes } from "sequelize";

export const CompraModel = sequelize.define('compra', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0.01
        }
    },
    status: {
        type: DataTypes.ENUM('pendiente', 'completado', 'cancelado'),
        defaultValue: 'pendiente',
        allowNull: false
    },
    purchaseDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
});
