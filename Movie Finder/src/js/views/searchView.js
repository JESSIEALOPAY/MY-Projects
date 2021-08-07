import { elements } from "../base";


export const clearInput=()=>{
    elements.searchInput.value=''
}

export const clearResults=()=>{
    elements.searchResults.innerHTML=''
}


export const displayResults= (data)=>{
    console.log(data.total_results)
    // console.log(data.results[1].poster_path)
    const results=`${data.total_results} RESULTS FOUND `  
    data.results.forEach(movie => {
        if(movie.poster_path){
        const html=
        `
        <li class="media mb-5">
            <img src="https://image.tmdb.org/t/p/w154/${movie.poster_path}" class="mr-3" alt="${movie.title}">
            <div class="media-body">
                <h5 class="mt-0 mb-1">
                <span class="badge badge-primary" id="imdbPoint" >${movie.vote_average} </span>
                <a href="#${movie.id}">${movie.title}</a> 
                </h5>
                
                <p>${movie.overview} </p>
            </div>
        </li>
        `
        elements.movieListContainer.classList='card mt-3 d-block'
        elements.movieListHeader.innerHTML=results
        elements.searchResults.insertAdjacentHTML('beforeend',html)
        }
    });

}

