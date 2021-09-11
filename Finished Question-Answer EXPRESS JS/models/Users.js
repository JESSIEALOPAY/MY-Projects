const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema
const crypto = require('crypto')
const Question = require('./Question')

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provşide a name']
    },
    email: {
        type: String,
        required: [true, 'please provide an email'],
        unique: true,
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please provide a valid email'
        ]
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    password: {
        type: String,
        minlength: 6,
        required: [true, 'Please provide a password'],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String
    },
    about: {
        type: String
    },
    website: {
        type: String
    },
    profile_image: {
        type: String,
        default: 'default.jpg'
    },
    blocked: {
        type: Boolean,
        default: false
    },
    resetPasswordExpire: {
        type: Date
    },
    resetPasswordToken: {
        type: String
    }
})

// userSchema Methods
userSchema.methods.generateJwtFromUser = function () {
    const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env

    const payload = {
        name: this.name,
        id: this._id
    }

    const token = jwt.sign(payload, JWT_SECRET_KEY, {
        expiresIn: JWT_EXPIRE
    });
    return token
}

userSchema.methods.getResetPaswordTokenFromUser = function () {
    const { RESET_PASWORD_EXPIRE } = process.env
    const randomHexString = crypto
        .randomBytes(15)
        .toString('hex')
    const resetPasswordToken = crypto
        .createHash('SHA256')
        .update(randomHexString)
        .digest('hex')
    this.resetPasswordToken = resetPasswordToken
    this.resetPasswordExpire = Date.now() + parseInt(RESET_PASWORD_EXPIRE)

    return resetPasswordToken
}



// Pre Hooks
userSchema.pre('save', function (next) {
    if (!this.isModified("password")) {
        next()
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) next(err)
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) next(err)
            this.password = hash
            next();
        });
    });
});

userSchema.post("remove", async function () {

    await Question.deleteMany({
        user: this._id
    })

})

module.exports = mongoose.model('User', userSchema)

