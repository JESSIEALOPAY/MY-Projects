// function sayHello(msg){

//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//            if(typeof msg!=='string'){
//                reject(Error('congratulations you have a error'))
//            } else{
//             resolve(msg)       
//            }
//         }, 3000);
//     })
// }

// sayHello('Hi Jessie, i am burak  actually i am consist of my love to you')
// .then(res=> res+'I wanted you to say I love you burak I love you too like you did')
// .then(myWords=>console.log(myWords))
// .catch(err=>console.log(err))
// //'I wanted you to say I love you burak I love you too like you did'



//                            fetch

// class Fetch {

//     get(url) {
//         fetch(url)
//         .then(response=>response.json())
//         .then(data=>console.log(data))
//     }
//     post(url,data){
//         fetch(url,{
//             method:'POST',
//             body:data,
//             headers:{"Content-type":"application/json; charset=UTF-8"}
//         }).then(res=>res.json())
//         .then(data=>console.log(data))
//         .catch(err=>console.log(err))
//     }
// }

// let fetchApi=new Fetch()
// fetchApi.get('https://jsonplaceholder.typicode.com/users')

// fetchApi.post('https://jsonplaceholder.typicode.com/users',JSON.stringify({address: {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {lat: "-37.3159"
// ,lng: "81.1496"}}
// ,company: {name: "Roaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"}
// ,email: "Sincere@april.biz"
// ,name: "Leanne Graham"
// ,phone: "1-770-736-8031 x56442"
// ,username: "Bret"
// ,website: "hildegard.org"}))

// async function burak(){
//     let res=await fetch('https://jsonplaceholder.typicode.com/users')
//     let data=await res.json()
//     console.log(data)
// }
// burak()

// class Url{
//     constructor(url){
//         this.url=url
//     }
//     async getApi(){
//         let res= await fetch(this.url)
//         let data=await res.json()
//         return data
//     }
// }

// async function viewData(){
//     let api=new Url('https://jsonplaceholder.typicode.com/users')
//     let data = await api.getApi()
//     console.log(data)
// }
// viewData()
























