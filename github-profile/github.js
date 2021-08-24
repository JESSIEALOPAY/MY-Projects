const form = document.getElementById('form')
const input = document.getElementById('search')
const main = document.getElementById('main')
const apiURL = "https://api.github.com/users/"

form.addEventListener('submit', search)

function search(e) {
    let text = input.value
    let url = apiURL + text

    searchApi(url)
    input.value = ''
    e.preventDefault()
}

async function searchApi(url) {
    let res = await fetch(url)
    let data = await res.json()
    displayProfile(data)
    let resRepos = await fetch(data.repos_url)
    let dataRepos = await resRepos.json()
    displayRepos(dataRepos)
}

function displayProfile(data) {
    let html = `
            <div class="card">
                <div>
                    <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
                </div>
                <div class="user-info">
                    <h2>${data.login}</h2>
                    <p>${data.bio}</p>
                    <ul class="info">
                        <li>${data.followers}<strong>Followers</strong></li>
                        <li>${data.following}<strong>Following</strong></li>
                        <li>${data.public_repos}<strong>Repos</strong></li>
                    </ul>
                    <div id="repos"></div>
                </div>
            </div>
    `
    main.innerHTML = html
}

function displayRepos(data) {
    console.log(data)
    let html = ''
    data.forEach(repo => {
        html += `
        <a class="repo" target="_blank" href="${repo.svn_url}" >${repo.name}</a>
        `
    });
    document.querySelector('#repos').innerHTML=html
}



{/* <a class="repo" href="https://github.com/florinpop17/app-ideas" target="_blank">app-ideas</a> */ }































