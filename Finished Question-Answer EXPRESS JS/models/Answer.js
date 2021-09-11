const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Question= require('./Question')

const AnswerSchema = new Schema({
    content: {
        type: String,
        required: [true, 'please provide a content for answer'],
        minlength: [10, 'please provide a content at least 10 character for Answer']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    question:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'Question'
    }
})

AnswerSchema.pre("save",async function(req,res,next){
    if(!this.isModified('user')) return next()
    const question= await Question.findById(this.question)
    question.answers.push(this._id)
    question.answerCount=question.answers.length
    await question.save()
    next()

})

module.exports=mongoose.model('Answer',AnswerSchema)

