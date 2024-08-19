import { ProductModel } from "../models/Product.js";

class ProductService {
    constructor() { }

    async findAll() {
        return await ProductModel.findAll();
    }


    async create(product, id) {
        
        return await ProductModel.create(product);
    }

}

export default new ProductService()