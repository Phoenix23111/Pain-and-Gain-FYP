require("dotenv").config();
const mongoose = require('mongoose')
const colors = require('colors');

const db_connect= process.env.DB_CONNECTION

const connectToMongo = ()=>{
    
    mongoose.connect(db_connect,{dbName:process.env.DB_NAME})
    .then((c)=> console.log(`DB connected to`.blue,`${c.connection.host}`.red))
    .catch((e)=>console.log(`${e}`.red))

}

module.exports = connectToMongo