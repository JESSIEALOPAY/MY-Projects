const multer = require('multer')
const CustomError = require('../../helpers/error/CustomError')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const rootDir = path.dirname(require.main.filename)

        cb(null, path.join(rootDir, '/public/uploads'))
    },
    filename: function (req, file, cb) {
        //mimetype = inage/jpg gibi 
        const extension = file.mimetype.split('/')[1]
        req.savedProfileImage = 'image_' + req.user.id + '.' + extension
        cb(null, req.savedProfileImage)
    }
})
const fileFilter= (req, file, cb) =>{
    const allowed= ['image/jpg','image/jpeg','image/png','image/gif']
    if(!allowed.includes(file.mimetype)){
        cb(new CustomError('Please provide a valid image type',400),false)
    }
    return cb(null,true)
}

const profileImageUpload = multer({storage,fileFilter})
module.exports=profileImageUpload