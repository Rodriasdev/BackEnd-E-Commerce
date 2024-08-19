import { Router } from 'express';
import ProductosControllers from '../controllers/productos.controllers.js'

const router = Router();


// router.get('/products', getProducts )
router.post('/product/:id', ProductosControllers.createProduct )

export default router;