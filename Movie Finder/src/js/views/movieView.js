import { elements } from "../base"

export const backToTop=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
}
export const movieDetailsClose=()=>{
    elements.movieDetailsContainer.classList='card mt-3 d-none'
}

export const displayMovie= movie=>{
    console.log(movie)   
    let genres=''
    movie.genres.forEach(kind => {
        genres+=`
        <span class="badge badge-danger ml-1"> ${kind.name}</span>
        `
    }); 
    const html=`
            <div class="row">
                <div class="col-md-4">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="mr-3 img-fluid" alt="${movie.title}">
                </div>
                <div class="col-md-8">
                <h5>${movie.original_title} </h5>
                <p>${movie.overview}</p>
                ${genres}
                <h5 style="color: darkblue;"><small style="color: rgb(136, 152, 180);">Release Date: </small> ${movie.release_date}</h5>
                <br>
                <p><small class="badge badge-primary">${movie.vote_average}</small> </p>
                </div>
            </div>
    `
    elements.movieDetailsContainer.classList='card mt-3 d-block'
    elements.movieDetails.innerHTML=html
}