const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config.db');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            usuarios:  '/api/usuarios',
            categorias:'/api/categorias',
            productos: '/api/productos',
            pedidos:   '/api/pedidos',
            precios:   '/api/precios',
            tamanos:   '/api/tamanos'
        }

        //Conectar a la BDA
        this.conectarDB();
        //Ejecutamos los middlewares
        this.middlewares();
        //Ejecutamos las rutas de la aplicacion
        this.router();
    }

    //Llamamos la conexion a la BD
    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //Cors
        this.app.use( cors( ) );
        //Nos ayuda para la lectura y parseo del body
        this.app.use( express.json() );
    }

    router(){
        this.app.use( this.paths.usuarios,   require('../router/user.routes.js')),
        this.app.use( this.paths.categorias, require('../router/categoria.routes.js')),
        this.app.use( this.paths.productos,  require('../router/producto.routes.js')),
        this.app.use( this.paths.pedidos,    require('../router/pedido.routes.js')),
        this.app.use( this.paths.precios,    require('../router/precio.routes.js')),
        this.app.use( this.paths.tamanos,    require('../router/tamaño.routes.js'));
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log(`App levantada en el puerto ${this.port}`)
        });
    }

}

module.exports = {
    Server
}