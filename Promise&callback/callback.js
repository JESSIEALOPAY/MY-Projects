//                                 24.07.2021
// let players= [
//     {id:1,name:'muslera',transferMarkt:6.75},
//     {id:2,name:'marcao',transferMarkt:12},
//     {id:3,name:'aanholt',transferMarkt:7}
// ]

// let added=true

// function transfer(player,callback){
//     if(added){
//        setTimeout(() => {
//     players.push(player)
//     callback(null,player)
//     }, 2000);
//     }else{
//         callback(500,player)
//     }


// }
// function getPlayers(){

//     setTimeout(() => {
//         players.forEach(item => {
//             console.log(item.name)
//         });
//     }, 1000);

// }



// // transfer({id:4,name:'mostafa',transferMarkt:6.50})
// // getPlayers()

// // transfer({id:4,name:'mostafa',transferMarkt:6.50},getPlayers)
// transfer({id:4,name:'mostafa',transferMarkt:6.50},function(err,data){
//     if(err){
//         console.log('hata: '+err )
//     }else{
//         console.log(data)
//     }

// })

//                              Promise

// let players = [
//     { id: 1, name: 'muslera', transferMarkt: 6.75 },
//     { id: 2, name: 'marcao', transferMarkt: 12 },
//     { id: 3, name: 'aanholt', transferMarkt: 7 }
// ]

// function transfer(player) {
//     return new Promise(function (resolve, reject) {
        
//         setTimeout(() => {
//             players.push(player)
//             let added = false
//             if (added) {
//                 resolve()
//             } else {
//                 reject('hata: 500')
//             }
//         }, 1000);

//     })
// }
// function getPlayers() {

//     setTimeout(() => {
//         players.forEach(item => {
//             console.log(item.name)
//         });
//     }, 1000);

// }

// transfer({ id: 4, name: 'mostafa', transferMarkt: 6.50 }).then(getPlayers).catch(function(err){
//     console.log(err)
// })

// let p= new Promise((resolve,reject)=>{
//     if(false){
//         resolve('success')
//     }else{
//         reject('failure')
//     }
// })
// p.then(msg=>console.log(msg)).catch(msg=>console.log(msg))


// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(6)
//     }, 1000);
// }).then(num=>{console.log(num)
//     return num*num
// }).then(num=>{console.log(num)
//     return num*num
// }).then(num=>console.log(num))


// const isMomHappy=true

// const willGetNewPhone= new Promise((resolve,reject)=>{

//     if(isMomHappy){
//         let phone={
//             name:'Samsung S9',
//             price:5000,
//             color:'Black'
//         }
//         resolve(phone)
//     }else{
//         let err=new Error('mom is not happy')
//         reject(err)
//     }
// })

// let showToFriend=(phone)=>{
//     //console.log('this is my phone '+phone.name)
//     let message= 'Hey I bought a new phone '+phone.name
//     return Promise.resolve(message)
// }

// let askMom=()=>{
    
//     willGetNewPhone.then(showToFriend).then(msg=>console.log(msg)).catch(err=>console.log(err))
//    // willGetNewPhone.then(tel=>console.log(tel)).catch(err=>console.log(err))
// }

// askMom()




//                               Promise & xhr
let myObj={
    url:'https://randomuser.me/api/?results=5'
}

// let request=obj=>{
// return new Promise((resolve,reject)=>{

//     let xhr=new XMLHttpRequest()
//     xhr.open('GET',obj.url)
//     console.log(obj.url)

//     // if(xhr.headers){
//     //     Object.keys[obj.headers].forEach(key => {
//     //         xhr.setRequestHeader(key,obj.headers[key])
//     //     });
//     // }
//     console.log(1)
//       xhr.onload=function(){
//         console.log(2)
//         if(xhr.status>=200 && xhr.status<300){
//             console.log(2)
//             resolve(xhr.response)
            
//         }else{
//             reject(xhr.statusText)
//             console.log(3)
//         }
//         xhr.onerror=()=>{
//             reject(xhr.statusText)
//         }
//         xhr.send(obj.body)
//     }
// })
// }

// request(myObj)
// .then(data=>{
//     let users=JSON.parse(data)
//     console.log(data.results)
// })
// .catch(err=>console.log(err))





//          promise.js teki bir sorunu anlamak için yapmıştım
// let xhr=new XMLHttpRequest()

// xhr.open('GET','https://randomuser.me/api/?results=5',true)

// xhr.onload=function(){
//     let users=JSON.parse(xhr.response)
    
//     console.log(users.results)
// }

// xhr.send()














