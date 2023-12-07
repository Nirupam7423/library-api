const express= require("express");
const mongoose= require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const dotenv= require("dotenv");
app.use(bodyParser.json());

dotenv.config({path : '.env'});

const db= process.env.DATABASE

mongoose.connect(db).then(()=>{
    console.log("mongo db connected")

}).catch((err)=>console.log('no connection'));

app.use(require('./routes/books'));

const PORT= process.env.PORT;

app.listen(PORT, ()=>
{
    console.log("server is running on port 7000");
})