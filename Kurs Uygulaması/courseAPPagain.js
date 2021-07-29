class Course{
    constructor(title,instructor,image){
        this.courseID = Math.floor(Math.random() * 1020202)
        this.title=title
        this.instructor=instructor
        this.image=image

    }
}

class displayCouse{
    constructor(course){

    }
    addCourse(course){
        let list=document.getElementById('course-list')
        let html=`<tr>
        <td><img src="img/${course.image}.jpg"></td>
        <td>${course.title}</td>
        <td>${course.instructor}</td>
        <td><a href="#" id="${course.courseID}" class="btn btn-danger btn-sm delete" >Delete</a></td>
        </tr>`
        list.innerHTML+=html
       

    }
    submitReset(){
        document.getElementById('title').value=''
        document.getElementById('instructor').value=''
        document.getElementById('image').value=''
    }
    showAlert(message,className){
        let alert=`
        <div class="alert alert-${className}">
        ${message}
        </div> 
        `
        document.getElementById('new-course').insertAdjacentHTML('beforebegin', alert)
    }

}

class Storage{
    static getCourses(){
        let courses;
        if(localStorage.getItem('course')===null){
            courses=[]
        }else {
            courses=JSON.parse(localStorage.getItem('course'))
        }
        return courses
    }
    static setCourses(course){
        let courses=this.getCourses()
        courses.push(course)
        localStorage.setItem('course',JSON.stringify(courses))
    }
    static displayStorage(){
        let display=new displayCouse()
        this.getCourses().forEach(course => {
            display.addCourse(course)
        });
    }
    static delete(item){
        let id=item.getAttribute('id')
        let courses=this.getCourses()
        courses.forEach(function(course,index){
            console.log(id)
            console.log(course.courseID)
            if(course.courseID==id){
                courses.splice(index,1)
                localStorage.setItem('course',JSON.stringify(courses))
            }
        })
        console.log(item)
    }
}

document.addEventListener('DOMContentLoaded',Storage.displayStorage())





document.getElementById('new-course').addEventListener('submit',function(e){

   let title= document.getElementById('title').value
   let instructor= document.getElementById('instructor').value
   let image= document.getElementById('image').value
    let display=new displayCouse()
    let course=new Course(title,instructor,image)
    
    if(title==''|| instructor=='' || image==''){
        display.showAlert('please comlete the form','warning')

    }else{
        display.addCourse(course)
        display.showAlert('the course has been added','success')
        Storage.setCourses(course)
        display.submitReset()
        
    }   
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 3000);
    e.preventDefault()
})

document.getElementById('course-list').addEventListener('click',function(e){
    let display=new displayCouse()
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove()
        Storage.delete(e.target)
        display.showAlert('the course has been deleted','danger')
    }

    e.preventDefault()
})


























