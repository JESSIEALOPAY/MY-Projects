const express = require('express')
const router = express.Router()
const { askNewQuestion, getAllQuestions, getSingleQuestion, editQuestion, deleteQuestion,likeQuestion,undoLikeQuestion } = require('../controllers/question')
const { getAccessToRouth, getQuestionOwnerAccess } = require('../middlewares/authorization/auth')
const { checkQuestionExist } = require('../middlewares/database/databaseErrorHelpers')
const questionQueryMiddleware= require('../middlewares/query/questionQueryMiddleware')
const Answer= require('./answer')
const Question=require('../models/Question')
const answerQueryMiddleware = require('../middlewares/query/answerQueryMiddleware')

router.get('/',questionQueryMiddleware(
    Question,{
    population:{
        path:'user',
        select:'name email'
    }
}), getAllQuestions)


router.get('/:id', checkQuestionExist,answerQueryMiddleware(Question,{population:[
    {
        path:'user',
        select:'name profile_image'
    },
    {
        path:'answers',
        select:'content'
    },
    {
        path:'likes',
        select:'name'
    }
]}) , getSingleQuestion)
router.post('/ask', getAccessToRouth, askNewQuestion)
router.put('/:id/edit', [getAccessToRouth, checkQuestionExist, getQuestionOwnerAccess], editQuestion)
router.delete('/:id/delete', [getAccessToRouth, checkQuestionExist, getQuestionOwnerAccess], deleteQuestion)
router.get('/:id/like', [getAccessToRouth, checkQuestionExist], likeQuestion)
router.get('/:id/undo_like', [getAccessToRouth, checkQuestionExist], undoLikeQuestion)


router.use('/:question_id/answer',checkQuestionExist,Answer)


module.exports = router


















