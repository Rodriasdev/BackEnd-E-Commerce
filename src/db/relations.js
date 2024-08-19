import { sequelize } from "./connection.js";
import { UserModel } from "../models/User.js";
import { ProductModel } from "../models/Product.js";
import { CompraModel } from "../models/Compra.js";



UserModel.hasMany(ProductModel, {
    foreignKey: 'vendedorId',
    as: 'products' 
});
ProductModel.belongsTo(UserModel, {
    foreignKey: 'vendedorId',
    as: 'vendedor' 
});


UserModel.hasMany(CompraModel, 
    { foreignKey: 'userId', as: 'compras' });
CompraModel.belongsTo(UserModel, 
    { foreignKey: 'userId', as: 'user' });

ProductModel.hasMany(CompraModel, 
    { foreignKey: 'productId', as: 'compras' });
CompraModel.belongsTo(ProductModel, 
    { foreignKey: 'productId', as: 'product' });


export async function createTables() {
    await sequelize.sync();
}
