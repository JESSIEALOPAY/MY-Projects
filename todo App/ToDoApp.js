const form=document.querySelector('.addTaskForm')
const input=document.querySelector('#txtTaskName')
const deleteAll=document.querySelector('#btnDeleteAll')
// const deleteItem= document.querySelectorAll('.fas.fa-times')
const ul= document.querySelector('#task-list')
// let mine=['first', 'second','third']
// localStorage.setItem('items',JSON.stringify(mine))
let items
loadItems()


eventListeners()
function eventListeners(){
    form.addEventListener('submit',addNewItem)
    deleteAll.addEventListener('click',btnDeleteItemAll)
    ul.addEventListener('click',btnDeleteItem)
    
}


function addNewItem(){
    let text;
    console.log('hi')
    text=input.value
    createItem(text)
    setItemToLS(text)
    input.value=''
}



function createItem(text){
    const li=document.createElement('li')
    li.classList='list-group-item list-group-item-secondary'
    const a=document.createElement('a')
    a.setAttribute('href','#')
    a.classList='delete-item float-right'
    a.innerHTML='<i class="fas fa-times"></i>'
    li.appendChild(a)
    li.appendChild(document.createTextNode(text))
    ul.appendChild(li)
    getItemFromLS(text)


}

function btnDeleteItemAll(e){
    document.querySelectorAll('li').forEach(function(item){
        item.remove()
    })
    localStorage.clear()
    e.preventDefault()
}


function btnDeleteItem(e){
    console.log(e.target)
    if(e.target.classList=='fas fa-times')
    e.target.parentElement.parentElement.remove()
    console.log(e.target.parentElement.parentElement.textContent)
    deleteItemFromLS(e.target.parentElement.parentElement.textContent)
    e.preventDefault()    
}

function loadItems(){
    items=getItemFromLS()
    items.forEach(function(item){
        createItem(item)
    })
}



function getItemFromLS(text){
    
    if(localStorage.getItem('items')===null){
        items=[]
    }else{
        
    items= JSON.parse(localStorage.getItem('items'))
    }
    return items
 }

function setItemToLS(text){
    items=getItemFromLS()
    items.push(text)
    localStorage.setItem('items',JSON.stringify(items))


}

function deleteItemFromLS(text){
    items=getItemFromLS()
    let index= items.indexOf(text)
    items.splice(index,1)
    localStorage.setItem('items',JSON.stringify(items))
    console.log(index)

}
 















// const form = document.querySelector('.addTaskForm')
// const input = document.querySelector('#txtTaskName')
// const btnDeleteAll = document.querySelector('#btnDeleteAll')
// const ul = document.querySelector('#task-list')

// // const myList = ['first', 'second', 'third']
// // localStorage.setItem('items', JSON.stringify(myList))


// // myList.forEach(function(item){
// //     createItem(item)
// // })

// function getItemFromLS() {
//     let getItems;
//     getItems = JSON.parse(localStorage.getItem('items'))
//     // if ( getItems=== null) {
//     //     getItems = []
//     console.log(getItems)
   
//     return getItems
// }
// createGetItem()
// function createGetItem(){
//     let getItems;
//     getItems = JSON.parse(localStorage.getItem('items'))
//     if ( getItems=== null) {
//         getItems = []
//     } else {
//         console.log(getItems)
//         getItems.forEach(function (item) {
//             createItem(item)
//         }
//         )
//     }
// }
// console.log(getItemFromLS())
// // function createGetItem(){
// //     if (getItems === null) {
// //         getItems = []
// //     } else {
// //         console.log(getItems)
// //         getItems.forEach(function (item) {
// //             createItem(item)
// //         }
// //         )
// //     }
// // }


// eventListeners()

// function eventListeners() {
//     form.addEventListener('submit', newItem)
//     btnDeleteAll.addEventListener('click', deleteAll)
//     ul.addEventListener('click', deleteItem)

// }
// console.log(input)

// function newItem(e) {
//     let text = input.value
//     createItem(text)
//     setItemToLS(text)
//     input.value = ''
//     e.preventDefault()
// }



