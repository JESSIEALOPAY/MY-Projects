const CustomError = require("../../helpers/error/CustomError")
const customErrorHandler=(err,req,res,next)=>{
 

    if(err.name=='SyntaxError'){
       err=new CustomError(err.message,400) 
    }
    if(err.name=='ValidationError'){
        err= new CustomError(err.message,400)
    }
    if(err.code===11000){
        err= new CustomError('Duplicate key found: Check your input',400)
    }
    if(err.name=='CastError'){
        err=new CustomError('Please provide a valid email',400)
    }
    
    res
    .status(err.status|| 500)
    .json({
        success:false,
        message:err.message
    })

}



module.exports=customErrorHandler