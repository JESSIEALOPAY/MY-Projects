
// let val;
// val=window.document
// val=document.all.length
// val=document.all[10]
// val=document.body
// val=document.anchors
// val=document.URL
// val=document.images
// val=document.forms[0].action



// let val;
//          getElementById & querySelector
// val=document.getElementById('header')
// val=document.getElementById('header').id
// // val=val.id
// val.style.fontSize='45px'
// val.style.color='red'
// val.style.fontWeight='bold'
// // val.style.pladisy='none'
// document.getElementById('header').innerText='MY ToDo App'
// document.getElementById('header').textContent='my ToDo app'


// val=document.querySelector('#header') // id için # kullanılıyor
// val=document.querySelector('.card-header') // class için . nokta kullanılır



// val=document.querySelector('li').style.color='blue'
// val=document.querySelector('li:last-child').style.color='red'
// document.querySelector('li:nth-child(2)').style.color='green'
// document.querySelector('li:nth-child(3)').textContent='task item'
// document.querySelector('li:nth-child(3)').innerText='task '

// document.querySelector('li').className='list-group-item list-group-item-primary'
// document.querySelector('li').classList.add('action')

//                    multiple
//class name
// document.getElementsByClassName()

// val=document.getElementsByClassName('list-group-item')
// val=document.getElementsByClassName('list-group-item')[2]
// val=val[1]
// val[3].style.color='green'
// val[3].style.fontSize='35px'
// val[2].textContent='new item'


// for(i=0;i<val.length;i++){
//     console.log(val[i].style.color='blue')
//     console.log(val[i].textContent='new item')
// }


// val=document.getElementsByTagName('li')

// val=document.getElementById('task-list')
// val=val.getElementsByTagName('a')

// val=document.getElementById('task-list')
// val=document.getElementById('task-list').getElementsByTagName('a')


// val= document.querySelectorAll('li')


// val.forEach(function(item){
//     item.textContent='hello'
// })


// val= document.querySelectorAll('li:nth-child(even)')



// val.forEach(function(item){
//     item.style.background='grey'
// })


// val=document.getElementById('header')
// val=document.getElementById('header').textContent='what do am i'
// document.getElementById('header').style.fontSize='85px'
// document.querySelector('li').textContent='doldur işte'
// document.querySelector('li:last-child').textContent='again'


// val=document.querySelector('li')
// val=document.querySelector('li:last-child')
// val=document.querySelector('li:nth-child(3)').innerText='new item'
// val=document.querySelector('li:last-child').textContent='my item'
// document.querySelector('li:last-child').style.background='green'
// val=document.querySelector('li:nth-child(2)').style.color='red'
// val=document.querySelector('li:nth-child(1)').style.fontSize='33px'
// val=val.innerHTML('new item')

// val=document.getElementsByTagName('li')[2].style.background='yellow'

// val=document.querySelectorAll('a')

// let val;
// let list=document.querySelector('.list-group')
// val=list
// val=list.childNodes[0]
// console.log(val)
// val=list.children
// val=list.childElementCount

// val=list.childNodes[1].nodeName
// val=list.childNodes[1].nodeType


// val=list.children[2].getElementsByClassName('list-group-item list-group-item-secondary')

// val=list.lastElementChild.textContent='kafama göre'
// val=list.firstElementChild.style.color='white'

// val=list.firstElementChild.children

// // val=list.firstElementChild.parentElement.parentNode

// val=list.firstElementChild.nextElementSibling

// for(let i=0;i<list.childElementCount;i++){
//     console.log(list.children[i])
// }



let people=[ 
    {name:'burak', lastname:'gurcan'},
    {name:'kerem', lastname:'çelik'},
    {name:"jessie",lastname:'alopay'},
    {name:"alopay",lastname:'chris'},
    {name:"her biri",lastname:'hayran sana'}
]

