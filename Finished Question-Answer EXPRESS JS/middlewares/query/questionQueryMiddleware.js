const asyncHandler = require('express-async-handler')
const CustomError = require('../../helpers/error/CustomError')
const Question = require('../../models/Question')
const { searcHelper, populateHelper, questionSortHelper, paginationHelper } = require('./queryMiddlewareHelpers')



const questionQueryMiddleware = (model, options) => {

    return asyncHandler(async function (req, res, next) {
        let query = model.find()
        //seach
        query = searcHelper("title", query, req)

        // population
        if (options && options.population) {
            query = populateHelper(query, options.population)
        }

        //sort

        query = questionSortHelper(query, req)

        //pagination
        const total = await model.countDocuments()
        const paginationResult = paginationHelper(query, total, req)

        const question = await paginationResult.query

        res.queryResult = {
            question: question,
            pagination: paginationResult.pagination
        }
        next()
    })


}


module.exports = questionQueryMiddleware