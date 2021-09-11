const Question = require('../models/Question')

const asyncHandler = require('express-async-handler')
const CustomError = require('../helpers/error/CustomError')
const { memoryStorage } = require('multer')

const getAllQuestions = asyncHandler(async (req, res, next) => {
    // let query = Question.find()
    // const populate = true

    // //Search
    // if (req.query.search) {
    //     const regex = new RegExp(req.query.search, "i")
    //     const searchObject = {
    //         title: regex
    //     }
    //     query = query.where(searchObject)
    // }
    // //Populate
    // if (populate) {
    //     query = query.populate({
    //         path: 'user',
    //         select: 'name email role'
    //     })
    // }

    // //Pagination
    // const page = parseInt(req.query.page) || 1
    // const limit = parseInt(req.query.limit)

    // const startIndex = (page - 1) * limit
    // const endIndex = page * limit
    // const total = await Question.countDocuments()

    // const pagination = {}


    // if (limit) {
    //     if (startIndex > 0) {
    //         pagination.previous = {
    //             page: page - 1,
    //             limit
    //         }
    //     }
    //     if (endIndex < total) {
    //         pagination.next = { page: page + 1, limit }
    //     }
    //     query = query.skip(startIndex).limit(limit)
    // }

    // //Sort
    // const sortKey= req.query.sortBy
    // if(sortKey=='most-answered'){
    //     query=query.sort('-answerCount -createdAt')
    // }else if(sortKey=='most-liked'){
    //     query=query.sort('-likeCount -createdAt')
    // }else{
    //     query= query.sort(('-createdAt'))
    // }

    


    // const question = await query


    // const questions = await Question.find().where({
    //     title: "Questions 2 - Title"
    // })
    return res.status(200).json({
        sucess: true,
        pagination:res.queryResult.pagination,
        data: res.queryResult.question
    })

})



const getSingleQuestion = asyncHandler(async (req, res, next) => {
    // const { id } = req.params
    // const question = await Question.findById(id)

    return res.status(200).json({
        success: true,
        data: res.queryResult
    })

})


const askNewQuestion = asyncHandler(async (req, res, next) => {
    const information = req.body

    const question = await Question.create({
        user: req.user.id,
        ...information
    })
    res.status(200).json({
        success: true,
        data: question
    })


})

const editQuestion = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const { title, content } = req.body
    let question = await Question.findById(id)
    question.title = title
    question.content = content

    question = await question.save()
    res.status(200).json({
        success: true,
        data: question
    })

})

const deleteQuestion = asyncHandler(async (req, res, next) => {
    const { id } = req.params

    await Question.findByIdAndDelete(id)

    res.status(200).json({
        success: true,
        message: 'Question delete process has been successful'
    })

})

const likeQuestion = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const userID = req.user.id
    const question = await Question.findById(id)

    if (question.likes.includes(userID)) {
        return next(new CustomError('You can not like this question. Because you already like'))
    }
    question.likes.push(userID)
    question.likeCount = question.likes.length
    await question.save()
    res.status(200).json({
        success: true,
        data: question
    })

})

const undoLikeQuestion = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const userID = req.user.id
    const question = await Question.findById(id)

    if (!question.likes.includes(userID)) {
        return next(new CustomError('You can not undo like this question. Because you did not like yet'))
    }

    question.likes.splice(question.likes.indexOf(userID), 1)
    question.likeCount = question.likes.length
    await question.save()
    res.status(200).json({
        success: true,
        data: question
    })

})


module.exports = {
    askNewQuestion,
    getAllQuestions,
    getSingleQuestion,
    editQuestion,
    deleteQuestion,
    likeQuestion,
    undoLikeQuestion
}
