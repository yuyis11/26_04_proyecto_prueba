import express from "express"
import cors from "cors"
import { dbConnection } from "../database/config.js"

class Server {
    constructor() {
        this.app = express()
        this.middlewares()
        this.port=process.env.PORT
        this.conectarBd()
        //this.escuchar()
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
    }

    async conectarBd(){
        await dbConnection()
    }

    escuchar() {
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        })
    }
}
//export default Server//exportar 1 sola cosa
export {Server}