let val;
val=people.map(function(item){
    return item.name+'/'+ item.lastname
})
console.log(val)
console.log(typeof val)
// for(let i in people){
//     console.log(people[i])
// }
// // console.log(val)

// people.forEach(function(item){
//     console.log(item)
// })

// function yasHesabı(i){
//     return 2021-i
// }



// console.log(yasHesabı(1999))

// function mezuniyet(yas,name){
//     let age=yasHesabı(yas)
//     let kalanYıl= 25-age
//     if(kalanYıl>0){
//         console.log(`mezuniyetine ${kalanYıl} var ${name}`)
//     }else{
//         console.log(`zaten mezunsun ${name}`)
//     }
// }

// mezuniyet(1995,'burak')


// let sum=function(a,b){
//     c=a+b
//     return c
// }


function sum(){
    let total=0
    console.log(arguments)
    //   for(i=0;i<arguments.length;i++){
        // total += arguments[i]
// }
//     return total 
}


console.log(sum(15,25,4,115))
// let age=new Date(1999,5,7)

// const sum=function(){
//     return 2021- age.getFullYear() 
// }


// console.log(sum())

// function sumAll(){
//     let total=0
//     for(let i=0;i<arguments.length;i++){
//         total+=arguments[i]
//        }
//        return total
// }




// console.log(sumAll(1,52,65,4))


// let hesapA={
//     isim:'burak gurcan',
//     hesapNo: '385467245',
//     anaHesap:2500,
//     ekHesap:1000
// }

// let hesapB={
//     isim:'jessie alopay',
//     hesapNo: '38154845',
//     anaHesap:3500,
//     ekHesap:1500
// }
// let hesapNumarası= prompt('hesap numaranızı giriniz')
// function paraÇek(hesapNo,Tutar){
//     if(hesapNo=='385467245'){
//         Tutar= prompt(`çekmek istediğiniz tutarı girin ${hesapA.isim} bey`)
//         if(Tutar<=hesapA.anaHesap){
//             console.log('paranızı çekebilirsiniz')
//         }else{
//             if(Tutar<=(hesapA.anaHesap+hesapA.ekHesap)){
//                 if(confirm('ek hesabınızı kullanmak ister misiniz?')){
//                     console.log('paranızı alabilirsiniz')
//                 }else{
//                     console.log('hesabınızda yeterli para yok')
//                 }
//             }else{
//                 console.log('hesabınızda yeterli para yok')
//             }
//             }
//         }else if(hesapNo=='38154845'){
//             Tutar= prompt(`çekmek istediğiniz tutarı girin ${hesapB.isim} bey`)
//         if(Tutar<=hesapB.anaHesap){
//             console.log('paranızı çekebilirsiniz')
//         }else{
//             if(Tutar<=(hesapB.anaHesap+hesapB.ekHesap)){
//                 if(confirm('ek hesabınızı kullanmak ister misiniz?')){
//                     console.log('paranızı alabilirsiniz')
//                 }else{
//                     console.log('hesabınızda yeterli para yok')
//                 }
//             }else{
//                 console.log('hesabınızda yeterli para yok')
//             }
//             }
//         }

// }


// paraÇek(hesapNumarası)

// function sumAll(){
//     let total=0
//     for(i=0;i<arguments.length;i++){
//         total+=arguments[i]
//     }return total
// }


// console.log(sumAll(25,24,62,5))



// val=document.getElementById('header')
// val=document.getElementById('header').className
// val=document.getElementById('header').id
// val=val.className
// val.style.fontWeight='bold'
// val.style.fontSize='55px'
// val.style.color='red'
// val.innerText='yapılacaklar listesi'

// val=document.querySelector('#header').id
// val=document.querySelector('.card-header')
// val=document.querySelector('li:last-child').style.color='yellow'
// document.querySelector('li:nth-child(2)').style.background='blue'
// document.querySelector('li:nth-child(2)').style.color='white'

