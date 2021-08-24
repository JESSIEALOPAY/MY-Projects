const form = document.getElementById('form')
const input = document.getElementById('input')
const ul = document.getElementById('todos')


form.addEventListener('submit', addNewTodo)
ul.addEventListener('contextmenu',deleteTodo)
ul.addEventListener('click',completedTodo)

getTodosFromLS()

function getTodosFromLS(){
    let todos;
    if(localStorage.getItem('todos')){
        todos=JSON.parse(localStorage.getItem('todos'))
    }else{
        todos=[]
    }
    todos.forEach(li => {
        addTodosFromLS(li.text,li.classList)
    });
}

function addNewTodo(e) {
    let text=input.value
    let html=`<li>${text}</li>`
    ul.innerHTML+=html  
    clearInput()
    uploadLS()
    e.preventDefault()
}

function addTodosFromLS(text,classOfLi){
    let html=`<li class="${classOfLi}">${text}</li>`
    ul.innerHTML+=html 
}

function completedTodo(e){
    e.target.classList.toggle("completed")
    uploadLS()
    e.preventDefault()
}

function deleteTodo(e){
    e.target.remove()
    uploadLS()
    e.preventDefault()
}

function uploadLS(){
    let todos=[]
    document.querySelectorAll('li').forEach(li => {
       todos.push({classList :li.className ,text:li.textContent})
    });
    localStorage.setItem('todos',JSON.stringify(todos))
}

function clearInput(){
    input.value=''
}
































