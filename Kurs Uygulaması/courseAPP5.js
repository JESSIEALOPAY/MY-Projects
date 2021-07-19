function Course(title, instructor, image) {
    this.title = title
    this.instructor = instructor
    this.image = image
}

function UI(course) {}

UI.prototype.addCoursToList = function (course) {
    const list = document.getElementById('course-list')
    let html = `<tr>
    <td><img src="img/${course.image}.jpg"></td>
    <td>${course.title}</td>
    <td>${course.instructor}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
  </tr>
    `
    list.innerHTML += html

}

UI.prototype.deleteControl = function () {
    const title = document.getElementById('title').value = ''
    const instructor = document.getElementById('instructor').value = ''
    const image = document.getElementById('image').value = ''
}

UI.prototype.deleteCourse = function (element) {
    if (element.classList.contains('delete')) {
        element.parentElement.parentElement.remove()
    }
}

UI.prototype.showAlert = function (message, className) {
    const alert = `
    <div class="alert alert-${className}">
        ${message}
    </div>
    `
    document.querySelector('.row').insertAdjacentHTML('beforebegin', alert)
    setTimeout(() => {

    }, 3000);



}


document.getElementById('new-course').addEventListener('submit', function (e) {

    const title = document.getElementById('title').value
    const instructor = document.getElementById('instructor').value
    const image = document.getElementById('image').value

    // create course object
    const course = new Course(title, instructor, image)

    const ui = new UI()

    if (title == '' || instructor == '' || image == '') {
        ui.showAlert('plase complete the form', 'warning')
    } else {
        //add course
        ui.addCoursToList(course)
        // delete control
        ui.deleteControl()
        ui.showAlert('the course has been added', 'success')
    }
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 3000);

    e.preventDefault()
})

document.getElementById('course-list').addEventListener('click', function (e) {
    const ui = new UI()
    ui.deleteCourse(e.target)
    ui.showAlert('the course has been deleted', 'danger')
})




























