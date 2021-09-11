const express= require('express')
const Router= express.Router()
const {getSingleUser,getAllUsers}= require('../controllers/user')
const {checkUserExist}= require('../middlewares/database/databaseErrorHelpers')
const userQueryMiddleware = require('../middlewares/query/userQueryMiddleware')
const User = require('../models/Users')


Router.get('/',userQueryMiddleware(User),getAllUsers)
Router.get('/:id',checkUserExist,getSingleUser)





module.exports=Router