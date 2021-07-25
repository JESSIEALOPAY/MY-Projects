const word_el = document.querySelector('#word')
const popup = document.querySelector('#popup-container')
const msg = document.querySelector('#success-message')
const wrongLetter_el=document.querySelector('#wrong-letters')
const items=document.querySelectorAll('.item')
const message=document.querySelector('#message')
const playAgain=document.querySelector('#play-again')


let correctLetters = []
let wrongLetters=[]
let word = getRandomWord()
console.log(word)

playAgain.addEventListener('click',function(){
    correctLetters.splice(0)
    wrongLetters.splice(0)
    word=getRandomWord()
    word_el.innerHTML=''
    for(let i=0;i<word.length;i++){
        word_el.innerHTML+= `
        <div class="letter">
        </div>`
    }
    popup.style.display='none'
    
})




function getRandomWord() {
    let words = ['anholt', 'cıcaldau', 'muslera', 'marcao']
    return words[Math.floor(Math.random() * words.length)]
}

for(let i=0;i<word.length;i++){
    word_el.innerHTML+= `
    <div class="letter">
    </div>`
}

function displayWord() {
    let displayLetters = word.split('').map(item => {
        if (correctLetters.includes(item)) {
            return item
        } else {
            item = ''
            return item
        }
    })

    displayLetters.forEach((letter,index)=>{
        document.querySelectorAll('.letter')[index].textContent=letter
    })
    
    let w = word_el.innerText.replace(/\n/g, '')
    if (w == word) {
        popup.style.display = 'flex'
        msg.textContent = 'Başardın Bravo'
    }
    console.log(displayLetters)
    console.log(word_el.innerText.replace(/\n/g, ''))

}

function updateWrongLetters(){
    if(wrongLetters.length>0){
    wrongLetter_el.innerHTML=`
    <h3>Hatalı Harfler</h3>
    <span>${wrongLetters}</span>
    `
    for(let i=0;i<wrongLetters.length;i++){
        items[i].style.display='block'
    }
    }
    if(wrongLetters.length==items.length){
        popup.style.display = 'flex'
        msg.textContent = 'Kaybettin Üzgünüm' 
    }
}

function displayMessage(){
    message.classList.add('show')
    setTimeout(() => {
        message.classList.remove('show')
    }, 2000);
}

window.addEventListener('keydown', function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        let letter=e.key
        if(word.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter)
                displayWord()
            }else{
                displayMessage()
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter)
                updateWrongLetters()
            }else{
                displayMessage()
            }
        }
    }else{
        console.log('lütfen sadece alfabeyi kullanın')
    }
})






//             deneme fonksiyonları ya da garanti fonksiyonlar


// function displayWord() {

//     let displayLetters = word.split('').map(item => {
//         if (correctLetters.includes(item)) {
//             return item
//         } else {
//             item = ''
//             return item
//         }
//     })
//     displayLetters.forEach(element => {
//         word_el.innerHTML += `
//         <div class="letter">
//             ${element}
//         </div>`
//     });
//     let w = word_el.innerText.replace(/\n/g, '')
//     if (w == word) {
//         popup.style.display = 'flex'
//         msg.textContent = 'Başardın Bravo'
//     }



//     console.log(displayLetters)
//     console.log(word_el.innerText.replace(/\n/g, ''))

// }




// for(let i=0;i<displayLetters.length;i++){
//     word_el.innerHTML+= `
//     <div class="letter">
//         ${element}
//     </div>`
// }


// function displayWord(){
//     let word=getRandomWord()
//     word_el.innerHTML=` 
//     ${word.split('').map(letter=> `
//     <div class="letter">
//     ${correctLetters.includes(letter)? letter:''}
//     </div>
//     `).join('')}
//     `


// }

// displayWord()

