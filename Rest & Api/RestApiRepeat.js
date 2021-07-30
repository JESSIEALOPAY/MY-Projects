document.getElementById('getAll').addEventListener('click',getAll)
document.getElementById('getOne').addEventListener('click',getOne)
document.getElementById('Post').addEventListener('click',post)

function getAll(){
    const xhr=new XMLHttpRequest()
    let url='https://jsonplaceholder.typicode.com/posts'
    xhr.open('GET',url,true)

    xhr.onload=function(){
        let html=''
        if(this.status==200){
            let posts=JSON.parse(this.responseText)
            console.log(posts)
            posts.forEach(element => {
                 html+=
            `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header">User ID:${element.userId} id:${element.id}</div>
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.body}</p>
                </div>
            </div> `
            });
            document.getElementById('results').innerHTML=html    
        }
    }
    xhr.send()

}

function getOne(){
    const xhr=new XMLHttpRequest()
    let input=document.getElementById('postid').value
    let url='https://jsonplaceholder.typicode.com/posts/'+input
    document.getElementById('postid').value=''
    xhr.open('GET',url,true)

    xhr.onload=function(){
        let html=''
        if(this.status==200){
            let post=JSON.parse(this.responseText) 
            html+=
            `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header">User ID:${post.userId} id:${post.id}</div>
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                </div>
            </div> `
            document.getElementById('results').innerHTML=html   
        }

    }
    xhr.send()
}

function post(){
    let data={
        userId:3,
        title:'NBA Draft 2021',
        body:'Alperen Sengun selected 16th from Houston Rockets '
    }
    let json= JSON.stringify(data)
    let xhr=new XMLHttpRequest()
    let url='https://jsonplaceholder.typicode.com/posts'
    xhr.open('POST',url,true)
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8')
    
    xhr.onload=function(){
        console.log(this.status)
        if(this.status==201){
            console.log(this.responseText)
        }

    }
    xhr.send(json)
}


