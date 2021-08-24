const main = document.getElementById("main");
const form = document.getElementById("form");
const input = document.getElementById("search");
//`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3265874a2c77ae4a04bb96236a642d2f`;

form.addEventListener('submit',search)

function search(e){
    searchApi(input.value)


    input.value=''
    e.preventDefault()
}

async function searchApi(key){
    let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${key}&appid=3265874a2c77ae4a04bb96236a642d2f`)
    let data= await res.json()
    displayWeather(data)
}

function displayWeather(data){
    let celsius= Math.round(data.main.temp-273)
    let html=`
    <div class="weather">
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png""><strong> ${celsius}</strong>°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png""></h2>
        <small>${data.weather[0].main}</small>
    </div>
    `
    main.innerHTML=html
}

// function KtoC(K) {
//     return Math.floor(K - 273.15);
// }

