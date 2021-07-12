const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
// const list= ['item1','item2','item4']
let items
eventListers()

function eventListers() {
    form.addEventListener('submit', addNewItem)
    taskList.addEventListener('click', deleteItem)
    btnDeleteAll.addEventListener('click', deleteAll)
    loadItem()
}


function loadItem() {
    items=getItemsFromLS()
    items.forEach(function (item) {
        createItem(item)
    })
}


// function getItemsLS()
function getItemsFromLS(){
    if(localStorage.getItem('items')== null){
        items=[]
    }else{
        items=JSON.parse(localStorage.getItem('items'))
    }
    return items
}

function setItemToLS(text){
    items=getItemsFromLS()
    items.push(text)
    localStorage.setItem('items', JSON.stringify(items))


}


function createItem(text) {
    const li = document.createElement('li')
    li.className = 'list-group-item list-group-item-secondary'
    const a = document.createElement('a')
    a.setAttribute('href', '#')
    a.className = 'delete-item float-right'
    a.innerHTML = '<i class="fas fa-times"></i>'
    li.appendChild(a)
    taskList.appendChild(li)
    li.appendChild(document.createTextNode(text))

}

function addNewItem(e) {
    if (input.value === '') {
        alert('please add new task ')
    }

    createItem(input.value);
    input.value = ''
    e.preventDefault()

   
}

function deleteItem(e) {

    if (e.target.className == 'fas fa-times') {
        if (confirm('are you sure')) {
            e.target.parentElement.parentElement.remove()
        }
    }

    e.preventDefault()
}

function deleteAll(e) {
    if (confirm('are you sure')) {
        let val = document.querySelectorAll('li')
        for (i = 0; i < val.length; i++) {
            val[i].remove()
        }
    }

    e.preventDefault()
}



