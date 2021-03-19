const express =require('express');
const app=express();
const apiroters =require('./router');
const cors=require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/api/get',apiroters);


app.listen('3000' ,()=> {
    console.log('server run up')

});