 
const sendJwtToClient = (user, res) => {
    const { JWT_COOKIE, NODE_ENV } = process.env

    const token = user.generateJwtFromUser() 
    res.status(200)
        .cookie("access_token", token, {
            expires: new Date(Date.now()+parseInt(JWT_COOKIE)*1000*60),
            secure: NODE_ENV=='development'? false: true ,
            httpOnly: true
        })
        .json({
            success: true,
            discription: 'Auth Register Home Pag(By sendJwtToClient(token helpers)) ',
            access_token: token,
            data: {
                name: user.name,
                email: user.email
            }
        })
}

const isTokenIncluded=(req)=>{

    return (req.headers.authorization && req.headers.authorization.startsWith('Bearer:'))
}

const getAccessTokenFromHeader=(req)=>{
    const Authorization= req.headers.authorization
    const access_token= Authorization.split(' ')[1]
    return access_token
}


module.exports = {sendJwtToClient, isTokenIncluded, getAccessTokenFromHeader}