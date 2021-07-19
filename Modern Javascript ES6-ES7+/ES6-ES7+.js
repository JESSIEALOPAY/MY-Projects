// //                             16.07.2021
// //ES5
// let job5 = function () {
//     console.log('whats your job?')
// }
// job5()

// let calculate5 = function (a, b) {
//     return a * b
// }
// console.log(calculate5(10, 12))

// let split5 = function (text) {
//     return text.split(' ')
// }
// console.log(split5('ben sana gelemesem göremesem de seni'))

// let supporter5 = function (name, team) {
//     return {
//         name: name,
//         team: team
//     }
// }
// console.log(supporter5('Tom Brady', 'Tempa Bay'))

// let players = [
//     { name: 'Ronaldo', value: 100 },
//     { name: 'LewandoWski', value: 75 },
//     { name: 'Messi', value: 120 },
//     { name: 'Mbappe', value: 210 }
// ]

// let values = players.map(function (item) {
//     return item.value
// })
// console.log(values)

// let arr = [3, 5, 15, 18, 25, 96]

// let odd = arr.filter(function (item) {
//     return item % 2 == 1
// })
// console.log(odd)

// let person5 = function (name) {
//     this.name = name
//     this.hobbys = ['read', 'tennis', 'basketball']
//     this.compicated = function () {
//         let self = this
//         this.hobbys.forEach(function (item) {

//             console.log(self.name + item)
//         })
//     }
// }
// let jessie = new person5('jess')
// jessie.compicated()

// //ES6

// //let job6=()=> console.log('whats your job?')
// let job6 = () => console.log('whats your job?')
// job6()

// let calculate6 = (a, b) => { return a * b }
// // let calculate6=(a,b)=>a*b
// console.log(calculate6(11, 15))

// let split6=text=>text.split(' ')
// let split6 = text => { return text.split(' ') }
// console.log(split6('bir derdim var tutamam içimde'))

// let supporter6 = (name, team) => (
//     {
//         name: name,
//         team: team

//     }
// )

// console.log(supporter6('Travis Kelce', 'Chiefs'))

// let playerNames = players.map(item => item.name)
// console.log(playerNames)

// let even = arr.filter(item => item % 2 == 0)
// console.log(even)

// let person6 = function (name) {
//     this.name = name
//     this.hobbys = ['read', 'tennis', 'basketball']
//     this.complicated = function () {
//         this.hobbys.forEach(item => { console.log(item + this.name) })
//     }
// }

// let chris = new person6('chris')
// chris.complicated()



// // let GS = ['Muslera', 'Denayer', 'HakanBalta', 'Selçuk', 'Sneijder', 'Podolski']
// // let gsList = function () {
// //     this.index = 0
// //     this.team='Galatastray'
// //     this.change = function () {
// //         let another=this
// //         setInterval(function () {
// //             console.log(`${GS[another.index]} is a legend of ${another.team}`)
// //             another.index++
// //         }, 2000)
// //     }
// // }

// // let GS = ['Muslera', 'Denayer', 'HakanBalta', 'Selçuk', 'Sneijder', 'Podolski']
// // let gsList = function () {
// //     this.index = 0
// //     this.team='Galatastray'
// //     this.change = function () {
// //         setInterval(()=> {
// //             console.log(`${GS[this.index]} is a legend of ${this.team}`)
// //             this.index++
// //         }, 2000)
// //     }
// // }
// // let MyTeam=new gsList()
// // MyTeam.change()


// //                       pleasure
// // let list = {
// //     team: 'Gaalatasaray',
// //     players: ['nando', 'kerem', 'marcao'],
// //     call: function () {
// //         this.players.map(function (item) {
// //             console.log(item)
// //         })
// //     }
// // }
// // list.call()

// //                         SPREAD OPERATOR

// let total=(a,b,c)=>a+b*c

// let numbers=[22,8,4]

