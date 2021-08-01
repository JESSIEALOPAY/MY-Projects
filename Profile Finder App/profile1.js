class Profile{
    constructor(){
        
    }
    async getProfile(username){
        let profileApi=await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
        let profile=await profileApi.json()

        let todoApi= await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)
        let todo= await todoApi.json()

        let imageApi= await fetch('https://randomuser.me/api/')
        let imgJson=await imageApi.json()
        let img=imgJson.results[0].picture.large
        
        return {profile,todo,img}
    }

}
// let a=new Profile()
// a.getProfile('Bret').then(x=>{
//     console.log(x.profile[0])
//     console.log(x.todo)
//     console.log(x.img)
// })













