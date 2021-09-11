const asyncHandler = require('express-async-handler')
const CustomError = require('../helpers/error/CustomError')
const Answer = require('../models/Answer')
const Question = require('../models/Question')



const addNewAnswerToQuestion = asyncHandler(async (req, res, next) => {
    const { content } = req.body
    const { question_id } = req.params
    const userId = req.user.id

    const answer = await Answer.create({
        content: content,
        user: userId,
        question: question_id
    })

    res.status(200).json({
        success: true,
        answer: answer
    })

})

const getAllAnswersByQuestion = asyncHandler(async (req, res, next) => {
    const { question_id } = req.params

    const question = await Question.findById(question_id).populate('answers')
    res.status(200).json({
        success: true,
        answers: question.answers
    })


})

const getSingleAnswer = asyncHandler(async (req, res, next) => {
    const { answer_id } = req.params

    const answer = await Answer.findById(answer_id)
        .populate({
            path: 'user',
            select: 'name'
        })
        .populate({ path: 'question', select: 'title content' })

    res.status(200).json({
        success: true,
        answers: answer
    })

})

const editAnswer = asyncHandler(async (req, res, next) => {
    const { answer_id } = req.params
    const { content } = req.body

    const answer = await Answer.findById(answer_id)
    answer.content = content
    await answer.save()
    res.status(200).json({
        success: true,
        answer
    })

})

const deleteAnswer = asyncHandler(async (req, res, next) => {
    const { answer_id } = req.params
    const answer = await Answer.findByIdAndDelete(answer_id)
    const question_id = answer.question

    const question = await Question.findById(question_id)
    question.answers.splice(question.answers.indexOf(question_id, 1))
    question.answerCount=question.answers.length
    await question.save()

    res.status(200).json({
        success: true,
        message: 'Delete process is successful',
        question
    })
})

const likeAnswer = asyncHandler(async (req, res, next) => {
    const { answer_id } = req.params
    const userID = req.user.id
    const answer = await Answer.findById(answer_id)

    if (answer.likes.includes(userID)) {
        return next(new CustomError('You can not like this question. Because you already like the answer'))
    }
    answer.likes.push(userID)
    await answer.save()
    res.status(200).json({
        success: true,
        data: answer
    })

})
const undoLikeAnswer = asyncHandler(async (req, res, next) => {
    const { answer_id } = req.params
    const userID = req.user.id
    const answer = await Answer.findById(answer_id)

    if (!answer.likes.includes(userID)) {
        return next(new CustomError('You can not undo like this question. Because you did not like yet the answer'))
    }

    answer.likes.splice(answer.likes.indexOf(userID), 1)
    await answer.save()
    res.status(200).json({
        success: true,
        data: answer
    })

})

module.exports = { addNewAnswerToQuestion, getAllAnswersByQuestion, getSingleAnswer, editAnswer, deleteAnswer, likeAnswer, undoLikeAnswer }




