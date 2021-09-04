const express= require('express')
const dotenv= require('dotenv')
const router= require('./routers/index')
const customErrorHandler=require('./middlewares/errors/customErrorHandler')
const connectDatabase=require('./helpers/database/connsectdatabase')
const path= require('path')


dotenv.config({
    path:"./config/env/config.env"
})

// MongoDb Connection
connectDatabase()
const app= express()

// Express Middleware for req.body
app.use(express.json())

const PORT =process.env.PORT

// Routers middleware
app.use('/api',router)

// Error handler 
app.use(customErrorHandler)

// Static Files
app.use(express.static(path.join(__dirname,'public')))



app.get('/',(req,res,next)=>{
    res.send('hi there. App has been satarted')
})


console.log(15)



app.listen(PORT,()=>{
    console.log(`APP started on ${PORT} : ${process.env.NODE_ENV} `)
})



















