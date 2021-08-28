const accesscontrol=(req,res,next)=>{
    console.log('middlewware access control')
    next()
}

const defaultMiddleware=(req,res,next)=>{
    console.log('default middleware started')
    next()
}

module.exports={
    accesscontrol,defaultMiddleware
}






















































































