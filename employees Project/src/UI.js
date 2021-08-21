export class UI{
    constructor(){
        this.employeeList=document.getElementById('employees')
        this.updateBtn=document.getElementById('update')
        this.nameInput=document.getElementById('name')
        this.departmentInput=document.getElementById('department')
        this.salaryInput=document.getElementById('salary')
        this.cancelBtn=document.getElementById('cancel')
    }
    showAllEmployees(data){
        let html=''
        data.forEach(element => {
            html+=`
            <tr>                                        
                <td>${element.name}</td>
                <td>${element.department}</td>
                <td>${element.salary}</td>
                <td>${element.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
            `
        });
        this.employeeList.innerHTML=html
    }
    addEmployee(employee){
        let html=`
        <tr>                                        
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>
        `
        this.employeeList.innerHTML+=html
    }
    delete(element){
        element.remove()
    }
    updateButton(element){
        this.nameInput.value=element.children[0].textContent
        this.departmentInput.value=element.children[1].textContent
        this.salaryInput.value=element.children[2].textContent
        this.updateBtn.style.display='inline'
        this.cancelBtn.style.display='inline'
    }
    updateBtnClick(element,employee){
       element.children[0].textContent=employee.name
       element.children[1].textContent=employee.department
       element.children[2].textContent=employee.salary
       
       element.classList=''
       this.clearInputs()
    }
    clearInputs(){
        this.nameInput.value=''
        this.departmentInput.value=''
        this.salaryInput.value=''
    }
    hiddenUpdateClicks(){
        this.updateBtn.style.display='none'
        this.cancelBtn.style.display='none'
    }

}






































