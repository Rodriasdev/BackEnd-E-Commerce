import VentaService from "../services/VentaService.js";

class VentaControllers {
    
    async findAllSales(req,res){
        try {
            const {vendedorId} = req.params

            const ventas = await VentaService.findAll(vendedorId)

            res.status(201).json(ventas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default new VentaControllers()