const questionTextElement = document.getElementById('question')
const choiceElementA = document.getElementById('a_text')
const choiceElementB = document.getElementById('b_text')
const choiceElementC = document.getElementById('c_text')
const choiceElementD = document.getElementById('d_text')



class CreateQuestion {
    constructor(question, choice1, choice2, choice3, choice4, answerCode) {
        this.question = question
        this.choice1 = choice1
        this.choice2 = choice2
        this.choice3 = choice3
        this.choice4 = choice4
        this.answerCode = answerCode
    }
}

const q1 = new CreateQuestion('Who is the GOAT in the NFL?', 'Patrick Mahomes', 'Aaron Rodgers', 'Tom Brady', 'Travis Kelce', 'c')
const q2 = new CreateQuestion('Who is the Best Player in the NFL right now?', 'Aaron Donald', 'Patrick Mahomes', 'T.J. Watt', 'Josh Allen', 'b')
const q3 = new CreateQuestion('Who is the GOAT in the NBA?', 'Michael Jordan', 'Kobe Bryant', 'Lebron James', 'Shaq', 'a')
const q4 = new CreateQuestion('Who is the Best Shooter in the NBA AllTime?', 'Klay Thompson', 'Stephen Curry', 'Ray Allen', 'Steve Nash', 'b')
const q5 = new CreateQuestion("Who is the Kandall Jenner's boyfriend right now?", 'Devon Booker', 'Blake Griffin', 'Ben Simmons', 'Jordan Clarkson', 'a')

let numberOfQuestion = 0
let SuccessQuestion = 0

const Questions = [q1, q2, q3, q4, q5]


document.getElementById('submit').addEventListener('click', quizSubmit)

function quizSubmit(e) {
    document.querySelectorAll('.answer').forEach(element => {
        if (element.checked == true) {
            checkAnswers(element.id)
            numberOfQuestion++
            if (numberOfQuestion == Questions.length) {
                showScore()
                numberOfQuestion=0
            }else{
                QuestionsViews()
            } 
        }
        element.checked=false
    })
    e.preventDefault()
}

QuestionsViews()
function QuestionsViews() {
    questionTextElement.textContent = Questions[numberOfQuestion].question
    choiceElementA.textContent = Questions[numberOfQuestion].choice1
    choiceElementB.textContent = Questions[numberOfQuestion].choice2
    choiceElementC.textContent = Questions[numberOfQuestion].choice3
    choiceElementD.textContent = Questions[numberOfQuestion].choice4
}

function checkAnswers(choice) {
    if (choice == Questions[numberOfQuestion].answerCode) {
        SuccessQuestion++
    }
    console.log(SuccessQuestion)
    console.log(numberOfQuestion)
}

function showScore() {
    let html = `
    <div class="card" style="width: 18rem;">
  <img src="./images/${SuccessQuestion}.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Your Score</h5>
    <p class="card-text">You answered correctly at ${SuccessQuestion}/${Questions.length} </p>
    <button onclick="location.reload()">Reload</button>
  </div>
</div>
    `
    document.querySelector('body').innerHTML=html
}




// document.getElementById('submit').addEventListener('click',submit)

// function submit(){

//     document.querySelectorAll('.answer').forEach(element => {
//     console.log(element.checked)
// });

// }
// console.log(document.querySelectorAll('.answer'))






