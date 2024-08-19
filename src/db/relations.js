import { sequelize } from "./connection.js";
import { UserModel } from "../models/User.js";
import { ProductModel } from "../models/Product.js";
import { CompraModel } from "../models/Compra.js";
import { VentaModel } from "../models/Venta.js";


UserModel.hasMany(ProductModel, {
    foreignKey: 'vendedorId',
    as: 'products' 
});
ProductModel.belongsTo(UserModel, {
    foreignKey: 'vendedorId',
    as: 'vendedor' 
});


UserModel.hasMany(CompraModel, { foreignKey: 'userId', as: 'compras' });
CompraModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });

ProductModel.hasMany(CompraModel, { foreignKey: 'productId', as: 'compras' });
CompraModel.belongsTo(ProductModel, { foreignKey: 'productId', as: 'product' });


UserModel.hasMany(VentaModel, { foreignKey: 'userId', as: 'ventas' });
VentaModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });

export async function createTables() {
    await sequelize.sync();
}
