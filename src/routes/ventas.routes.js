import { Router } from "express";
import ventaControllers from "../controllers/venta.controllers.js";


const router = Router()

router.get('/venta/:vendedorId', ventaControllers.findAllSales)


export default router