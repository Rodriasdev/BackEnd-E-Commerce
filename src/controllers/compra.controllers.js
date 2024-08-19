import CompraService from "../services/CompraService.js";

class CompraControllers {

    async createCompra(req, res) {
        try {
            const compra = await CompraService.create(req.body);
            res.status(201).json(compra);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    async getCompraById(req, res) {
        try {
            const compra = await CompraService.getById(req.params.id);
            if (!compra) {
                return res.status(404).json({ message: "compra no en encontrada" });
            }
            res.status(200).json(compra);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    async getAllCompras(req, res) {
        try {
            const compras = await CompraService.getAll();
            res.status(200).json(compras);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

 
    async updateCompra(req, res) {
        try {
            const compra = await CompraService.update(req.params.id, req.body);
            if (!compra) {
                return res.status(404).json({ message: "compra no en encontrada" });
            }
            res.status(200).json(compra);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    async deleteCompra(req, res) {
        try {
            const result = await CompraService.delete(req.params.id);
            if (!result) {
                return res.status(404).json({ message: "compra no en encontrada" });
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new CompraControllers();
