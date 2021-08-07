// myAPI : 1dbac836d1357c19fbf29945334fb316
// url: https://api.themoviedb.org/3/
// https://image.tmdb.org/t/p/w220_and_h330_face/rEm96ib0sPiZBADNKBHKBv5bve9.jpg

import Search from "./models/search";
import { elements } from "./base";
import * as searchView from "./views/searchView";
import { displayMovie,backToTop,movieDetailsClose } from "./views/movieView";
import { Movie } from "./models/movie";


const state = {}

const searchController = async () => {
    const keyword = elements.searchInput.value


    if (keyword) {
        searchView.clearInput()
        searchView.clearResults()
        state.search = new Search(keyword)
        await state.search.getResult()
        console.log(state.search.data.results[0].id)
        searchView.displayResults(state.search.data)
        movieDetailsClose()

    } else {
        alert('please  type a text')
    }

}

const movieController=async()=>{
    const id=window.location.hash.replace('#','')
    if(id){
        state.movie=new Movie(id)
        await state.movie.GetMovie()
        
        displayMovie(state.movie.data)
        backToTop()
    }
}

window.addEventListener('hashchange', movieController);


elements.movieDetailsClose.addEventListener('click',movieDetailsClose)



elements.searchForm.addEventListener('submit', function (e) {
    searchController()
    e.preventDefault()
})




// body{
            
//     background-image: url('https://cdn.dsmcdn.com//ty8/product/media/images/20200721/10/5413171/77702759/1/1_org_zoom.jpg');
//     background-size: cover;
// }


















{/* <li class="media mb-3"  >
<img src="https://image.tmdb.org/t/p/w92/rEm96ib0sPiZBADNKBHKBv5bve9.jpg" class="mr-3" alt="...">
<div class="media-body">
  <h5 class="mt-0 mb-1">List-based media object</h5>
  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</div>
</li> */}