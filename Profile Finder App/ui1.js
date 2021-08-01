class UI {
    constructor() {
        this.profileContainer = document.getElementById('profileContainer')
        this.alert = document.getElementById('alert')
    }

    showUserProfile(profile,img) {
        console.log(img)

        let html = `
    <div class="card card-body">
        <div class="row">
            <div class="col-md-3">
                <a href="https://youtu.be/bC8EmPA6H6g"><img src="${img}"></a>
            </div>
            <div class="col-md-9">
                <h4>Contact</h4>
                <ul class="list-group">
                    <li class="list-group-item">Name:${profile.name} </li>
                    <li class="list-group-item">username:${profile.username} </li>
                    <li class="list-group-item">email:${profile.email} </li>
                    <li class="list-group-item">phone:${profile.phone} </li>
                    <li class="list-group-item">website:${profile.website} </li>
                    <li class="list-group-item">address:
                    street: ${profile.address.street}
                    suite: ${profile.address.suite}
                    zipcode:${profile.address.zipcode}
                    </li>
                </ul>
                <h4 class="mt-4">Todo list</h4>
                <ul id="todo" class="list-group">
        
                <ul>
            </div>
        </div>
    </div>
        `
        this.profileContainer.innerHTML=html
    }

    showTodos(todos){
        let html=''
        console.log(todos)
        todos.forEach(todo => {
            if(todo.completed){
                 html+=` <li class="list-group-item  bg-success">${todo.title} </li>`
            }else{
                html+=` <li class="list-group-item  bg-secondary">${todo.title} </li> `
            }
        });
        this.profileContainer.querySelector('#todo').innerHTML=html

    }


}
