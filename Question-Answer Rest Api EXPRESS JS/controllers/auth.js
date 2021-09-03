const { getMaxListeners } = require('../models/Users')
const CustomError = require('../helpers/error/CustomError')
const User = require('../models/Users')
const { sendJwtToClient } = require('../helpers/authorization/tokenHelpers')
const asyncHandler = require('express-async-handler')
const { inputHelpers, comparePassword } = require('../helpers/input/inputHelpers')

const register = asyncHandler(async (req, res, next) => {
    //post DATA

    const { name, password, email, role } = req.body
    const user = await User.create({
        name: name,
        email: email,
        password: password,
        role: role
    })

    sendJwtToClient(user, res)
})

const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body
    if (!inputHelpers(email, password)) {
        return next(new CustomError('Please check your inputs', 400))
    }
    const user = await User.findOne({ email }).select('+password')
    console.log(user)
    if (!comparePassword(password, user.password)) {
        return next(new CustomError('Please Check Your Password', 400))
    }

    sendJwtToClient(user, res)


})

const forgotPassword = asyncHandler(async (req, res, next) => {
    const resetEmail = req.body.email
    const user = await User.findOne({
        email: resetEmail
    })
    if (!user) {
        return next(new CustomError('There is no user with that email', 400))
    }
    const resetPasswordToken = user.getResetPaswordTokenFromUser()
    await user.save()

    res.status(200).json({
        success: true,
        message: 'Request of Reset Password is Successful'
    })

})


const imageUpload = asyncHandler(async (req, res, next) => {

    const user = await User.findByIdAndUpdate(req.user.id, {
        "profile_image": req.savedProfileImage
    }, {
        runValidators: true,
        new: true
    })



    res.status(200).json({
        success: true,
        message: 'Image upload is successful',
        data: user
    })


})


const logout = asyncHandler(async (req, res, next) => {
    const { NODE_ENV } = process.env

    return res.status(200)
        .cookie({
            expires: new Date(Date.now()),
            secure: NODE_ENV == 'development' ? false : true,
            httpOnly: true
        })
        .json({
            success: true,
            message: 'Log out process is successful',
            data: req.user

        })


})




const getUser = (req, res, next) => {

    res
        .json({
            success: true,
            data: req.user
        })

}


module.exports = {
    register,
    getUser,
    login,
    logout,
    imageUpload,
    forgotPassword
}

