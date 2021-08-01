document.getElementById('searchProfile').addEventListener('keyup',e=>{
    let text=e.target.value
    let profile=new Profile()
    let ui=new UI()
    ui.profileContainer.innerHTML=''
    profile.getProfile(text).then(res=>{
        if(res.profile.length==0){

        }else{
            ui.showUserProfile(res.profile[0],res.img)
            ui.showTodos(res.todo)

        }
    })
    console.log(e.target.value)



})















