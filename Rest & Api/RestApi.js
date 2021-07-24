//                            24.07.2021
document.querySelector('#getOne').addEventListener('click', getOne)
document.querySelector('#getAll').addEventListener('click', getALL)
document.querySelector('#Post').addEventListener('click', post)


function getOne() {
    let id = document.querySelector('#postid').value
    console.log(id)
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`
    console.log(url)
    let xhr = new XMLHttpRequest()
    console.log('hi')
    xhr.open('GET', url, true)
    xhr.onload = function () {

        if (this.status === 200) {
            let html = ''
            let post = JSON.parse(this.responseText)
            console.log(post)
            html = `<div class="card mb-2">
                        <div class="card-header">
                        ${post.title} - ${post.id}
                        </div>
                        <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <p> ${post.body}</p>                 
                        </blockquote>
                        </div>
                        </div>`
            console.log(html)
            document.querySelector('#results').innerHTML = html
        }
    }
    document.querySelector('#postid').value = ''
    xhr.send()

}

function getALL() {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    let xhr = new XMLHttpRequest()
    console.log('hi')
    xhr.open('GET', url, true)
    xhr.onload = function () {

        if (this.status === 200) {
            let html = ''
            let posts = JSON.parse(this.responseText)
            posts.forEach(item => {
                html += `<div class="card mb-2">
                        <div class="card-header">
                        ${item.title} - ${item.id}
                        </div>
                        <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <p> ${item.body}</p>                 
                        </blockquote>
                        </div>
                        </div>`
            });
            document.querySelector('#results').innerHTML = html
        }
    }
    xhr.send()
}

function post() {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    const data={
        userId:1,
        title:"new title",
        body:"new body"
    }
    let xhr=new XMLHttpRequest()
    let json=JSON.stringify(data)
    xhr.open('POST',url,true)
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8') // it's important

    xhr.onload=function(){
        console.log(this.status)
        console.log(this.readyState)
        if(this.status===201 && this.readyState===4){
            let post=xhr.responseText
            console.log(post)

        }
    }
    console.log(json)
    
    xhr.send(json)
}



// function post(){
//     const data = {
//         userId : 1,
//         title : "new title",
//         body : "new body"
//     }

//     var json = JSON.stringify(data);
//     var url = "https://jsonplaceholder.typicode.com/posts";
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST',url,true);
//     xhr.setRequestHeader('Content-type','application/json; charset=utf-8');

//     xhr.onload = function(){
//        if(xhr.status === 201 && xhr.readyState ===4){
//            var post = xhr.responseText;
//            console.log(post);
//        }
//     }
//     xhr.send(json);

// }










