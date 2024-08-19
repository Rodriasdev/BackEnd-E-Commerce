import { CompraModel } from "../models/Compra.js";

class CompraService {

    async create(data) {
            const compra = await CompraModel.create(data);
            return compra;
 
    }


    async getById(id) {
    
            const compra = await CompraModel.findByPk(id);
            if (!compra) {
                throw new Error('Compra no encontrada');
            }

    }

    async getAll() {
            const compras = await CompraModel.findAll();
            return compras;

    }

    async update(id, data) {
            const compra = await CompraModel.findByPk(id);
            if (!compra) {
                throw new Error('Compra no encontrada');
            }
            await compra.update(data);
            return compra;
    }

    async delete(id) {
            const compra = await CompraModel.findByPk(id);
            if (!compra) {
                throw new Error('Compra no encontrada');
            }
            await compra.destroy();
    }
}
export default new CompraService();
