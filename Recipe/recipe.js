const mealsEl = document.getElementById("meals");
const favoriteContainer = document.getElementById("fav-meals");
const mealPopup = document.getElementById("meal-popup");
const mealInfoEl = document.getElementById("meal-info");
const popupCloseBtn = document.getElementById("close-popup");

const searchTerm = document.getElementById("search-term");
const searchBtn = document.getElementById("search");

let random = true

beginning()

function beginning() {
    getRandomMeal()
    let items = getItemFromLS()
    items.forEach(item => {
        addFavMeals(item)
    });

}

function getItemFromLS() {
    let getItems;
    if (localStorage.getItem('id')) {
        getItems = JSON.parse(localStorage.getItem('id'))
    } else {
        getItems = []
    }
    return getItems
}

// function setItemToLS(id){
//     let items=getItemFromLS()
//     items.push(id)
//     localStorage.setItem('id',JSON.stringify(items))
// }

function deleteFromLS(id) {
    let items = getItemFromLS()
    items.forEach((item, index) => {
        if (item == id) {
            items.splice(index, 1)
        }
    });
    localStorage.setItem('id', JSON.stringify(items))
}

async function getRandomMeal() {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const data = await request.json()
    let meal = data.meals[0]
    showRandomMeals(meal)

}

function showRandomMeals(meal) {

    let html = `
            <div class="meal">
                <div class="meal-header">
                    
                    <span class="random"> Random Recipe </span>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                </div>
                <div class="meal-body">
                    <h4>${meal.strMeal}</h4>
                    <button class="fav-btn">
                        <i class="fas fa-heart" id="${meal.idMeal}" ></i>
                    </button>
                </div>
            </div>
            `
    mealsEl.innerHTML = html

    document.querySelector('.meal').addEventListener('click', e => {
        if (e.target.classList.contains('fa-heart')) {
            e.target.parentElement.classList.toggle('active')
            if (e.target.parentElement.classList.contains('active')) {
                addFavMeals(e.target.id)
            } else {
                deleteFavMeals(e.target.id)
            }

        } else {
            showDetails(meal.idMeal)
        }
    })

}

async function showDetails(id) {
    let request = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
    let data = await request.json()
    const meal = data.meals[0]
    mealPopup.classList.remove('hidden')
    console.log(meal)
    let html = `
    <div>
        <h1>${meal.strMeal}</h1>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <p>
        ${meal.strInstructions}
        </p>
        <h3>Ingredients:</h3>
        <ul id="icindekiler">
           
        </ul>
    </div>
    `
    mealInfoEl.innerHTML = html
    let liHtml = ''
    for (let i = 1; i < 20; i++) {
        if (meal['strMeasure' + i]) {
            liHtml += `
                <li>${meal['strIngredient' + i]} - ${meal['strMeasure' + i]} </li>
            `
        } else {
            break
        }
    }
    document.getElementById('icindekiler').innerHTML = liHtml

}

async function searchMeals(e) {
    let search = searchTerm.value

    let request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
    let data = await request.json()
    showSearchMeals(data.meals)
    clearInput()
}

function showSearchMeals(meals) {
    let html = ''
    meals.forEach(meal => {
        html += `
        <div class="meal">
        <div class="meal-header">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" id="${meal.idMeal}">
        </div>
        <div class="meal-body">
            <h4>${meal.strMeal}</h4>
            <button class="fav-btn">
                <i class="fas fa-heart" id="${meal.idMeal}"></i>
            </button>
        </div>
    </div>
        `
    })
    mealsEl.innerHTML = html
    document.querySelectorAll('.meal').forEach(element => {

        element.addEventListener('click', (e) => {
            console.log(e.target)
            if (e.target.classList.contains('fa-heart')) {
                e.target.parentElement.classList.toggle('active')
                if (e.target.parentElement.classList.contains('active')) {
                    addFavMeals(e.target.id)
                } else {
                    deleteFavMeals(e.target.id)
                }
            } else {
                if (e.target.id) {
                    showDetails(e.target.id)
                }
            }
            e.preventDefault()
        })
    });

}

function clearInput() {
    searchTerm.value = ''
}

async function addFavMeals(id) {
    let request = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
    let data = await request.json()
    const meal = data.meals[0]
    let html = `
    <li id="${meal.idMeal}">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="forDetails" >
        <span>${meal.strMeal}</span>
        <button class="clear"><i class="fas fa-window-close"></i></button>
    </li>
    `
    favoriteContainer.innerHTML += html
    let items = getItemFromLS()
    if (items.indexOf(meal.idMeal) == -1) {
        items.push(meal.idMeal)
        localStorage.setItem('id', JSON.stringify(items))
    }

}

function deleteFavMeals(id) {
    document.getElementById(id).remove()
    deleteFromLS(id)
}


searchBtn.addEventListener('click', searchMeals)

popupCloseBtn.addEventListener('click', (e) => {
    mealPopup.classList.add('hidden')
    e.preventDefault()
})

document.querySelector('.fav-container').addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-window-close')){
        deleteFavMeals(e.target.parentElement.parentElement.id)
        console.log(e.target.parentElement.parentElement)
    }else if(e.target.classList.contains('forDetails')){
        showDetails(e.target.parentElement.id)
    }
    e.preventDefault()
})





{/* <li>
        <img src="https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg" alt="Burek">
        <span>Burek</span>
        <button class="clear"><i class="fas fa-window-close"></i></button>
    </li> */}


let arr = [1, 'a', 2, 'c']
console.log(arr.indexOf('d'))










