import { Sequelize } from "sequelize";
import { DB_HOST,DB_NAME,DB_PASSWORD,DB_DIALECT, DB_USERNAME } from "../config/conf.js";

// export const dbConnection = async () => {
//     try {
export const sequelize = new Sequelize(
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    {
        host:DB_HOST,
        dialect:DB_DIALECT
    }
)

//         await sequelize.authenticate()

//         console.log('Base de datos conectada')
        
//     } catch (err) {
//         console.log('Error al conectar a BD: ', err);
//         process.exit();
//     }
// }
