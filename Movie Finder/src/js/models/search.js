export default class Search{
    constructor(keyword){
        this.keyword=keyword
    }
    async  getResult(keyword){
        let response= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1dbac836d1357c19fbf29945334fb316&language=en-US&query=${this.keyword}&page=1&include_adult=false`)
    
        this.data= await response.json()
        
        console.log()
    }
    
}