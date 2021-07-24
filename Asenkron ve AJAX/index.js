//                            24.07.2021
//                          JSON UYGULAMA

document.querySelector('#getEmployee').addEventListener('click', getPlayers)
let loadImg = document.querySelector('#loading')
function getPlayers() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'employees.json', true)
    loadImg.style.display = 'block'
    
    setTimeout(() => {
        xhr.onload = function () {
            if (this.status === 200) {
                console.log(this.responseText)
                let players = JSON.parse(this.responseText)
                console.log(players)
                let html = ""
                players.forEach(item => {
                    html +=
                        `<tr>
                        <td>${item.firstName}</td>
                        <td>${item.lastName}</td>
                        <td>${item.Number}</td>
                        <td>${item.isQB}</td>  
                        </tr> `

                });
                document.querySelector('#players').innerHTML = html
                loadImg.style.display = 'none'
            }
        }
        xhr.send()
    },1500 );   
}