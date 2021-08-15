// status	Returns the status-number of a request
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
// For a complete list go to the Http Messages Reference

// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById('btn').addEventListener('click', function () {

    const xhr = new XMLHttpRequest()
    xhr.onprogress=function(){
        console.log(this.readyState)
        console.log(this.responseText)
    }
    xhr.onload = function () { // readyState 4 olduğunda çalışır sadece
        if (this.status == 200) {
            console.log(this.readyState)
            console.log(this.status)
            console.log(this.responseText)
            console.log(this)
            document.getElementById('response').textContent=this.responseText
        }

    }

    // xhr.onreadystatechange=function(){
    //     if(this.status==200 && this.readyState==4){
    //         console.log(this.readyState)
    //         console.log(this.responseText)
    //         console.log(this)
    //     }
    //     console.log(this.status)
    // }


    xhr.open('GET', 'myLove.txt', true)

    xhr.send()



})

document.getElementById('ajax').addEventListener('click',getEmployees)

function getEmployees(){
    const xhr=new XMLHttpRequest()

    xhr.onload=function(){
        if(this.status==200){
            console.log(JSON.parse(this.response))
            let html=''
            let playerList=JSON.parse(this.response)
            playerList.forEach(element => {
                html+=`
                <tr class="table-dark">
                    <td class="table-dark">${element.id}</td>
                    <td class="table-dark">${element.title}</td>
                    <td class="table-dark">${element.userId}</td>
                </tr>
                `
            });  
            document.querySelector('#playerList').innerHTML=html
        }

    }


    xhr.open('GET','https://jsonplaceholder.typicode.com/albums?userId=3',true)
    xhr.send()
}

document.getElementById('ajax').addEventListener('click',getEmployees)

function getEmployees(){
    const xhr=new XMLHttpRequest()

    xhr.onload=function(){
        if(this.status==200){
            console.log(JSON.parse(this.response))
            let html=''
            let playerList=JSON.parse(this.response)
            playerList.forEach(element => {
                html+=`
                <tr class="table-dark">
                    <td class="table-dark">${element.name}</td>
                    <td class="table-dark">${element.position}</td>
                    <td class="table-dark">${element.salary}</td>
                </tr>
                `
            });  
            document.querySelector('#playerList').innerHTML=html
        }

    }


    xhr.open('GET','cimbom.json',true)
    xhr.send()


}

//           CALLBACK  SENKRON

function one(callback){
    setTimeout(() => {
        console.log(1)
        callback()
    }, 2000);
}
function two(){
    setTimeout(() => {
      console.log(2)  
    }, 1000);

}

one(two)



class Request {
    constructor() {
        this.xhr = new XMLHttpRequest()
    }

    get(url, callback) {
        this.xhr.open('GET', url)

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText)
            } else {
                callback('Get Requrest: why do you do stupid thiks?', null)
            }
        }
        this.xhr.send()
    }
    post(url, data, callback) {
        this.xhr.open('POST', url)
        this.xhr.setRequestHeader("Content-type", "application/json")
        this.xhr.onload = () => {
            if (this.xhr.status == 201) {
                callback(null, this.xhr.responseText)
            } else {
                callback('Post Request: why do you do stupid thiks?')
            }

        }
        this.xhr.send(JSON.stringify(data))
    }
    put(url, data, callback) {
        this.xhr.open('PUT', url)
        this.xhr.setRequestHeader('Content-type', 'application/json')
        this.xhr.onload = () => {
            if (this.xhr.status == 200) {
                callback(null, this.xhr.responseText)
            } else {
                callback('Put Request: wy do you do stupid thins')
            }

        }
        this.xhr.send(JSON.stringify(data))
    }
    delete(url,callback){
        this.xhr.open('DELETE',url)

        this.xhr.onload=()=>{
            if(this.xhr.status==200){
                callback('delete request has been successed')
            }else{
                callback('again error from delete request',null)
            }
        }

        this.xhr.send()


    }
}



const request = new Request()


request.get('https://jsonplaceholder.typicode.com/posts/5', viewResponse)
request.post('https://jsonplaceholder.typicode.com/albums',{userId:3,title:'Burak'},viewResponse)
request.put('https://jsonplaceholder.typicode.com/albums/15', { userId: 3, title: 'Burak' }, viewResponse)
request.delete('https://jsonplaceholder.typicode.com/albums/15', viewResponse)




function viewResponse(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}




































