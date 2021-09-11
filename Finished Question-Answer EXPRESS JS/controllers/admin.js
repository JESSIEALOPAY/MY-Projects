const CustomError = require('../helpers/error/CustomError')
const User = require('../models/Users')
const asyncHandler = require('express-async-handler')





const blockUser=asyncHandler(async (req, res, next) => {
    const {id}= req.params
    const user= await User.findById(id)
    
    user.blocked=!user.blocked
    
    await user.save()

    res.status(200).json({
        success:true,
        message:'Block - Unblock has been successful'
    })
})

const deleteUser=asyncHandler(async (req, res, next) => {
    const {id}=req.params
    const user= await User.findById(id)

    await user.remove()
    
    res.status(200).json({
        success:true,
        message:'Delete operation is successful'
    })
})


module.exports={blockUser,deleteUser}