const express = require('express')
const router = express.Router()
const { getAccessToRouth } = require('../middlewares/authorization/auth')
const { register, getUser, login, logout, imageUpload, forgotPassword, resetPassword, editDetails } = require('../controllers/auth')
const profileImageUpload=require('../middlewares/libraries/profileImageUploads')

const multer = require('multer')


router.post('/register', register)
router.post('/login', login)
router.get('/profile', getAccessToRouth, getUser)
router.get('/logout', getAccessToRouth, logout)
router.post('/forgotpassword', forgotPassword)
router.put('/resetpassword', resetPassword)
router.put('/edit', getAccessToRouth, editDetails)
router.post('/upload',[getAccessToRouth,profileImageUpload.single('profile_image')],imageUpload)
// router.put("/upload",[getAccessToRouth,photoUpload.single("profile_image")],imageUpload)





// router.get('/', (req, res) => {
//      res.send('Auth Home Page')
//     // res
//     // .status(404)
//     // .json('Auth Home Page')
// })




// router.get('/register',(req,res)=>{
//     res.send('Auth Register Page v2')
// })

module.exports = router
















