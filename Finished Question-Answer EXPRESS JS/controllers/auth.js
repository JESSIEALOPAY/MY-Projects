const { getMaxListeners } = require('../models/Users')
const CustomError = require('../helpers/error/CustomError')
const User = require('../models/Users')
const { sendJwtToClient } = require('../helpers/authorization/tokenHelpers')
const asyncHandler = require('express-async-handler')
const { inputHelpers, comparePassword } = require('../helpers/input/inputHelpers')
const sendEmail = require('../helpers/libraries/sendEmail')

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
    if(!user){
        return next(new CustomError('Please provide a valid email',400))
    }

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

    const resetPasswordUrl = `http://localhost:5000/api/auth/resetpassword?resetPasswordToken=${resetPasswordToken}`

    const emailOptions = {
        from: process.env.SMTP_USER, // sender address
        to: resetEmail, // list of receivers
        subject: "Reset Your Password",
        html: `<h3>Reset Your Password</3>
            <p>This <a href="${resetPasswordUrl}" target="_blank" >Link </a>will expire in hour </p>`, // html body
    }
    try {
        await sendEmail(emailOptions)
        console.log(emailOptions)
        res.status(200).json({
            success: true,
            message: 'Token sent to your email'
        })
    } catch (error) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined
        await user.save()

        return next(new CustomError('Email could not be sent', 500))
    }

})

const resetPassword = asyncHandler(async (req, res, next) => {
    const { resetPasswordToken } = req.query
    const {password}=req.body
    if(!resetPasswordToken){
        return next(new CustomError('Please provide a valid token',400))
    }

    const user = await User.findOne({
        resetPasswordToken: resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if(!user){
        return next(new CustomError('Invalid Token or Session Expired',400))
    }
    user.password= password
    user.resetPasswordToken=undefined
    user.resetPasswordExpire=undefined

    user.save()

    res.status(200).json({
        success: true,
        message: 'Reset Password Process Successful'
    })

})

const editDetails=asyncHandler(async (req, res, next) => {
    const editInformation= req.body

    const user= await User.findByIdAndUpdate(req.user.id,editInformation,{
        new:true,
        runValidators:true
    })
    res.status(200).json({
        success:true,
        data:user
    })


})



const imageUpload = asyncHandler(async (req, res, next) => {
    // const user = await User.findByIdAndUpdate(req.user.id, {
    //     profil_image: req.savedProfileImage
    // })
    console.log('savedProfileImage: '+ req.savedProfileImage)
    res.status(200).json({
        success: true,
        message: 'Image upload is successful'
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
    forgotPassword,
    resetPassword,
    editDetails
}

