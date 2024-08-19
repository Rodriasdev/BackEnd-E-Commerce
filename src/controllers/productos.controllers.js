import ProductService from "../services/ProductService.js"

class ProducControllers {

    async getProducts  (req, res) {

        try {
            const products = await ProductService.findAll();
            if(products.length === 0 || !products){
                throw({
                    statusCode: 404,
                    status: 'Not Found',
                    message: 'No se han encontrado productos'
                })
            }
            return res.json(products)
    
        } catch (err) {
            return res.status(err.statusCode || 500).json({
                message: err.message,
                status: err.status
            })
        }
    
    
    }

    async createProduct   (req, res)  {
    
        try {
            const {id} = req.params
            console.log(id)
            await ProductService.create(req.body,id)
            return res.status(201).json({
                message: 'Producto creado'
            })
            
        } catch (error) {
            return res.status(err.statusCode || 500).json({
                message: err.message,
                status: err.status
            })
        }
    
    
        
    
    }
    
    async updateProduct  (req, res)  {
    
        return res.json({
            msg: 'All Products'
        })
    
    }

}

export default new ProducControllers()

