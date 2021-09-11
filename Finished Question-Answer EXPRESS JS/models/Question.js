const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slugify = require('slugify')



const QuestionSchema = new Schema({
    title: {
        type: String,
        required: [true, 'please provide a title'],
        unique: true,
        minlength: [10, 'please prove a title at least 10 characters']
    },
    content: {
        type: String,
        required: [true, 'please provide a content'],
        minlength: [20, 'please provide a content at least 20 characters']
    },
    slug: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'
    },
    likeCount:{
        type:Number,
        default:0
    },
    likes: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        }
    ],
    answerCount:{
        type:Number,
        default:0
    },
    answers:[
        {
            type: mongoose.Schema.ObjectId,
            ref:'Answer'
        }
    ]
})

QuestionSchema.pre("save", function (next) {
    if (this.isModified('title')) {
        next()
    }
    this.slug = this.makeSlug()
    next()
})

QuestionSchema.methods.makeSlug = function () {
    return slugify(this.title, {
        replacement: '-',  // replace spaces with replacement character, defaults to `-`
        remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
        lower: true,
    })

}

module.exports = mongoose.model('Question', QuestionSchema)

