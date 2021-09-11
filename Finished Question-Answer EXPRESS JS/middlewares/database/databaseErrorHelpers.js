const asyncHandler = require('express-async-handler')
const CustomError = require('../../helpers/error/CustomError')
const User = require('../../models/Users')
const Question = require('../../models/Question')
const Answer = require('../../models/Answer')

const checkUserExist = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) {
        return next(new CustomError('There is no such user with that id'))
    }
    next()
})
const checkQuestionExist = asyncHandler(async (req, res, next) => {
    const id = req.params.id || req.params.question_id
    const question = await Question.findById(id)
    if (!question) {
        return next(new CustomError('There is no such question with that id'))
    }
    next()
})
const checkAnswerExist = asyncHandler(async (req, res, next) => {
    const {answer_id,question_id}=req.params
    const answer=  await Answer.findOne({
        _id:answer_id,
        question:question_id
    })
    if(!answer){
        return next(new CustomError('There is no answer with that id associated with question id'))
    }

    next()
})


module.exports = { checkUserExist, checkQuestionExist,checkAnswerExist }
