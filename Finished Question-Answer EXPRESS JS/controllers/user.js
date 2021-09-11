const asyncHandler = require('express-async-handler')
const CustomError = require('../helpers/error/CustomError')
const User = require('../models/Users')


const getSingleUser = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const user = await User.findById(id)
    // if (!user) {
    //     return next('There is no such user with that id',400)
    // }
    res.status(200).json({
        success: true,
        data:user
    })
})

const getAllUsers= asyncHandler(async (req, res, next) => {
    res.status(200).json(res.queryResults)
})



module.exports={getSingleUser,getAllUsers}










