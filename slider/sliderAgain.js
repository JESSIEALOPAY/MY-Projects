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
let interval;
let index = 0
let time = {
    random: true,
    secons: 3000
}

const img = document.querySelector('.card-img-top')
const link = document.querySelector('.card-link')
const sing = document.querySelector('.card-title')

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++
    if (index == Songs.length) {
        index = 0
    }
    img.setAttribute('src', Songs[index].image)
    sing.textContent = Songs[index].name
    link.setAttribute('href', Songs[index].link)
})
document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--
    if (index < 0) {
        index = Songs.length - 1
    }
    img.setAttribute('src', Songs[index].image)
    sing.textContent = Songs[index].name
    link.setAttribute('href', Songs[index].link)
})

interval = setInterval(forInterval, time.secons);
function forInterval() {
    let random = Math.floor(Math.random() * Songs.length)
    if (time.random) {
        img.setAttribute('src', Songs[random].image)
        sing.textContent = Songs[random].name
        link.setAttribute('href', Songs[random].link)
        console.log(random)
    } else {
        index++
        if (index == Songs.length) {
            index = 0
        }
        img.setAttribute('src', Songs[index].image)
        sing.textContent = Songs[index].name
        link.setAttribute('href', Songs[index].link)
        console.log(index)
    }
}


document.querySelectorAll('.fas').forEach(item => {
    item.addEventListener('mouseenter', () => {

        console.log(25)
        clearInterval(interval)
    })
});
document.querySelectorAll('.fas').forEach(item => {
    item.addEventListener('mouseleave', () => {

        console.log(28)
        setInterval(forInterval, time.secons)
    })
});



























