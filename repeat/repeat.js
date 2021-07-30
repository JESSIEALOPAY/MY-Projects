//                   29.07.2021
// // function KC(name,yearOfBirth){
// //     this.name=name
// //     this.yearOfBirth=yearOfBirth
// // }
// // KC.prototype.calculateAge=function(){
// //     return 2021-this.yearOfBirth
// // }

// // function player(name,yearOfBirth,position,number){
// //     KC.call(this,name,yearOfBirth)
// //     this.position=position
// //     this.number=number
// // }
// // player.prototype=Object.create(KC.prototype)
// // player.prototype.constructor=player

// // player.prototype.job=function(){
// //     return `my job is ${this.position} `
// // }

// // let mahomes=new player('patrick',1995,'QB',15)
// // console.log(mahomes)
// // console.log(mahomes.job())
// // console.log(mahomes.calculateAge())


// let es5 = function () {
//     console.log(5)
// }
// let es6 = () => {
//     console.log(6)
// }
// es6()
// es5()

// //                  spread operator

// let arr1 = [1, 5]
// let arr2 = [2, 4, 6]
// let arr = [...arr1, ...arr2]

// console.log(arr)

// let total = (a, b, c) => a + b + c

// console.log
//     (total(...arr2))

// //                   rest parameters
// let sum = (...numbers) => {
//     let result = 0
//     numbers.forEach(item => result += item)
//     return result
// }
// console.log(sum(15, 245, 75, 49))

// function isRetired(limit, ...years) {
//     years.forEach(item => console.log(2021 - item >= limit))

// }
// isRetired(65, 1985, 1956, 1963, 1992)

// //                   destructuring

// let a, b, rest;

// [a, b, ...rest] = [1, 25, 35, 6, 3, 42]
// console.log(a)
// console.log(b)
// console.log(rest)

// const arrConfig = ['localhost','8080','900'];


// // ES6

// // const [server, port, timeout] = arrConfig;

// // console.log(server, port, timeout);

// // Object destructuring

// const objConfig = {

//     port: '8080',
//     server: 'localhost',
//     timeout: 900
// }

// let {burak,chris,jess} = {burak:'crazy',jess:'fallInLove',chris:'polite'}
// console.log(jess,burak,chris)
// const {server, port, timeout} = objConfig

// console.log(server, port, timeout);

// // let {timeout: t} = objConfig;
// // console.log(t);

// // const objConfig = {
// //     server: 'localhost',
// //     port: '8080'
// // }

// // let {server, port, timeout=1000} = objConfig;

// // console.log(server, port, timeout);

// // const days = ['Monday','Tuesday','Wednesday','Thursday','Friday']

// // // const [wed,fri] = days;
// // const [,,wed,fri] = days;  // 2 eleman ötelendi.

// // console.log(wed, fri);

// //                              CLASS
// // class Point {
// //     constructor(x,y){
// //         this.x=x
// //         this.y=y
// //     }
// //     static distance(a,b){
// //         let dx=a.x-b.x
// //         let dy=a.y-b.y
// //         return Math.hypot(dx,dy)

// //     }
// // }

// // let pointA=new Point(20,20)
// // let pointB=new Point(14,12)

// // console.log(Point.distance(pointA,pointB))


// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName
//         this.lastName=lastName
//     }
//     sayHi(){
//         return `hi my name is ${this.firstName} ${this.lastName} `
//     }
// }

// class customer extends Person{
//     constructor(firstName,lastName,number,username){
//         super(firstName,lastName)
//         this.number=number
//         this.username=username
//     }
// }

// let sadBoy=new customer('Jessie','Alopay',052415245,'traitor')
// console.log(sadBoy)
// console.log(sadBoy.sayHi())






//                                30.07.2021
// let xhr = new XMLHttpRequest()

// xhr.open('GET', 'myLove.txt', true)

// xhr.onreadystatechange = function () {
//     console.log(xhr.status)
//     console.log(xhr.readyState)
//     if (xhr.status == 200 && xhr.readyState == 4) {
//         console.log(xhr.responseText)
//     }else{
//         console.log(1)
//     }

// }
// xhr.onprogress=function(){
//     console.log('on progressing')
// }
// xhr.send()

// console.log(5)


document.getElementById('getEmployee').addEventListener('click', onloading)

function onloading() {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'players.json', true)
    xhr.onload = function () {
        if (xhr.status === 200) {
            let html=''
            let players = JSON.parse(xhr.responseText)
            players.forEach(element => {
                html+=
                `
                <tr>
                <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.Number}</td>
                <td>${element.isMVP}</td>
                </tr>
                `
                document.getElementById('players').innerHTML=html
            });
        }
    }



    xhr.send()

}


