// val=document.getElementsByClassName('list-group-item')
// val=val[2]
// val=val[1].style.color='green'

// val=document.getElementsByTagName('li')                         
// val=document.getElementsByTagName('a')
// val=document.getElementById('task-list').getElementsByTagName('a')

// val=document.querySelectorAll('li')

// val.forEach(function(item){
//     item.innerText='My ToDo list'
//      })

// val=document.querySelectorAll('li:nth-child(even)')

// val.forEach(function(item){
//     item.style.background='grey'
// })


// let list=document.querySelector('.list-group')
// val=list.childNodes



// val=list.childNodes[3].nodeName
// val=list.childNodes[3].nodeType   //1=element  2=attribute  3=text   8=yorum satrı

// val=list.children
// val=list.children[2]
// val=list.children[2].innerHTML='new item'
// val=list.children[2].children
// val=list.firstElementChild.children

// val=list.childNodes
// val=list.childNodes[2].textContent='new item'
// val=list.childNodes[2]

// val=list.childNodes
// val=list.firstElementChild
// val=list.children[2].children

// val=list.firstChild
// val=list.parentNode.parentElement
// val=list.parentElement

// val=list.childNodes[0].nextSibling
// val=list.children[1].nextElementSibling


// console.log(val)


// const li= document.createElement('li')

// add class


// li.className='list-group-item list-group-item-secondary'
///setAttribute     Attribute  ekleme

// li.setAttribute('tittle','new item')

// textNode

// const text= document.createTextNode('nem item')
// li.appendChild(text)


// const a=document.createElement('a')
// a.setAttribute('href','#')
// a.className='delete-item float-right'
// a.innerHTML='<i class="fas fa-times"></i>'

// li.appendChild(a)


// console.log(li)

// let ul=document.getElementById('task-list')

// ul.appendChild(li)

// console.log(ul)


//          element silme remove

let ul=  document.getElementById('task-list')

//     ul.remove()
// ul.remove
// ul.childNodes[1].remove()
// ul.removeChild(ul.children[2])

//        remove  attribute
// ul.children[1].removeAttribute('class')
// for(let i=0;i<ul.children.length;i++){
//     ul.children[i].removeAttribute('class')
// }
// console.log(ul)

// const cardHeader=document.querySelector('.card-header')

// const h2= document.createElement('h2')
// h2.setAttribute('class','card-header')
// h2.appendChild(document.createTextNode('MY LİST'))


// let val=cardHeader.parentElement
// val.replaceChild(h2,cardHeader)
// console.log(val)
// let val;
// let link= ul.children[0].children[0]

// val=link.className
// val=link.classList
// val=link.classList[1]

// link.classList.add('new')
// link.classList.remove('new')

// val=link.getAttribute('href')
// val=link.setAttribute('href','https://ntvspor.net')

// val=link
// console.log(val)


//              EVENT    LİSTENERS

// const btn=document.querySelector('#btnDeleteAll')


// btn.addEventListener('click',function(){
//     console.log('btn clicked')
// })
// btn.addEventListener('click',btnCkilck)



// function btnCkilck(){
//     console.log('btn clicked')
// }




// btn.addEventListener('click',function(e){
//     console.log('btn clicked')
//     e.preventDefault()
// })  // e.preventDefault()  sayfanın linke gitme eğilimini engelliyor

// btn.addEventListener('click',function(e){
//     let val
//     val=e 
//     val=e.target
//     val=e.target.id
//     val=e.target.classList
//     val=e.type

//     console.log(val)
    
//     e.preventDefault()
// }) 



//                    MOUSE EVENTS

// const btn=document.querySelector('#btnDeleteAll')
// const ul=document.querySelector('#task-list')

// btn.addEventListener('click',eventHandler)
// ul.addEventListener('click',eventHandler)

// function eventHandler(e){
//     console.log(`event type ${e.type}`)
//     e.preventDefault()
// }

// btn.addEventListener('dblclick',eventHandler)

