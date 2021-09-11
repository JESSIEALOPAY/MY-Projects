const asyncHandler = require('express-async-handler')
const CustomError = require('../../helpers/error/CustomError')
const User = require('../../models/Users')
const { searcHelper, paginationHelper } = require('./queryMiddlewareHelpers')



const userQueryMiddleware = (model, options) => {

    return asyncHandler(async function (req, res, next) {
        let query = model.find()
        //searching
        query = searcHelper('name', query, req)
        const total = await model.countDocuments()
        const paginationResult = paginationHelper(query, total, req)
        const users = await paginationResult.query

        res.queryResults = {
            success: true,
            count: users.length,
            pagination: paginationResult.pagination,
            users,
        }
        next()
    })


}


module.exports = userQueryMiddleware













