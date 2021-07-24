let myObj={
    url:'https://randomuser.me/api/?results=5'
}

let request=obj=>{
return new Promise((resolve,reject)=>{

    let xhr=new XMLHttpRequest()
    xhr.open('GET',obj.url)
    console.log(obj.url)

    if(xhr.headers){
        Object.keys[obj.headers].forEach(key => {
            xhr.setRequestHeader(key,obj.headers[key])
        });
    }
    console.log(1)
      xhr.onload=function(){
        console.log(2)
        if(xhr.status>=200 && xhr.status<300){
            console.log(2)
            resolve(xhr.response)
            
        }else{
            reject(xhr.statusText)
            console.log(3)
        }
        xhr.onerror=()=>{
            reject(xhr.statusText)
        }
       
    }
     xhr.send(obj.body)
    console.log(4)
})
}

request(myObj)
.then(data=>{
    let users=JSON.parse(data)
    let html=''
    console.log( users.results)
    users.results.forEach(item=>{
        console.log(item.name.title)
        html+=`
        <div>
            <img src="${item.picture.medium}">
            <div>${item.name.title} </div>
            <div>${item.name.first} </div>
            <div>${item.name.last} </div>
        </div>
        `
        console.log(html)
    })
    
    document.querySelector('#users').innerHTML=html
    console.log(users.results)
})
.catch(err=>console.log(err))





// let i=document.querySelector('#users')
// console.log(i)
