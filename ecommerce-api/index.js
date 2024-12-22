const express=require('express')
const deoenv=require('dotenv')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors')

// evn config
deoenv.config();
const app =express();


// middleware

app.use(cors())
app.use(bodyparser.json())


// import product router
const productRouter=require('./routes/routes')
const userRoutes=require('./routes/userroute')
const categoryRoutes=require('./routes/categoryRoutes')
const orderRoutes=require('./routes/orderRouters')
// mongodb connect

mongoose.connect(process.env.MONGOURL).then(()=>
{
    console.log("connected")
}).catch((e)=>
{
    console.log("not connected"+e.message);
})

app.use('/api/product',productRouter)
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);


const PORT=process.env.PORT||5000

app.listen(PORT,(req,res)=>
{
    console.log("running")
})