import { Router } from "express";
import compraControllers from "../controllers/compra.controllers.js";
const compraRouter = Router();


compraRouter.post('/compra',compraControllers.createCompra);

compraRouter.get('/compra/:id',compraControllers.getCompraById);


compraRouter.get('/compra',compraControllers.getAllCompras);


compraRouter.put('/compra/:id',compraControllers.updateCompra);


compraRouter.delete('/compra/:id',compraControllers.deleteCompra);

export default compraRouter;
