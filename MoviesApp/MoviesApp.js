const firstPageApi = "https://api.themoviedb.org/3/movie/popular?api_key=1dbac836d1357c19fbf29945334fb316&language=en-US&page=1"
const searchApiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=1dbac836d1357c19fbf29945334fb316&language=en-US&query=avengers&page=1'
const imgUrl = 'https://image.tmdb.org/t/p/w1280/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const input = document.getElementById('search')

form.addEventListener('submit', search)

api()
async function api() {
    let res = await fetch(firstPageApi)
    let result = await res.json()
    let data = result.results
    displayMovie(data)

}
function displayMovie(data) {
    let html = ''
    data.forEach(movie => {
        html += `
        <div class="movie">
            <img src="${imgUrl}${movie.poster_path}" alt="${movie.original_title}">
            <div class="movie-info">
                <h3>${movie.original_title}</h3>
                <span class="${voteAverageColor(movie.vote_average)}">${movie.vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${movie.overview}
            </div>
        </div>
    `
    });

    main.innerHTML = html
}

function search(e) {
    console.log(2)
    let search = input.value
    let url = `https://api.themoviedb.org/3/search/movie?api_key=1dbac836d1357c19fbf29945334fb316&language=en-US&query=${search}&page=1`
    searchToMovie(url)
    input.value = ''
    e.preventDefault()
}


async function searchToMovie(url) {
    let res = await fetch(url)
    let result = await res.json()
    let data = result.results
    displayMovie(data)
    console.log(data)
}

function voteAverageColor(x) {
    let color;
    if (x >= 8) {
        color = 'green'
    } else if (8 > x && x > 5) {
        color='orange'
    }else{
        color= 'red'
    }
    return color
}



























