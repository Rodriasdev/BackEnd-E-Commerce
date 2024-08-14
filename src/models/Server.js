import express from "express";
import cors from 'cors'
import morgan from "morgan";
import { PORT } from '../config/conf.js'
import productRoutes from '../routes/productos.routes.js'
import { sequelize } from "../db/connection.js";

class Server {

    constructor() {
        this.app = express();
        this.port = PORT;

        this.dbConnect();

        this.middlewares();
        this.routes();
    }

    async dbConnect(){
        try {
            await sequelize.authenticate()
            console.log('Base de datos conectada')
        } catch (error) {
            console.log('Error al conectar a BD: ', error);
            process.exit();
        }
        
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api', productRoutes)
    }

    listen(){
        this.app.listen(this.port, () => console.log(`Server on http://127.0.0.1:${this.port}`))
    }

}


export default Server;