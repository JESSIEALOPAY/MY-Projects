const CustomError = require('../../helpers/error/CustomError')
const jwt = require('jsonwebtoken')
const { isTokenIncluded, getAccessTokenFromHeader } = require('../../helpers/authorization/tokenHelpers')
const User = require('../../models/Users')
const Question = require('../../models/Question')
const Answer = require('../../models/Answer')


const getAccessToRouth = (req, res, next) => {
    const { JWT_SECRET_KEY } = process.env
    if (!isTokenIncluded(req)) {
        return next(new CustomError('You are not authorizate to access', 401))
    }

    // req.headers.authorization.split(' ')[1]
    const token = getAccessTokenFromHeader(req)
    jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return next(new CustomError('You are not authorizate to access this router', 401))
        }
        req.user = {
            name: decoded.name,
            id: decoded.id
        }

        next()
    })

}

const getAdminAccess = async (req, res, next) => {
    const id = req.user.id
    const user = await User.findById(id)
    if (user.role !== 'admin') {
        return next(new CustomError('Only admins can access this rout', 403))
    }
    next()

}

const getQuestionOwnerAccess = async (req, res, next) => {
    const { id } = req.params
    const userId = req.user.id

    const question = await Question.findById(id)
    if (userId != question.user) {
        return next(new CustomError('Only owner can handle this process(to question)'))
    }
    next()

}
const getAnswerOwnerAccess = async (req, res, next) => {
    const { answer_id } = req.params
    const userId = req.user.id

    const answer = await Answer.findById(answer_id)
    if (userId != answer.user) {
        return next(new CustomError('Only owner can handle this process(to answer)'))
    }
    next()

}


//authorization
module.exports = { getAccessToRouth, getAdminAccess, getQuestionOwnerAccess, getAnswerOwnerAccess }
