const User = require('../models/Users')

const asyncHandler = require('express-async-handler')

const GetAllQuestions = asyncHandler(async (req, res, next) => {
    console.log('questioons constroller')
    res
    .status(200)
    .json({
        success:true,
        discription: 'Questions Home Page'
    })
    //post DATA

    // let name = 'afsdds'
    // let email = 'sadsddfsd@gmail.com'
    // let password = '125546545'

    // const user = await User.create({
    //     name: name,
    //     email: email,
    //     password: password
    // })

    //sendJwtToClient(user,res)

    // const token = user.generateJwtFromUser()
    // console.log(token)
    // res
    //     .status(200)
    //     .cookie('name', token, {
    //         secure: true,
    //         expires: new Date(Date.now() + 900000),
    //         httpOnly: true
    //     })
    //     .json({
    //         success: true,
    //         discription: 'Auth Register Home Page ',
    //         data: user,
    //         access_toke:token
    //     })
})




module.exports = {
    GetAllQuestions
}
