const { Sequelize } = require('sequelize');

// const db = new Sequelize( process.env.NAME_DB, process.env.DB_USER , process.env.DB_PASS, {
// host: process.env.DB_HOST,
// dialect: 'mysql'
// dialectOptions: {
//     ssl: {
//         rejectUnauthorized: true,  
//     }
// }
// });

const db = new Sequelize( 'mysql://root:qjfvIQmS3y8wIdyxSdbJ@containers-us-west-191.railway.app:5759/railway' );

const dbConnection = async()=>{
    try {
        await db.authenticate();
        console.log('Database en linea')
    } catch (error) {
        throw new Error( error );
        
    }
}

module.exports = {
    db,
    dbConnection
}