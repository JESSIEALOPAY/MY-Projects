import { Requests } from "./requests";
import { UI } from "./UI";

const request= new Requests('http://localhost:3000/employees')
const ui= new UI()

const form=document.getElementById('employee-form')
const employeeList=document.getElementById('employees')
const updateBtn=document.getElementById('update')
const cancelBtn=document.getElementById('cancel')
const nameInput=document.getElementById('name')
const departmentInput=document.getElementById('department')
const salaryInput=document.getElementById('salary')


eventListeners()

function eventListeners(){
    document.addEventListener('DOMContentLoaded',getAllEmployees)
    form.addEventListener('submit',addEmployee)
    employeeList.addEventListener('click',updateOrDelete)
    updateBtn.addEventListener('click',updateBtnClick)
    cancelBtn.addEventListener('click',cancelBtnClick)

}

function getAllEmployees(){
    request.get()
    .then(data=>{
        ui.showAllEmployees(data)
        
    })
    .catch(err=>console.log(err))
}

function addEmployee(e){
    let name= nameInput.value.trim()
    let department= departmentInput.value.trim()
    let salary= salaryInput.value.trim()

    request.post({name:name,department:department,salary:Number(salary)})
    .then(employee=>ui.addEmployee(employee))
    .catch(err=>console.log(err))

    ui.clearInputs()
    e.preventDefault()
}

function updateOrDelete(e){
    if(e.target.id=='update-employee'){
        updateButton(e.target.parentElement.parentElement)
    }else if(e.target.id=='delete-employee'){
        deleteBtn(e.target)
    }
    e.preventDefault()
}

function deleteBtn(element){
    let id=element.parentElement.previousElementSibling.previousElementSibling.textContent
    ui.delete(element.parentElement.parentElement)
    request.delete(id)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))


}

function updateButton(element){
    element.classList='table-primary'
    ui.updateButton(element)
}

function updateBtnClick(e){
    let element=document.querySelector('.table-primary')
    let id=Number(element.children[3].textContent)
    let name= nameInput.value.trim()
    let department= departmentInput.value.trim()
    let salary= salaryInput.value.trim()

    request.put(id,{name:name,department:department,salary:Number(salary)})
    .then(data=>ui.updateBtnClick(element,data))

    ui.hiddenUpdateClicks()
    e.preventDefault()
}

function cancelBtnClick(e){
    ui.clearInputs()
    ui.hiddenUpdateClicks()
    document.querySelector('.table-primary').classList=''
    e.preventDefault()
}





// request.get()
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

// request.post({name:"Tyreek Hill",department:"WR",
// salary: 15000}).then(res=>console.log(res))

// request.put(3,{name:"Tom Brady",department:"QB",
// salary: 35000}).then(res=>console.log(res))

// request.delete(5).then(res=>console.log(res))





