// function createItem(text) {
//     const li = document.createElement('li')
//     li.classList = 'list-group-item list-group-item-secondary'
//     const a = document.createElement('a')
//     a.setAttribute('href', '#')
//     a.classList = 'delete-item float-right'
//     a.innerHTML = '<i class="fas fa-times"></i>'
//     li.appendChild(a)
//     li.appendChild(document.createTextNode(text))
//     ul.appendChild(li)

// }


// function deleteAll(e) {
//     const list = document.querySelectorAll('li')
//     list.forEach(function (item) {
//         item.remove()
//     })
//     e.preventDefault()

// }


// function deleteItem(e) {
//     let click = e.target
//     if (click.className == 'fas fa-times') {
//         click.parentElement.parentElement.remove()
//         console.log(click.parentElement.parentElement.textContent)
//         deleteItemFromLS(click.parentElement.parentElement.textContent)
//     }
//     e.preventDefault()
// }



// function setItemToLS(text) {
//     let items = getItemFromLS()
//     if(items===null){
      
//    const myList = ['first', 'second', 'third']
// localStorage.setItem('items', JSON.stringify(myList))
//     }else{
//         items.push(text)
//     localStorage.setItem('items',JSON.stringify(items))
//     }
//     console.log(items)
  

// }

// function deleteItemFromLS(text){
//     let items=getItemFromLS()
//     console.log(items)
//     items.forEach(function(item,index){
//         if(text==item){
//             console.log('hi',index)
            
            
//         }
//     })
//     localStorage.setItem('items',items)
// }























// const form = document.querySelector('.addTaskForm')
// const input = document.querySelector('#txtTaskName')
// const deleteAll = document.querySelector('#btnDeleteAll')
// const ul = document.querySelector('#task-list')

// getItemFromLS().forEach(function (i) {
//     createItem(i)
// })


// eventListeners()


// function eventListeners() {
//     form.addEventListener('submit', NewItem)
//     ul.addEventListener('click', deleteItem)
//     deleteAll.addEventListener('click', deleteItemAll)



// }


// function NewItem(e) {

//     let text = input.value
//     createItem(text)
//     input.value = ''
//     e.preventDefault()
// }

// function createItem(text) {
//     const li = document.createElement('li')
//     li.className = 'list-group-item list-group-item-secondary'
//     const a = document.createElement('a')
//     a.setAttribute('href', '#')
//     a.className = 'delete-item float-right'
//     a.innerHTML = '<i class="fas fa-times"></i>'
//     li.appendChild(a)
//     ul.appendChild(li)
//     li.appendChild(document.createTextNode(text))
//     items = getItemFromLS()
//     items.push(text)


//     localStorage.setItem('items', JSON.stringify(items))
// }

// function deleteItem(e) {
//     if (e.target.className == 'fas fa-times') {

//         console.log(e.target.parentElement.parentElement)
//         e.target.parentElement.parentElement.remove()

//         items = getItemFromLS()
//         items.forEach(function (i, index) {
//             if (i == e.target.parentElement.parentElement.textContent) {
//                 items.splice(index, 1)
//                 console.log(items)
//                 localStorage.setItem('items', JSON.stringify(items))
//             }
//         })

//     }


//     console.log(items)

//     console.log(e.target.parentElement)
//     e.preventDefault()
// }


// function deleteItemAll(e) {
//     const list = document.querySelectorAll('li')
//     for (i = 0; i < list.length; i++) {
//         list[i].remove()
//     }
//     e.preventDefault()
// }


// function getItemFromLS() {
//     if (localStorage.getItem('items') == null) {
//         items = []
//     } else {
//         items = JSON.parse(localStorage.getItem('items'))


//         // for(i=0;i<items.length;i++){
//         //     createItem(items[i])
//         // }
//     }

//     return items
// }
// // deleteItemFromLS()
// // function deleteItemFromLS(){
// //     items=getItemFromLS()
// //     items.forEach(function(i){
// //         if(i==)
// //     })
// //     console.log(items)
// // }




// // getItemFromLS().forEach(function(i){
// //     createItem(i)
// // })
// // console.log(document.querySelector('li').textContent)











































































