//                         16.07.2021
function question(text, choices, answer) {
    this.text = text
    this.choices = choices
    this.answer = answer
}
question.prototype.checkAnswer = function (answer) {
    return this.answer === answer
}

function Quiz(questions) {
    this.questions = questions
    this.questionIndex = 0
    this.score = 0
}

Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex]
}

Quiz.prototype.isFinish = function () {
    return this.questions.length === this.questionIndex
}

Quiz.prototype.guess = function (answer) {
    let soru=this.getQuestion()
    if (soru.checkAnswer(answer)) {
        this.score++
        console.log('hi')

    }
    this.questionIndex++

 
}

let q1 = new question(`what's the best club on the world?`, ['Real', 'Bayern', 'ManU', 'Juve'], 'Real')
let q2 = new question(`what's the best club in the Turkey ?`, ['trabzon', 'beşiktaş', 'Galatasaray', 'fenerbahçe'], 'Galatasaray')
let q3 = new question('who is the best player on the world?', ['Hamilton', 'lebron', 'Ronaldo', 'Mahommes'], 'Mahommes')

const questions = [q1, q2, q3]
let quiz = new Quiz(questions)






// // // console.log(quiz.isFinish())

// // // console.log(quiz.getQuestion())
// // // console.log(quiz.guess('Real'))
// // // console.log(quiz.getQuestion().checkAnswer('Real'))
// // // console.log(quiz.score)


// // // console.log(quiz.getQuestion())
// // // quiz.guess('Galatasaray')
// // // console.log(quiz.score)


// // // console.log(quiz.getQuestion())
// // // quiz.guess('Ronaldo')
// // // console.log(quiz.score)


// // // console.log(quiz.isFinish())
// // // console.log(quiz.score)


loadQuestion()

function loadQuestion(){
    if(quiz.isFinish()){
        showScore()
    }else{
    document.getElementById('question').textContent=quiz.getQuestion().text
    console.log(quiz.getQuestion())
    let choices= quiz.getQuestion().choices
    choices.forEach(function(item,index){
        document.getElementById('choice'+index).textContent=item
    })
    document.getElementById('progress').textContent=`question ${quiz.questionIndex+1} of ${quiz.questions.length}`
}
}

//
document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('click',function(){
        quiz.guess(btn.textContent)  
        loadQuestion()
    })
})

function showScore(){
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
 
    document.querySelector('.card-body').innerHTML = html;
}
 
 






























// function question(text, choices, answer) {
//     this.text = text
//     this.choices = choices
//     this.answer = answer
// }
// question.prototype.checkAnswer = function (answer) {
//     return this.answer === answer
// }

// function Quiz(questions) {
//     this.questions = questions
//     this.questionIndex = 0
//     this.score = 0
// }

// Quiz.prototype.getQuestion = function () {
//     return this.questions[this.questionIndex]
// }

// // Quiz.prototype.isFinish = function () {
// //     return this.questions.length === this.questionIndex
// // }

// Quiz.prototype.guess = function (soru,answer) {
//     console.log(soru.checkAnswer('Real'))
//     if (soru.checkAnswer(answer)) {
//         this.score++

//     }
//     this.questionIndex++
//     loadQuestion()
 
// }




// let q1 = new question(`what's the best club on the world?`, ['Real', 'Bayern', 'ManU', 'Juve'], 'Real')
// let q2 = new question(`what's the best club in the Turkey ?`, ['trabzon', 'beşiktaş', 'Galatasaray', 'fenerbahçe'], 'Galatasaray')
// let q3 = new question('who is the best player on the world?', ['Hamilton', 'lebron', 'Ronaldo', 'Mahommes'], 'Mahommes')

// const questions = [q1, q2, q3]
// let quiz = new Quiz(questions)

// console.log(quiz.questions[2].text)




// document.querySelectorAll('.btn').forEach(function (item) {
//     item.addEventListener('click', function (e) {
//         let answer = e.target.textContent
//         let soru= quiz.getQuestion()
//         quiz.guess(soru,answer)
//         console.log(e.target.textContent)
        
//     })
// })


// function loadQuestion() {
//     // if (quiz.isFinish()) {
//     //     showScore()
//     // } else {
//          document.getElementById('question').textContent = quiz.getQuestion().text
//         for (i = 0; i < 4; i++) {
//             document.querySelectorAll('.btn')[i].textContent = quiz.getQuestion().choices[i]
//         //}
//     }
//     showProgress()
//     if(quiz.questionIndex===quiz.questions.length){
//         showScore()
//     }
// }

// function showScore() {
//     var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

//     document.querySelector('.card-body').innerHTML = html;
// }

// function showProgress() {
//     document.getElementById('progress').textContent = `Question ${quiz.questionIndex+1 } of ${questions.length}`
// }







