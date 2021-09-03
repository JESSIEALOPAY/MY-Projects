const { config } = require('dotenv')
const mongoose= require('mongoose')

const connectDatabase=()=>{

    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(()=>{
        console.log('MongoDb Connection successful')
    })
    .catch((err)=>{
        console.error(err)
    })
}


module.exports=connectDatabase



