let PORT = process.env.PORT || 5000

const express = require('express');
const app = express();

const userRouter = require('./api/users/users.router')
const productRouter = require('./api/products/products.router')
const orderRouter = require('./api/order/order.router')

app.use(express.json());

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,Accept,Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
})

app.use("/api/users",userRouter);
app.use("/api/products",productRouter);
app.use("/api/order",orderRouter);

app.listen(PORT,()=>{
     console.log(`application is listening on port http://Localhost:${PORT}`)
})