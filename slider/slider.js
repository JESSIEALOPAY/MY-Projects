let Songs = [
    {
        name: 'belki',
        image: 'img/belki.jpg',
        link: 'https://www.youtube.com/watch?v=jHr7bqMi7mk'
    },
    {
        name: 'slash',
        image: 'img/slash.jpg',
        link: 'https://www.youtube.com/watch?v=bC8EmPA6H6g'
    },
    {
        name: 'another love',
        image: 'img/another_love.jpg',
        link: 'https://www.youtube.com/watch?v=MwpMEbgC7DA'
    },
    {
        name: 'içinde aşk var',
        image: 'img/sufle.jpg',
        link: 'https://www.youtube.com/watch?v=U9Z8FJlT78g'
    },
    {
        name: 'ay tenli kadın',
        image: 'img/ay_tenli_kadın.jpg',
        link: 'https://www.youtube.com/watch?v=HirFutbbIWg'
    }
]

const myPleasure = {
    duration: 2000,
    random: true
}

let interval;
let index=0

eventListener()
interval= setInterval(transition, myPleasure.duration)

function createrRandom() {

    return Math.floor(Math.random() * Songs.length)
}




function eventListener() {
    document.querySelector('.fa-arrow-circle-right').addEventListener('click', btnRight)
    document.querySelector('.fa-arrow-circle-left').addEventListener('click', btnLeft)
    document.querySelectorAll('.fas ').forEach(function(item){
        item.addEventListener('mouseenter',function(){
            clearInterval(interval)
        })
    })
    document.querySelectorAll('.fas ').forEach(function(item){
        item.addEventListener('mouseleave',function(){
            setInterval(transition, myPleasure.duration)
        })
    })

}





function transition() {
    
    if (myPleasure.random) {
        choices(createrRandom())
    }else{
        index++
        choices(index)
    }
}






function choices(index) {
    document.querySelector('.card-link').setAttribute('href', Songs[index].link)
    document.querySelector('.card-title').textContent = Songs[index].name
    document.querySelector('.card-img-top').setAttribute('src', Songs[index].image)

}



function btnRight() {

    if (index == Songs.length) {
        index = 0
    }
    choices(index)
    console.log('hi')
}

function btnLeft() {
    index--
    if (index < 0) {
        index = Songs.length - 1
    }
    choices(index)
}









































// let pleasure = {
//     duration: 2000,
//     random: true

// }
// let index =0
// let interval;
// let prev;
// random()

// function sayıAtama(index) {
//     document.querySelector('.card-img-top').setAttribute('src', Songs[index].image)
//     document.querySelector('.card-title').textContent = Songs[index].name
//     document.querySelector('.card-link').setAttribute('href', Songs[index].link)
// }

// document.querySelectorAll('.fas').forEach(function(item){
//     item.addEventListener('mouseenter',function(){
//         clearInterval(interval)
//     })
// })


// document.querySelectorAll('.fas').forEach(function(item){
//     item.addEventListener('mouseleave',function(){
//         random()
//     })
// })


// document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
//     index--
//     if (index < 0) {
//         index = Songs.length - 1
//     }
//     sayıAtama(index)
//     console.log(index)
// })


// document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
//     index++
//     if (index >= Songs.length) {
//         index = 0
//     }
//     sayıAtama(index)
//     console.log(index)
// })

// function random(){
//    interval= setInterval(function(){
//         if (pleasure.random) {
//             prev=index
//             do{
//                 index=Math.floor(Math.random()*Songs.length)
//             }while(index==prev)

//             sayıAtama(index)
//             console.log(index)
//         }else{
//             if(Songs.length==index+1){
//                 index=-1
//             }
//             index++
//             sayıAtama(index)
//             console.log(index)
//         }
//     },pleasure.duration)



// }



























// let Songs = [
//     {
//         name: 'belki',
//         image: 'img/belki.jpg',
//         link: 'https://www.youtube.com/watch?v=jHr7bqMi7mk'
//     },
//     {
//         name: 'slash',
//         image: 'img/slash.jpg',
//         link: 'https://www.youtube.com/watch?v=bC8EmPA6H6g'
//     },
//     {
//         name: 'another love',
//         image: 'img/another_love.jpg',
//         link: 'https://www.youtube.com/watch?v=MwpMEbgC7DA'
//     },
//     {
//         name: 'içinde aşk var',
//         image: 'img/sufle.jpg',
//         link: 'https://www.youtube.com/watch?v=U9Z8FJlT78g'
//     },
//     {
//         name: 'ay tenli kadın',
//         image: 'img/ay_tenli_kadın.jpg',
//         link: 'https://www.youtube.com/watch?v=HirFutbbIWg'
//     }
// ]
// let index = 0
// let settings = {
//     duration: 3000,
//     random: true
// }
// showSlide(index)
// uncomamnded()


// document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
//     index++
//     if (index >= Songs.length) {
//         index = 0
//     }

//     showSlide(index)


// })
// document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
//     index--
//     if (index < 0) {
//         index = Songs.length - 1
//     }


// })


// function uncomamnded() {

//     setInterval(function () {
//         if (settings.random == true) {
//             let pre 
//             pre=index
//             do{
//             index = Math.floor(Math.random() * Songs.length)
//             }while(index==pre)

//             showSlide(index)
//         }else{
//             if(index == Songs.length){

//                 index=0
//             }else{
//                 showSlide(index)
//             console.log(index)
//             index++  
//             }
//         }    


//     }, settings.duration)
// }


// function showSlide(index) {
//     document.querySelector('.card-img-top').setAttribute('src', Songs[index].image)
//     document.querySelector('.card-link').setAttribute('href', Songs[index].link)
//     document.querySelector('.card-title').textContent = Songs[index].name

// }







//sLength = Songs.length
// let index = 0
// let interval;
// untouched()


// function untouched() {
//     interval = setInterval(function () {
//         let previous

//         if (pleasure.random === true) {
//             previous = index
//             do {
//                 index = Math.floor(Math.random() * sLength)
//             } while (index == previous)
//             createCard()
//             console.log(index)
//         } else {
//             index++
//         if (index == sLength) {
//             index = 0
//         }

//         createCard()
//             console.log(index)
//         }


//     }, pleasure.duration)

// }
// document.querySelectorAll('.fas').forEach(function (item) {
//     item.addEventListener('mouseenter', function () {
//         clearInterval(interval)
//     })
// })
// document.querySelectorAll('.fas').forEach(function(item){
//     item.addEventListener('mouseleave',function(){
//         untouched()
//     })
// })

// function createCard() {
//     document.querySelector('.card-img-top').setAttribute('src', Songs[index].image)
//     document.querySelector('.card-link').setAttribute('href', Songs[index].link)
//     document.querySelector('.card-title').textContent = Songs[index].name
//     document.querySelector('.fa-arrow-circle-left').addEventListener('click', leftKey)
//     document.querySelector('.fa-arrow-circle-right').addEventListener('click', rightKey)

// }



// function leftKey() {
//     index--
//     if (index < 0) {
//         index = sLength
//         index--
//     }
//     createCard()
// }

// function rightKey() {
//     index++
//     if (index == sLength) {
//         index = 0
//     }

//     createCard()

// }






