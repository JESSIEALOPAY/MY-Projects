const display = document.querySelector('.calculator-input')
const keys = document.querySelector('.calculator-keys')

let sonuc = 0
let firstValue = null
let operator = null
let watingForSecondValue = false


updateInput()

function updateInput() {
    display.value = sonuc
}

keys.addEventListener('click', (function (e) {

    let element = e.target
    if (!element.matches('button')) return;



    if (element.classList.contains('operator')) {
        choiseOperator(element.value)
        console.log(element.value)
        updateInput()
        return
    }


    if (element.classList == 'decimal') {
        if (!sonuc.includes('.')) {
            sonuc = sonuc + '.'
        }
        updateInput()
        return
    }

    if (element.classList == 'clear') {
        sonuc = 0
        firstValue=null
        updateInput()
        return
    }


    inputNumber(element.value)
}))



function inputNumber(num) {
    if (watingForSecondValue) {
        sonuc = num
        watingForSecondValue=false
    } else {
        if (sonuc == 0) {
            sonuc = num
        } else {
            sonuc = sonuc + num
        }
    }
    updateInput()
}


function choiseOperator(nextOperator) {
    const value = parseFloat(sonuc)
    if (operator && watingForSecondValue) {
        operator = nextOperator
        console.log(operator)
        return
    }
    if (firstValue === null) {
        firstValue = value
        console.log(firstValue)
    } else if (operator) {
        const result = calculater(firstValue, value, operator)
        firstValue = result
        sonuc = result
      
        console.log(firstValue)

    }
    operator = nextOperator
    watingForSecondValue = true

}








function calculater(first, second, operator) {
    if (operator == '+') {
        calculate=first + second
        
    }
    if (operator == '-') {
        calculate=first - second
    }
    if (operator == '*') {
        calculate= first * second
    }
    if (operator == '/') {
        calculate=first / second
    }
    return calculate

}






























































// const display = document.querySelector('.calculator-input')
// const keys = document.querySelector('.calculator-keys')

// let displayValue = '0'
// let firstValue = null
// let operator = null
// let watingForSecondValue = false



// updateInput()

// function updateInput() {
//     display.value = displayValue
// }

// keys.addEventListener('click', function (e) {
//     const element = e.target

//     if (!element.matches('button')) return;

//     if (element.classList.contains('operator')) {

//         handleOparetor(element.value)
//         updateInput()
//         return
//     }
//     if (element.classList.contains('clear')) {
//         clear()
//         return
//     }
//     if (element.classList.contains('decimal')) {
//         inputDecimal()
//         return
//     }



//     inputNumber(element.value)
//     updateInput()

// })

// function handleOparetor(nextOperator) {
//     const value = parseFloat(displayValue)
//     if (operator && watingForSecondValue) {
//         operator = nextOperator
//         return
//     }
//     if (firstValue === null) {
//         firstValue = value


//     } else if (operator) {
//         const result = calculate(firstValue, value, operator)
//         firstValue = result
//         displayValue = result
//     }
//     operator = nextOperator
//     watingForSecondValue = true
//     console.log(displayValue, firstValue, operator, watingForSecondValue)
// }
// function calculate(first, second, operator) {
//     if (operator === '+') {
//         return first + second;
//     } else if (operator === '-') {
//         return first - second;
//     } else if (operator === '*') {
//         return first * second
//     } else if (operator === '/') {
//         return first / second;
//     }
//     return second;
// }



// function inputNumber(num) {
//     if (watingForSecondValue) {
//         displayValue = num
//         watingForSecondValue = false
//     } else {
//         if (displayValue == 0) {
//             displayValue = num
//         } else {
//             displayValue = displayValue + num
//         }
//     }

// }

// function inputDecimal() {
//     if (!displayValue.includes('.')) {
//         displayValue = displayValue + '.'
//     }
//     updateInput()
// }

// function clear() {
//     displayValue = 0
//     updateInput()
// }















































// const display = document.querySelector('.calculator-input')
// const keys = document.querySelector('.calculator-keys')

// let displayValue = '0'
// updateInput()

// function updateInput() {
//     display.value = displayValue
// }

// keys.addEventListener('click', function (e) {
//     const element = e.target
//     if (!element.matches('button')) return;

//     if (element.classList.contains('operator')){
//         console.log(element.value)
//         return 
//     }
//     if (element.classList.contains('clear')){
//         clear()
//         return 
//     }
//     if (element.classList.contains('decimal')){
//         inputDecimal()
//         return 
//     }
//     if (element.classList.contains('equal-sign operator')){
//         console.log(element.value)
//         return 
//     }



//     inputNumber(element.value)
//     updateInput()

// })

// function inputNumber(num){
//     if(displayValue ==0){
//         displayValue=num
//     }else{
//         displayValue=displayValue+num
//     }

// }


// function inputDecimal(){
// if(!displayValue.includes('.')){
//     displayValue=displayValue+'.'
//     }
//     updateInput()
// }



// function clear(){
//     displayValue=0
//     updateInput()
// }








