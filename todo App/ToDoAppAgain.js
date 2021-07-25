const taskList = document.querySelector('#task-list')
const input = document.querySelector('#txtTaskName')
const form = document.querySelector('.addTaskForm')
const btnDeleteAll = document.querySelector('#btnDeleteAll')



// eventListeners()
// function eventListeners(){
//     form.addEventListener('submit',addNewTask)
//     btnDeleteAll.addEventListener('click',deleteAll)
//     taskList.addEventListener('click',deleteItem)

// }



class addOrDelete {

    static addNewTask(e) {
        if (input.value === '') {
            const alert = `
        <div class="alert alert-warning">
        please type a task
        </div> `
            document.querySelector('.card.mt-3').insertAdjacentHTML('beforebegin', alert)
            setTimeout(() => {
                document.querySelectorAll('.alert').forEach((item) => item.remove())
            }, 2000);
        } else {
            let text = input.value
            input.value = ''
            console.log(text)
            addOrDelete.create(text)
            Storage.setItem(text)
        }
        e.preventDefault()
    }
    static create(text) {
        let li = document.createElement('li')
        li.classList = 'list-group-item list-group-item-secondary'
        let a = document.createElement('a')
        a.setAttribute('href', '#')
        a.classList = 'delete-item float-right'
        a.innerHTML = '<i class="fas fa-times"></i>'
        li.appendChild(a)
        li.appendChild(document.createTextNode(text))
        taskList.appendChild(li)
    }
    static deleteAll(e) {
        document.querySelectorAll('li').forEach(item => {
            item.remove()
        });
        localStorage.clear()
        e.preventDefault()
    }
    static deleteItem(e) {
        if (e.target.className === 'fas fa-times') {
            e.target.parentElement.parentElement.remove()
            Storage.deleteItem(e.target.parentElement.parentElement.textContent)
        }

        e.preventDefault()
    }

}

class Storage {
    static getItem() {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = []
        }else{
            tasks=JSON.parse(localStorage.getItem('tasks') )
        }
        return tasks
    }
    static setItem(text){
        let tasks;
        tasks=Storage.getItem()
        tasks.push(text)
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
    static deleteItem(text){

        let tasks=Storage.getItem()
        let index=tasks.indexOf(text)
        tasks.splice(index,1)
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }

}
let arr=[1,2,5,6,8]
arr.indexOf


eventListeners()
function eventListeners() {
    form.addEventListener('submit', addOrDelete.addNewTask)
    btnDeleteAll.addEventListener('click', addOrDelete.deleteAll)
    taskList.addEventListener('click', addOrDelete.deleteItem)

}


display()
function display(){
    let tasks=Storage.getItem()
    tasks.forEach(item=>addOrDelete.create(item))
}








































// function create(text){
//     let li=document.createElement('li')
//     li.classList='list-group-item list-group-item-secondary'
//     let a=document.createElement('a')
//     a.setAttribute('href','#')
//     a.classList='delete-item float-right'
//     a.innerHTML='<i class="fas fa-times"></i>'
//     li.appendChild(a)
//     li.appendChild(document.createTextNode(text))
//     taskList.appendChild(li)

//     console.log(li)
// }


// function addNewTask(e){
//     if(input.value===''){
//         const alert = `
//     <div class="alert alert-warning">
//     please type a task
//     </div> `
//     document.querySelector('.card.mt-3').insertAdjacentHTML('beforebegin', alert)
//     setTimeout(() => {
//         document.querySelectorAll('.alert').forEach((item)=>item.remove())
//     }, 2000);
//     }else{
//     let text=input.value
//     input.value=''
//     console.log(text)
//     create(text)
//     }
//     e.preventDefault()
// }

// function deleteAll(e){
//     document.querySelectorAll('li').forEach(item => {
//         item.remove()
//     });
//     e.preventDefault()
// }

// function deleteItem(e){
//     if(e.target.className==='fas fa-times'){
//         e.target.parentElement.parentElement.remove()
//     }

//     e.preventDefault()
// }
















// const form=document.querySelector('.addTaskForm')
// const input=document.querySelector('#txtTaskName')
// const deleteAll=document.querySelector('#btnDeleteAll')
// // const deleteItem= document.querySelectorAll('.fas.fa-times')
// const ul= document.querySelector('#task-list')
// // let mine=['first', 'second','third']
// // localStorage.setItem('items',JSON.stringify(mine))




// eventListeners()
// function eventListeners(){
//     form.addEventListener('submit',addNewItem)

// }

// function addNewItem(){

//     console.log('hi')
//     let text=input.value
//     createItem(text)
//     input.value=''
// }



// function createItem(text){
//     const li=document.createElement('li')
//     li.classList='list-group-item list-group-item-secondary'
//     const a=document.createElement('a')
//     a.setAttribute('href','#')
//     a.classList='delete-item float-right'
//     a.innerHTML='<i class="fas fa-times"></i>'
//     li.appendChild(a)
//     li.appendChild(document.createTextNode(text))
//     ul.appendChild(li)
// }


































