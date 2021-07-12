const word_el = document.getElementById('word')
const correctLetters = ['k', 't', 'b', 'f','l','e','i']




let val = getRandomWord().split('')
for(i=0;i<val.length;i++){
    displayWord('')
    
}
console.log(val)


function getRandomWord() {
    const words = ['sufle', 'belki', 'another', 'okey']
   
    return words[Math.floor(Math.random() * words.length)]
}
const basamak= document.querySelectorAll('.letter')
letters()
function letters() {
    // let letters = getRandomWord().split('')
    let letters=val
//     for(i=0;i<letters.length;i++){
//         displayWord('')
       
//     }
// console.log(letters)

  
correctLetters.forEach(function (item) {
         if (letters.indexOf(item) > -1) {
        basamak[letters.indexOf(item)].textContent=item
        
        }
    })   
}


// const letters=getRandomWord().split('')

// if(!getRandomWord().includes(correctLetters)){
//     const letters= getRandomWord().split('')
//     letters.map(displayWord)
// } //else{
//     match()
// }


function displayWord(i) {
    const divs = document.createElement('div')
    divs.className = 'letter'
    divs.appendChild(document.createTextNode(i))
    word_el.appendChild(divs)
    const w=word_el.innerText.replace(/\n/g,'')
    console.log(w)

}
// for(i=0;i<correctLetters.length;i++){

// }


