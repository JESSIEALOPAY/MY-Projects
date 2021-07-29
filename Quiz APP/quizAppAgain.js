function question(text,choices,answer){
    this.text=text
    this.choices=choices
    this.answer=answer
}
question.prototype.answerControl=function(x){
    return this.answer==x
}

function Quiz(questions){
    this.questions=questions
    this.questionIndex=0
    this.score=0
}
Quiz.prototype.getQuestion=function(){
    return this.questions[this.questionIndex]
}
Quiz.prototype.isFinish=function(){
    return this.questionIndex==this.questions.length
}
Quiz.prototype.guess=function(guess){
    if(this.getQuestion().answer==guess){
        console.log(true)
        this.score++ 
    }
    this.questionIndex++
    showQestion()
}



let soru1=new question('who am I',['Burak','Jessie','Chris','Alopay'],'Burak')
let soru2=new question('what is my Team',['Jaguars','Saints','Chiefs','Ravens'],'Chiefs')
let soru3=new question('Who is the best player in the world for me?',['Ronaldo','Klay','Nadal','Mahomes'],'Klay')

let questions=[soru1,soru2,soru3]
let quiz=new Quiz(questions)


const questionText=document.getElementById('question')
const progress=document.getElementById('progress')

showQestion()

function showQestion(){
    if( quiz.isFinish()){
        showScore()
    }else{
        let soru=quiz.getQuestion()
        questionText.textContent= soru.text
        soru.choices.forEach((item,index)=>{
            document.getElementById('choice'+index).textContent=item
        })
        showProgress()  
        
    }
}

document.querySelectorAll('.btn').forEach(item=>{
    item.addEventListener('click',function(e){
        quiz.guess(e.target.textContent) 
      
    })
})

function showScore(){
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
 
    document.querySelector('.card-body').innerHTML = html;
}

function showProgress(){
    progress.textContent=`question ${quiz.questionIndex+1} of ${quiz.questions.length}`
}