// // ES5
// console.log(total(3,5,7))
// console.log(total.apply(null,numbers))


// //ES6
// console.log(total(...numbers))  //easily

// let morveotesi1=['Bir', 'derdim' ,'var' ,'artık']
// let morveotesi2=['Gitsem' ,'nereye', 'kadar']

// // morveotesi1.push(...morveotesi2)
// let sing=[...morveotesi1, 'tutamam' ,'içimde',...morveotesi2]
// console.log(sing)

// let h1=document.querySelectorAll('h1')
// let divs=document.querySelectorAll('div')

// let array=[...h1,...divs]

// array.forEach(item=>item.style.color='white')
// console.log(array)

// //              REST PARAMETERS
// //                  ES5 
// let sumES5=function(){
//     let arr=Array.prototype.slice.call(arguments)
//     console.log(arr)
//     let result=0
//    arr.forEach(item=>result+=item)
//    return result
// }


// console.log(sumES5(10,150,21))
     
// //                    ES6

// let sumES6=function(...arr){
//     result=0
//     arr.forEach(item=> result+=item)
//     return result

// }
// console.log(sumES6(20,15,23))

// let overpaid=(normal,...arr)=>{
//     isOverpaid=null
//     arr.forEach(item=>console.log(item*12>normal))
// } 

// overpaid(84000,8000,6250,11000,5300,7800,9300)


// //                          DESTRUCTURING
// //        Destructuring assignment

// // let a,b,rest;
// //ES5
// // a=15
// // b=12

// // ES6
// // [a,b,...rest]=[87,15,10,35,99]

// // ({a,b}={a:12,b:33})

// // ({a,b,...rest}={a:12,b:15,c:67,h:56,t:32})
// // console.log(a,b,rest)

// //        ARRAY Destructuring 
// // const myMan=['Mahommes','Kansas City Chiefs',15]
// //            ES5
// // let names=myMan[0]
// // let team=myMan[1]
// // let number=myMan[2]
// // console.log(names,team,number)


// //ES6
// // let[name,team,number]=myMan

// // console.log(name,team,number)


// //         OBJECT Destructuring
// let GOAT={
//     name:'Tom BRADY',
//     team:'Tempa Bay',
//     rings:7
// }
// //                     ES5
// // let goatName=GOAT.name
// // let team=GOAT.team
// // let rings=GOAT.rings


// // console.log(goatName)
// // console.log(team)
// // console.log(rings)

// //                    ES6

// // const{name,team,rings}=GOAT
// // console.log(name,team,rings)

// // let{team,rings,name,superbowl=11}=GOAT
// // console.log(team,rings,name,superbowl)

// // let names=['mahommes','kelce','brady','hill','Josh']
// // let numberOfPlayers=[15,84,12,10,17]
// // let[,,goat,,allen]=names

// // console.log(goat,allen)

// let { team:takım} =GOAT

// console.log(takım)
// // console.log(team)   // undefined 





//                      17.07.2021



let divs= document.querySelectorAll('div')
let h1=document.querySelectorAll('h1')
let yazı=[...divs,...h1]
yazı.forEach(item=>item.style.color='white')




// let boxes=document.querySelectorAll('.box')
// boxes.forEach(item=>item.style.backgroundColor='red')  
// console.log(boxes)
//                  ES5
// let boxesES5= Array.prototype.slice.call(boxes)


// boxesES5.forEach(item=>item.style.backgroundColor='blue')
// console.log(boxesES5)

// //                    ES6
// let boxesES6=Array.from(boxes)
// boxesES6.forEach(item=>item.textContent='I am still in love')


//                   ES5
// for(let i=0;i<boxesES5.length;i++){
//     if(boxesES5[i].className=="box name"){
//         console.log('hi')
//         continue
//     }
//     boxesES5[i].style.color='blue'
// }
//               ES6 
// for (let box of boxesES6) {
//     if(box.className=="box hala"){
//         console.log(1)
//         continue
//     }
//     box.style.color='red'
// }