// const form = document.querySelector('form');
// const input = document.querySelector('#txtTaskName');
// const btnDeleteAll = document.querySelector('#btnDeleteAll');
// const taskList = document.querySelector('#task-list');
// const list= ['item1','item2','item4']

// eventListeners()

// function eventListeners(){
//     form.addEventListener('submit',addNewItem)
//     taskList.addEventListener('click',deleteItem)
//     btnDeleteAll.addEventListener('click',deleteAll)
// }
// function createItem(text){
//     const li= document.createElement('li')
//     li.classList='list-group-item list-group-item-secondary'
//     const a=document.createElement('a')
//     a.classList='delete-item float-right'
//     a.setAttribute('href','#')
//     a.innerHTML=' <i class="fas fa-times"></i>'
//     li.appendChild(a)
//     taskList.appendChild(li)
//     li.appendChild(document.createTextNode(text))
// }

// function addNewItem(e){
//     if(input.value==''){
//         alert('please add item')
//     }else{
//    let text=input.value
//     createItem(text)
//     input.value=''
//     }   


//     e.preventDefault()
// }


// function deleteItem(e){
//     if(e.target.className==='fas fa-times'){
//         e.target.parentElement.parentElement.remove()
//     }



//     e.preventDefault()
// }

// function deleteAll(e){

//     if(confirm('r u sure')){
//     let val=document.querySelectorAll('li')
//     for(i=0;i<val.length;i++){
//         val[i].remove()
//     }
//     }

//     e.preventDefault()
// }

// const form = document.querySelector('form');
// const input = document.querySelector('#txtTaskName');
// const btnDeleteAll = document.querySelector('#btnDeleteAll');
// const taskList = document.querySelector('#task-list');
// // const items= ['item1','item2','item4']
// let items

// eventListeners()
// loadItems()

// function eventListeners() {
//     form.addEventListener('submit', addNewItem)
//     taskList.addEventListener('click', deleteItem)
//     btnDeleteAll.addEventListener('click', deleteAll)

// }

// function loadItems() {
//     items = getItemFromLS()
//     items.forEach(function (item) {
//         createItem(item)
//     })

// }

// // function getItemFromLS
// function getItemFromLS() {
//     if (localStorage.getItem('items') === null) {
//         items = []
//     } else {
//         items = JSON.parse(localStorage.getItem('items'))

//     }
//     return items
// }

// // set item to local storage
// function setItemLS(text){
//     items=getItemFromLS()
//     items.push(text)
//     localStorage.setItem('items',JSON.stringify(items))


// }


// function createItem(text) {
//     const li = document.createElement('li')
//     li.classList = 'list-group-item list-group-item-secondary'
//     const a = document.createElement('a')
//     a.classList = 'delete-item float-right'
//     a.setAttribute('href', '#')
//     a.innerHTML = ' <i class="fas fa-times"></i>'
//     li.appendChild(a)
//     taskList.appendChild(li)
//     li.appendChild(document.createTextNode(text))
// }

// function addNewItem(e) {
//     if (input.value == '') {
//         alert('please add item')
//     }

//     createItem(input.value)
//     setItemLS(input.value)
//     input.value = ''



//     e.preventDefault()
// }


// function deleteItem(e) {
//     if (e.target.className === 'fas fa-times') {
//         e.target.parentElement.parentElement.remove()
//         deleteItemFromLS(e.target.parentElement.parentElement.textContent)

//     }

//     e.preventDefault()
// }

// function deleteItemFromLS(text){
//     items=getItemFromLS()
//     console.log(items)
//     items.forEach(function(item,index){
//         console.log(item)
//         console.log(index)
//         console.log(text)
//         if(text==' '+item){
//             items.splice(index,1)
//             console.log(items)
//         }

//         }
//     )
//     localStorage.setItem('items',JSON.stringify(items))

// }



// function deleteAll(e) {

//     if (confirm('r u sure')) {
//         let val = document.querySelectorAll('li')
//         for (i = 0; i < val.length; i++) {
//             val[i].remove()
//         }
//         localStorage.clear()
//     }

//     e.preventDefault()
// }







