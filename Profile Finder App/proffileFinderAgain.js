const input = document.getElementById('searchProfile')
input.addEventListener('keyup', getApi)





async function getApi(e) {
  
  const url = 'https://jsonplaceholder.typicode.com/users?username='
  let response = await fetch(url + input.value)
  let data = await response.json()

  if (data[0]) {
    UIuser(data[0])
    GetToDoList(data[0].id)
  }

  e.preventDefault()
}

function UIuser(data) {
  console.log(data)
  let html = `
    <div class="card" style="width: 18rem; display: inline;">
    <img src="img/15.jpg" class="card-img-top" >
    <div class="card-body">
      <h5 class="card-title">${data.username}</h5>
      <ul class="list-group">
        <li class="list-group-item">Name:  ${data.name}</li>
        <li class="list-group-item">ID:  ${data.id}</li>
        <li class="list-group-item">Email :${data.email} </li>
        <li class="list-group-item">Phone: ${data.phone} </li>
        <li class="list-group-item">Website: ${data.website}</li>
        <li class="list-group-item">Address:${data.address.city} ${data.address.street} ${data.address.suite} </li>
      </ul>    
    </div>
  </div>
    `

  document.getElementById('profileContainer').innerHTML = html

}

async function GetToDoList(id) {
  const todoURL = 'https://jsonplaceholder.typicode.com/todos?userId='
  let response= await fetch(todoURL+id)
  let todoList=await response.json()
  console.log(todoList[2].comleted)
  let html=''
  todoList.forEach(task => {
    console.log(task.completed)
    if(task.completed){
      html+=` 
            <li class="list-group-item list-group-item-success">${task.title}</li>
      `
    }else{
      html+=`
      <li class="list-group-item list-group-item-danger">${task.title}</li>
      `
    }
  });
  document.getElementById('TodoList').innerHTML=html
}