// let transfermarkt=[
//     {name:'ronaldo',value:100},
//     {name:'messi',value:120},
//     {name:'neymar',value:170},
//     {name:'mbappe',value:220},
//     {name:'lewandowski',value:100}
// ]
// console.log(Array.from(transfermarkt,player=>player.value))
// console.log(transfermarkt.find(item=>item.name=='messi'))
// console.log(transfermarkt.find(item=>item.value==100)) // value değeri 100 olanların birncisi gelir
// console.log(transfermarkt.filter(item=>item.value==100)) // value değeri 100 olanların dizisi gelir
// console.log(transfermarkt.findIndex(item=>item.name=='lewandowski'))



// let tired=['a','B','c']
// let entries=tired.entries()

// console.log(entries)
// for (const item of entries) {
//     console.log(item)
// }
// let keys=tired.keys()
// for (const item of keys) {
//     console.log(item)
// }
// let values=tired.values()
// for (const item of values) {
//     console.log(item)
// }

// tired.forEach(item=>console.log(item))

//                          Maps

// let val;
// const Galatasaray=new Map()

// Galatasaray.set(1,'muslera')
// Galatasaray.set(45,'marcao')
// Galatasaray.set('4','taylan')
// Galatasaray.set(18,'kerem')
// Galatasaray.set('altmış altı','arda')
// Galatasaray.set(9,'falcao')
// Galatasaray.set('sekiz','babel')
// Galatasaray.set(89,'soso')
// Galatasaray.set(31,'mostafa')

// val=Galatasaray
// // Galatasaray.clear()
// Galatasaray.delete('4')
// val=Galatasaray.get(9)
// val=Galatasaray.has(31)
// val=Galatasaray.keys()
// val=Galatasaray.size
// val=Galatasaray.values()
// // val=Galatasaray.entries()
// for (const [a,b] of Galatasaray) {
//     console.log(a+'  '+b )
// }
// for (const item of Galatasaray.values()) {
//     console.log(item)
// }
// for (const item of Galatasaray.keys()) {
//     console.log(item)
// }
// Galatasaray.forEach(function(value,key){
//     console.log(key+ '-' +value)
// })

// console.log(Map.prototype)

// console.log(val)

// let frontCourt=new Map([
//     ['PG', 'Curry'],
//     ['SG','Klay'],
//     ['F','Durant']
    
// ])


// let backCourt=new Map([
//     ['PF', 'Iggy'],
//     ['C','Green']
// ])

// let GSW2017= new Map([...frontCourt,...backCourt])


// console.log(GSW2017)



//                      SETS (Colllection-unique value)
// let val;
// let nflSet=new Set()
// val=nflSet
// nflSet.add('Tom Brady')
// nflSet.add('Patrick Mahommes')
// nflSet.add('Patrick Mahommes')
// nflSet.add('Rob Gronkowski')
// nflSet.add('Travis Kelce')
// nflSet.add({goat:'me',isJoke:'yes'})
// let goat={goat:'Tom Brady',isJoke:'no its real'}
// nflSet.add(goat)
// //nflSet.delete('Rob Gronkowski')
// val=nflSet.has('Patrick Mahommes')
// val=nflSet.size
// for (const item of nflSet) {
//     console.log(item)
// }
// for (const [key,value] of nflSet.entries()) {
//     console.log(key+' '+value)
// }
// console.log(Array.from(nflSet))

// console.log(val)
// console.log(nflSet)
// console.log(Set.prototype)

// let myset1=new Set([1,4,27,45,8,89]) 
// let myset2=new Set([2,4,8,17,27,31,89])
// //          intersect
// //let intersect= Array.from(myset1).filter(i=>myset2.has(i))
// let intersect=new Set( [...myset1].filter(i=>myset2.has(i)))

