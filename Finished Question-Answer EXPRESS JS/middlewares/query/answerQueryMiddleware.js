const asyncHandler = require('express-async-handler')
const User = require('../../models/Users')
const { populateHelper, paginationHelper } = require('./queryMiddlewareHelpers')



const answerQueryMiddleware = (model, options) => {

    return asyncHandler(async function (req, res, next) {
        const { id } = req.params
        console.log(id)
        const total = (await model.findById(id))["answerCount"]

        const paginationResult = paginationHelper(undefined, total, req)
        const { startIndex, limit } = paginationResult
        console.log(startIndex, limit)
        let query = model.find({ _id: id },{'answers':{$slice:[startIndex,limit]}})

        if (options && options.population) {
            query = populateHelper(query, options.population)
        }
        const answers= await query
        res.queryResult={
            totalAnswer:total,
            paginationResult,
            answers
        }
        next()
    })


}


module.exports = answerQueryMiddleware