// btn.addEventListener('mousedown',eventHandler)
// btn.addEventListener('mouseup',eventHandler)

// ul.addEventListener('mouseenter',eventHandler)
// ul.addEventListener('mouseleave',eventHandler)

// ul.addEventListener('mouseover',eventHandler)
// ul.addEventListener('mouseout',eventHandler)


//             MOUSE MOVE
// ul.addEventListener('mousemove',eventHandler)
// let kord= document.querySelector('.card-header')



// function eventHandler(e){
//     console.log(`event type ${e.type}`)

//     kord.textContent=`mouse X: ${e.offsetX}
//     mouse Y: ${e.offsetY}`
// }


// const btn= document.querySelector('#btnDeleteAll')


// btn.addEventListener('click',function(e){
//     console.log('btn clicked')
//     let val 
//     val=e
//     val=e.target
//     val=e.target.id
//     val=e.target.className
//     // val=e.type

//     console.log(val)

// })

// btn.addEventListener('click',btnClick)




// function btnClick(){
//     console.log('btn clicked')
    
// }

// const input=document.querySelector('#txtTaskName')
// const form=document.querySelector('form')
// // input.addEventListener('keydown',eventHandler)
// // input.addEventListener('keyup',eventHandler)
// input.addEventListener('focus',eventHandler)
// form.addEventListener('submit',eventHandler)   


// function eventHandler(e){
//     console.log(`event type ${e.type}`)
//     // console.log(`key code ${e.keyCode}`)
//     console.log(`value  ${e.target.value}`)
//     // e.target.style.backgroundColor='grey'
//     e.preventDefault()
// }
// let val=document.querySelector('button')
// val.setAttribute('type','submit')
// // form.setAttribute('action','https://ntvspor.net')

// console.log(form)
// console.log(val)




// const form=document.querySelector('form')
// const cardBody= document.querySelector('.card-body')
// const card=document.querySelector('.card')
// const container= document.querySelector('.container')

//             bubbling 
// form.addEventListener('click',function(e){
//     console.log(`form`)
//     e.stopPropagation()
// })

// cardBody.addEventListener('click',function(e){
//     console.log(`cardBody`)
//     e.stopPropagation()
// })

// card.addEventListener('click',function(e){
//     console.log(`card`)
//     e.stopPropagation()
// })

// container.addEventListener('click',function(e){
//     console.log(`container`)
//     e.stopPropagation()
// })

//          capturing
// form.addEventListener('click',function(e){
//     console.log(`form`)
   
// },true)

// cardBody.addEventListener('click',function(e){
//     console.log(`cardBody`)
// },true)

// card.addEventListener('click',function(e){
//     console.log(`card`)
  
// },true)

// container.addEventListener('click',function(e){
//     console.log(`container`)
  
// },true)


// const deleteItems= document.querySelectorAll('.fa-times')
// deleteItems.forEach(function(item){
//     item.addEventListener('click',function(e){
//         console.log(e.target)
//     })
// })


// console.log(deleteItems)

/////////////// ÖNEMLİ 
// const ul=document.querySelector('ul')

// ul.addEventListener('click',function(e){
//     console.log(e.target)
// })

// ul.addEventListener('click',function(e){
//     if(e.target.className=='fas fa-times'){
//         e.target.parentElement.parentElement.remove()
//         e.preventDefault
//     }
// })

// let val;
// //////               LOCAL STORAGE

// const firstName=localStorage.setItem('firstName','arda')
// const lastName=localStorage.setItem('lastName','turan')


// // val=localStorage.getItem('firstName')
// // localStorage.removeItem('firstName')
// // localStorage.removeItem('lastName')

// localStorage.clear()





// console.log(localStorage)






// /////               SESSION STORAGE

// const city=sessionStorage.setItem('city','bursa')
// const country= sessionStorage.setItem('country','turkey')





// console.log(sessionStorage)


















































