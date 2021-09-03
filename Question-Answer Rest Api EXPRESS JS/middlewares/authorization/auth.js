const CustomError = require('../../helpers/error/CustomError')
const jwt = require('jsonwebtoken')
const { isTokenIncluded, getAccessTokenFromHeader } = require('../../helpers/authorization/tokenHelpers')
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
//authorization
module.exports = { getAccessToRouth }
