const elements = {
    form: document.getElementById('github-form'),
    input: document.getElementById('githubname'),
    profile: document.getElementById('profile'),
    clearLastUsers: document.getElementById('clear-last-users'),
    repos: document.getElementById('repos'),
    lastUsers:document.getElementById('last-users')
}

const LocalStorage = (function () {
    return{
        getItems:()=>{
            let searches;
            if(localStorage.getItem('searches')){
                searches=JSON.parse(localStorage.getItem('searches'))
            }else{
                searches=[]
            }
            return searches
        },
        setItem:(user)=>{
            let lastSearches= LocalStorage.getItems()
            if(lastSearches.indexOf(user)==-1){
                lastSearches.push(user)
                localStorage.setItem('searches',JSON.stringify(lastSearches))
            }
        }
    }
})()

const UI = (function () {

    return {
        viewResponseUser: function (data) {
            let html = ''
            html = `
                <div class="col-md-2">
                <div class="card" style="width: 18rem;">
                    <img src="${data.avatar_url}" class="card-img-top" >
                    <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <h6>Login: ${data.login}</h6>
                    <p class="card-text">Public Repos: ${data.public_repos}</p>
                    <p class="card-text">Following : ${data.following}</p>
                    <p class="card-text">Created at : ${data.created_at}</p>
                    <a href="#" class="btn btn-primary" id="reposBtn">Go Repos</a>
                </div>
                </div>
            `
            elements.profile.innerHTML = html
            console.log(data)
        },
        viewResponseRepos: function (repos) {
            let html = ''
            repos.forEach(repo => {
                html += `
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${repo.id}  </li>
                            <li class="list-group-item">Watchers: ${repo.watchers}   Forsks: ${repo.forks}  </li>
                            <a href="${repo.html_url}" class="btn btn-primary " target="_blank" tabindex="-1" role="button" aria-disabled="true">Visit to Repos</a>
                        </ul>
                        <hr>
                        `
            });
            elements.repos.innerHTML=html
            console.log(repos)
        },
        inputClear:function(){
            elements.input.value=''
        },
        showLastSearches:function(){
            let lastUsers= LocalStorage.getItems()
            let html=''
            lastUsers.forEach(item => {
                html+=`
                <li class="list-group-item">${item}</li>
                `
            });
            elements.lastUsers.innerHTML=html
        }
    }
})()

const gitAPI = (function () {
    return {
        responseUser: async function (name) {
            console.log(1)
            let res = await fetch('https://api.github.com/users/' + name)
            let user = await res.json()
            let reposUrl = user.repos_url
            return { user, reposUrl }
        },
        responseRepos: async function (url) {
            let res = await fetch(url)
            let repos = await res.json()
            UI.viewResponseRepos(repos)
        }
    }
})()

//octocat



const APP = (function () {
    let reposUrl
    function loadEventListeners() {
        elements.form.addEventListener('submit', submited)
        elements.profile.addEventListener('click', goRepos)
    }
    function submited(e) {
        let user = elements.input.value
        if(user.length>0){
            gitAPI.responseUser(user).then(data => {
            UI.viewResponseUser(data.user)
            reposUrl = data.reposUrl    
            })
            LocalStorage.setItem(user)
            UI.showLastSearches()
        }
        UI.inputClear()
        e.preventDefault()
    }
    async function goRepos(e) {
        if (e.target.id == 'reposBtn') {
            gitAPI.responseRepos(reposUrl)
        }

        e.preventDefault()
    }

    return {
        init: () => {
            loadEventListeners()
            UI.showLastSearches()

            console.log('app started')
        }
        
    }

})()


APP.init()













