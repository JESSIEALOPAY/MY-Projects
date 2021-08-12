const titleElement=document.getElementById('title')
const actorsElement=document.getElementById('actors')
const urlElement=document.getElementById('url')
const films=document.getElementById('films')
const filmCard=document.getElementById('filmsView')
eventListener()



function eventListener(){
    
    document.getElementById('clear-films').addEventListener('click',()=>{
        let ui=new UI()
        ui.deleteAll()
    })
    document.getElementById('film-form').addEventListener('submit',appController)
    filmCard.addEventListener('click',function(e){
        if(e.target.id=='delete-film'){
            let ui=new UI()
            console.log(e.target.parentElement.parentElement)
            ui.deleteMovie(e.target.parentElement.parentElement)
            storage.deleteItem(e.target.parentElement.parentElement)
            }
        e.preventDefault()
    })        
    
}


class storage{
    static getItems(){
        let movies=[]

        if(localStorage.getItem('Movies')){
            movies= JSON.parse(localStorage.getItem('Movies'))
        }
        return movies
    }
    static showMovies(){
        let html=''
        let movies=storage.getItems()
        if(movies.length>0){
           filmCard.style.display='inline' 
        }
        
        if(movies.length>0){
            movies.forEach(movie => {
            html+=` <tr>
            <td><img src="${movie.url}" class="img-fluid img-thumbnail"></td>
            <td>${movie.title}</td>
            <td>${movie.actors}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`
        });
        }
        films.innerHTML=html
        

    }
    static deleteItem(element){
        let title= element.children[1].textContent
        let actors= element.children[2].textContent
        
        console.log(title,actors)
        let movies=storage.getItems()
        movies.forEach((movie,index) => {
            if(movie.title==title ||movie.actors==actors){
                console.log(index)
                movies.splice(index,1)
            }
        });
        
        localStorage.setItem('Movies',JSON.stringify(movies))
    }
}
document.addEventListener('DOMContentLoaded',storage.showMovies)

class Film{
    constructor(title,actors,url){
        this.title=title
        this.actors=actors
        this.url=url
    }
    
}

class UI{
    
    showAddNewFİlms(film){
        let movies=storage.getItems()
        console.log(movies)
        movies.push(film)
        console.log(movies)
        localStorage.setItem('Movies',JSON.stringify(movies))
        let html =''
        html=`
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.actors}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `
        films.innerHTML+=html
        filmCard.style.display='block'
    }
    clearInputs(){
        titleElement.value=''
        actorsElement.value=''
        urlElement.value=''
    }
    showAlert(msg,type){
        let html=`
        <div class="alert alert-${type}" role="alert">
            ${msg}
        </div>`
        document.querySelector('.card-body').insertAdjacentHTML('afterend',html)
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 2000);
       
        
    }
    deleteMovie(element){
        element.remove()
        this.showAlert('The Movie has been deleted','info')
    }
    deleteAll(){
        document.querySelectorAll('td').forEach(item => {
            item.remove()
        });
        localStorage.clear()
        filmCard.style.display='none'
    }
}


function appController(e){
    let title=titleElement.value 
    let actors=actorsElement.value
    let url=urlElement.value
    const film=new Film(title,actors,url)
    const ui=new UI()
    if(url==''|| title=='' || actors==''){
        ui.showAlert('please complete the form ','danger')
    }else{
        
        ui.showAddNewFİlms(film)
        ui.showAlert('The movie has been successfully added.','success')
        ui.clearInputs()
    }
    

    e.preventDefault()
}






















