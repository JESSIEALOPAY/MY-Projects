const express=require('express')
const router= express.Router()
const {GetAllQuestions}=require('../controllers/question')

router.get('/',GetAllQuestions)

// router.get('/',(req,res)=>{
//     //res.send('Questions Home Page')
//     res
//     .status(404)
//     .json({
//         success:true,
//         discription: 'Questions Home Page'})
// })

// router.get('/delete',(req,res)=>{   
//     res.send('Questions Delete Page')
// })


module.exports= router


















