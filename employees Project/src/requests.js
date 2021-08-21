export class Requests{
    constructor (url){
        this.url=url
    }
    async get(){
        let response= await fetch(this.url)
        let data= await response.json()
        return data
    }
    async post(data){
        let response= await fetch(this.url,{
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        })
        let resData= await response.json()
        return resData
    }
    async put(id,data){
        let response= await fetch(this.url+'/'+id,{
            method:"PUT",
            body: JSON.stringify(data),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        })
        let resData= await response.json()
        return resData
    }
    async delete(id){
        let response= await fetch(this.url+'/'+id,{
            method:"DELETE",
        })
        return 'Your data has been deleted'
    }
}