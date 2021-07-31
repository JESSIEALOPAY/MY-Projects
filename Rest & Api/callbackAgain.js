// let players=[
//     {id:1,name:'muslera',age:33},
//     {id:2,name:'marcao',age:24},
//     {id:3,name:'kerem',age:22}
// ]

// let added=false
// function addPlayers(player,callback){
//     if(added){
//          setTimeout(() => {
//         players.push(player)
        
//     callback(null,player)
//     }, 2000);
//     }else{
//         callback(500)
//     }
   
// }

// function getPlayers(){
//     setTimeout(() => {
//         players.forEach(item=>console.log(item.name))
        
//     }, 1000);
// }

// addPlayers({id:4,name:'mostafa',age:25},(err,data)=>{
//     if(err){
//         console.log('hata: '+err)
//     }else{
//         console.log(data)
//     }
// })





//                             promise
// let players=[
//     {id:1,name:'muslera',age:33},
//     {id:2,name:'marcao',age:24},
//     {id:3,name:'kerem',age:22}
// ]


// function addPlayers(player){
//     return new Promise(function(resolve,reject){
//          let added=true
//          players.push(player)
//          if(added){
//             resolve()
//          }else{
//             reject('hata: 500')
//          }
//     })   
// }

// function getPlayers(){
//     players.forEach(item=>console.log(item.name))     
// }

// addPlayers({id:4,name:'mostafa',age:25}).then(getPlayers).catch(function(err){
//     console.log(err)
// })

// let isMomHappy=true

// let willGetNewPhone= new Promise((resolve,reject)=>{
//     if(isMomHappy){
//         let phone={name:'Samsung S21',price:8000,color:'black'}
//         resolve(phone)
//     }else{
//         reject('you should try to make your mom happy ')
//     }

// })

// function showToFriend(phone){
//     let message=`hey look at my phone. it's ${phone.name}`
//     return Promise.resolve(message)
// }


// askMom()

// function askMom(){
//     willGetNewPhone.then(showToFriend).then(msg=>console.log(msg)).catch(suggest=>console.log(suggest))

// }

// new Promise((resolve, reject) => {
//     resolve(11)
// }).then(x=>x*x).then(y=>y+y).then(result=>console.log(result))





// let myObj={
//     url:'https://randomuser.me/api/?results=5'
// }

// function request(obj){
//     return new Promise((resolve,reject)=>{

    
//         let xhr=new XMLHttpRequest()
//         xhr.open('GET',obj.url,true)
//         xhr.onload=function(){
//             console.log(this.status)
//             if(this.status==200){
//                 resolve(this.response)
//             }else{
//                 reject(this.statusText)
//             }
//             console.log(JSON.parse(this.responseText))
            
//         }
//         xhr.send()
//     })

// }

// function getUsers(data){
//     let users=JSON.parse(data)
//     return Promise.resolve(users.results)
// }
// function addHtml(users){
//     let html=''
//     users.forEach(user => {
//         html+=`
//         <div>
//             <img src="${user.picture.medium}" >
//             <div>
//                 ${user.name.title}
//                 ${user.name.first}
//                 ${user.name.last}
//             </div>
//         </div>
//         `
        
//         console.log(user)
//     });
//     document.getElementById('users').innerHTML=html
// }

// request(myObj).then(getUsers).then(addHtml).catch(msg=>console.log('hata: '+msg))
































