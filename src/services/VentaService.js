import { CompraModel } from "../models/Compra.js";
import { ProductModel } from "../models/Product.js";


class ventaService {

    async findAll(vendedorId){
        return await CompraModel.findAll({
            include:{
                model: ProductModel,
                as: "product",
                where: {
                    vendedorId: vendedorId
                }
            }
        })
    }

    async findOne(vendedorId, productId){
        const venta =  await CompraModel.findOne({
            include: {
                model: ProductModel,
                as: "product",
                where: {
                    id: productId,
                    vendedorId: vendedorId
                }
            }
        })

        if (!venta) {
            throw new Error('Venta no encontrada');
        }

        return venta
    }

    

}

export default new ventaService()