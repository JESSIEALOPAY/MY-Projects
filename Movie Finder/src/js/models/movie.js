export class Movie{
    constructor(id){
        this.id=id
    }
    async GetMovie(){
        let response= await fetch(`https://api.themoviedb.org/3/movie/${this.id}?api_key=1dbac836d1357c19fbf29945334fb316`)


        this.data= await response.json()

    }
}