import { ProductModel } from "../models/Product.js";

class ProductService {
    constructor() { }

    async findAll() {
        return await ProductModel.findAll();
    }


    async create(productData, vendedorId) {
        return await ProductModel.create({
            ...productData, 
            vendedorId: vendedorId 
        });
    }
    

}

export default new ProductService()