//     text fetch API

function getTxt() {
    fetch('text.txt')
        .then(response => response.text())
        .then(x => console.log(x))
        .catch(err => console.log(err))
}

getTxt()

// json fetch API

function getJson() {
    fetch('phones.json')
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        })

}
getJson()

//               external fetch API

function externalApi() {
    fetch('https://randomuser.me/api/?results=6')
        .then(res => res.json())
        .then(json => json.results)
        .then(users => {
            let html = ''
            users.forEach(user => {
                html += `
            <div>
            <img src="${user.picture.medium}" >
            <div>
                ${user.name.title}
                ${user.name.first}
                ${user.name.last}
            </div>
        </div>
            `
            });
            document.getElementById('users').innerHTML = html
        })
}

//externalApi()

function postExternalApi() {
    let data = {
        method:'POST',
        body:JSON.stringify( {
            userId: 1,
            title: 'my title',
            body: 'pleasure body'
        }),
        headers: new Headers({
            'content-type': 'application/json'
        })
    }
    fetch('https://jsonplaceholder.typicode.com/todos',data)
    .then(res=>res.json())
    .then(x=>console.log(x))

}
postExternalApi()

