// //           difference
// let difference=new Set([...myset1].filter(i=>!myset2.has(i)))


// console.log(difference)
// console.log(intersect)



// //                          CLASS
// //       ES5
// let playerES5=function(name,position,yearOfBirth){
//     this.name=name
//     this.position=position
//     this.yearOfBirth=yearOfBirth
// }
// playerES5.prototype.calculateAge=function(){
//     return 2021-this.yearOfBirth
// }

// let Klay= new playerES5('klay','SG',1990)
// console.log(Klay)
// console.log(Klay.calculateAge())

// //        ES6

// class playerES6{
//     constructor(name,position,yearOfBirth){
//         this.name=name
//         this.position=position
//         this.yearOfBirth=yearOfBirth
//     }
//     calculateAge(){
//         return 2021-this.yearOfBirth
//     }
//     static message(){
//         console.log('beni çok da anlayamazlar yazarım çizerim kavrayamazlar')
//     }
// }

// let Curry=new playerES6('Curry','PG',1988)
// //Curry.message() //   statik olduğu için sadece playerES56 objesiyle ulaşılabilir
// playerES6.message()

// console.log(Curry)
// console.log(Curry.calculateAge())

// class mesafe{
//     constructor(x,y){
//         this.x=x
//         this.y=y
//     }
//     static dintance(a,b){
//         const dx=a.x-b.x
//         const dy=a.y-b.y
//         return Math.hypot(dx,dy)
//     }
// }

// let firstPoint= new mesafe(25,48)
// let secondPonint= new mesafe(33,33)

// console.log(mesafe.dintance(firstPoint,secondPonint))

// let personES5=function(firstName,lastName){
//     this.firstName=firstName
//     this.lastName=lastName
// }
// personES5.prototype.sayHi=function(){
//     return `Hi I'm ${this.firstName} ${this.lastName} `
// }

// function customer(firstName,lastName,phone,username){
//     personES5.call(this,firstName,lastName)
//     this.phone=phone
//     this.username=username
// }
// customer.prototype=Object.create(personES5.prototype)
// customer.prototype.constructor=customer

// let jess=new customer('jessie','alopay',5001233564,15871035)

// console.log(jess)
// console.log(jess.sayHi())

// class personES6{
//     constructor(firstName,lastName){
//         this.firstName=firstName
//         this.lastName=lastName
//     }
//     sayHi(){
//         return `hi I'm ${this.firstName} ${this.lastName}      `
//     }
//     static yak(){
//         return `güneş yakar bedenimi cayır cayır ah sarılıp uyurum eski fotoğrafına `
//     }

// }

// class customerES6 extends personES6{
//     constructor(firstName,lastName,phone,username){
//         super(firstName,lastName)
//         this.phone=phone
//         this.username=username
//     }

// }
// let chris=new customerES6('chris','alopay',1285668922,1587121035)
// console.log(chris.sayHi())
// console.log(chris)
// //console.log(jess.yak())// static funtion
// //console.log(chris.yak())// static function
// console.log(personES6.yak())

//                      18.07.2021

function sumES6(...arr){
    let result=0
    arr.forEach(item=>{result+=item} )
    return result
}


console.log(sumES6(15,25,3,42))

let a,b,rest;
// [a,b,...rest]=[15,25,12,32,45,87,95,1]

({a,b,...rest}={a:'jess', b:'chris',c:12,s:25,y:75})
console.log(a)
console.log(typeof a)
console.log(b)
console.log(typeof b)
console.log(rest)
console.log(typeof rest)

// let kelce=['travis',87,'Tight end']

// const[name,number,position]=kelce

// console.log(name)
// console.log(number)
// console.log(position)


let mahommes={
    name:'patrick',
    number:15,
    position:'QB'
}

const{number,name,position,rings=1}=mahommes

console.log(name)
console.log(number)
console.log(position)
console.log(rings)

console.log(Array.prototype)






