const express = require('express')
const router = express.Router()
const {getAccessToRouth,getAdminAccess}= require('../middlewares/authorization/auth')
const {blockUser,deleteUser}=require('../controllers/admin')
const {checkUserExist}= require('../middlewares/database/databaseErrorHelpers')

router.use([getAccessToRouth,getAdminAccess])

router.get('/block/:id',checkUserExist,blockUser)
router.delete('/delete/:id',checkUserExist,deleteUser)



module.exports = router