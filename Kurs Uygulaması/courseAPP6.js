//                     19.07.2021
class Course {
    constructor(title, instructor, image) {
        this.courseID = Math.floor(Math.random() * 1020202)
        this.title = title
        this.instructor = instructor
        this.image = image
    }
}

class UI {
    constructor(course) { }
    addCourse(course) {
        const html =
            `<tr>
            <td><img src="img/${course.image}.jpg"></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" id="${course.courseID}" class="btn btn-danger btn-sm delete" >Delete</a></td>
            </tr>`
    
        document.getElementById('course-list').innerHTML += html
    }
    submitReset() {
        const title = document.getElementById('title').value = ''
        const instructor = document.getElementById('instructor').value = ''
        const image = document.getElementById('image').value = ''

    }
    showAlert(message, className) {
        const alert = `
    <div class="alert alert-${className}">
    ${message}
    </div> `
        document.querySelector('.row').insertAdjacentHTML('beforebegin', alert)
    }
}

class Storage {
    static getCourse() {
        let courses;
        if (localStorage.getItem('courses') === null) {
            courses = []
        } else {
            courses = JSON.parse(localStorage.getItem('courses'))
        }
        return courses
    }
    static addCourse(course) {
        let courses = Storage.getCourse()
        courses.push(course)
        localStorage.setItem('courses', JSON.stringify(courses))
    }
    static display() {
        const ui = new UI()
        const courses = Storage.getCourse()
        courses.forEach(course => {
            ui.addCourse(course)
        });
    }
    static delete(element) {
        console.log(element)
        const id = element.getAttribute('id')
        const courses = Storage.getCourse()
        courses.forEach(function (course, index) {
            if (course.courseID == id) {
                courses.splice(index, 1)
                console.log(courses)
                localStorage.setItem('courses', JSON.stringify(courses))
            }
        })

    }
}
document.addEventListener('DOMContentLoaded', Storage.display())

document.getElementById('new-course').addEventListener('submit', e => {
    const title = document.getElementById('title').value
    const instructor = document.getElementById('instructor').value
    const image = document.getElementById('image').value

    const course = new Course(title, instructor, image)
    const ui = new UI()

    if (title == '' || instructor == '' || image == '') {
        ui.showAlert('please coplete the form', 'warning')
    } else {
        // addCourse
        ui.addCourse(course)
        Storage.addCourse(course)
        // syubmit reset
        ui.submitReset()
        ui.showAlert('the course has been added', 'success')
    }
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 3000);

    e.preventDefault()
})

document.getElementById('course-list').addEventListener('click', e => {
    const ui = new UI()
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove()
        ui.showAlert('the course has been deleted', 'danger')
        Storage.delete(e.target)

    }

    e.preventDefault()
})

















//              18.07.2021

// class Course {
//     constructor(title, instructor, image) {
//         this.courseID=Math.floor(Math.random()*100000)
//         this.title = title
//         this.instructor = instructor
//         this.image = image
//     }

// }

// class UI{
//     constructor(course){}
//     addCoursToList(course) {
//         const list = document.getElementById('course-list')
//         let html = `<tr>
//         <td><img src="img/${course.image}.jpg"></td>
//         <td>${course.title}</td>
//         <td>${course.instructor}</td>
//         <td><a href="#" id="${course.courseID}" class="btn btn-danger btn-sm delete">Delete</a></td>
//       </tr>
//         `
//         list.innerHTML += html
//     }
//     deleteControl(){
//         const title = document.getElementById('title').value = ''
//         const instructor = document.getElementById('instructor').value = ''
//         const image = document.getElementById('image').value = ''
//     }
//     deleteCourse(element){
//         if (element.classList.contains('delete')) {
//             element.parentElement.parentElement.remove()
//         }
//     }
//     showAlert(message, className){
//         const alert = `
//     <div class="alert alert-${className}">
//         ${message}
//     </div>
//     `
//     document.querySelector('.row').insertAdjacentHTML('beforebegin', alert)
//     setTimeout(() => {

//     }, 3000);
//     }

// }

// class Storage{
//     static getCourses(){
//         let courses;
//         if(localStorage.getItem('courses')===null){
//             courses=[]
//         }else{
//             courses=JSON.parse(localStorage.getItem('courses'))
//         }
//         return courses
//     }
//     static  addCourse(course){
//         const courses=Storage.getCourses()
//         courses.push(course)
//         localStorage.setItem('courses',JSON.stringify(courses))

//     }
//     static display(){
//         const courses=Storage.getCourses()
//         courses.forEach(item => {
//             const ui=new UI()
//             ui.addCoursToList(item)
//         });
//     }
//     static deleteCourseFromLS(element){
//         if(element.classList.contains('delete')){
//             const id=element.getAttribute('id')
//         console.log('hi')
//         const courses=Storage.getCourses()
//         courses.forEach(function(course,index){
//             if(course.courseID==id){
//                 console.log(id)
//                 console.log(course.courseID)
//                 console.log(index)
//                 courses.splice(index,1)
//                 localStorage.setItem('courses',JSON.stringify(courses))
//             }
//         })
//         }
//     }

// }
// document.addEventListener('DOMContentLoaded',Storage.display())

// document.getElementById('new-course').addEventListener('submit',e=> {

//     const title = document.getElementById('title').value
//     const instructor = document.getElementById('instructor').value
//     const image = document.getElementById('image').value

//     // create course object
//     const course = new Course(title, instructor, image)

//     const ui = new UI()

//     if (title == '' || instructor == '' || image == '') {
//         ui.showAlert('plase complete the form', 'warning')
//     } else {
//         //add course
//         ui.addCoursToList(course)
//         Storage.addCourse(course)
//         // delete control
//         ui.deleteControl()
//         ui.showAlert('the course has been added', 'success')
//     }
//     setTimeout(() => {
//         document.querySelector('.alert').remove()
//     }, 3000);

//     e.preventDefault()
// })

// document.getElementById('course-list').addEventListener('click', e =>{
//     const ui = new UI()
//     ui.deleteCourse(e.target)
//     Storage.deleteCourseFromLS(e.target)
//     if(e.target.classList.contains('delete') ){
//     ui.showAlert('the course has been deleted', 'danger)}
// })'











