const count = document.querySelector('#count')
const amount = document.querySelector('#amount')
const container = document.querySelector('.container')
const select = document.getElementById('movie')
const seat = container.querySelectorAll('.seat:not(.reserved)')




select.addEventListener('change',calculateMoney)

seat.forEach(function(item){
    item.addEventListener('click',function(){
        if(item.classList!=='reserved'){
            item.classList.toggle('selected')
            calculateMoney()
        }
    })
})


function calculateMoney(){
    const seatsArr=[]
    const selectedSeatsArr=[]
    container.querySelectorAll('.seat:not(.reserved)').forEach(function(seat){
        seatsArr.push(seat)
    })
    container.querySelectorAll('.selected').forEach(function(item){
        selectedSeatsArr.push(item)
    })
    let index=[]
    index=selectedSeatsArr.map(function(i){
           return seatsArr.indexOf(i)
         })
        localStorage.setItem('index',JSON.stringify(index))
        getIndexFromLS()
    console.log(index)
    count.textContent=selectedSeatsArr.length
    amount.textContent=selectedSeatsArr.length*select.value

}

getIndexFromLS()
function getIndexFromLS(){
    let index=[]
    index=JSON.parse(localStorage.getItem('index'))
    index.forEach(function(item){
        seat[item].classList.add('selected')
    })

}



// function setLocalStorage(index){
//     console.log(getIndexFromLS())
//     if(getIndexFromLS()==[]){
//         localStorage.setItem('index',JSON.stringify(index))
//     }else{
//         let get=getIndexFromLS()
//         console.log(get)
//         localStorage.setItem('index',JSON.stringify(get))
//     }



// }
















































// const count = document.querySelector('#count')
// const amount = document.querySelector('#amount')
// const container = document.querySelector('.container')
// const select = document.getElementById('movie')
// const seat = document.querySelectorAll('.seat:not(.reserved)')
// getIndexFromLS()


// seat.forEach(function (item) {
//     item.addEventListener('click', function(){
//     if (item.classList !== 'seat reserved')
//             item.classList.toggle('selected')
//         calculateMoney()
       
// }
// )
// })


// select.addEventListener('change', calculateMoney)


// function calculateMoney() {
//     const seatsArr = []
//     const selectedSeatsArr = []
//     const seats = container.querySelectorAll('.seat:not(.reserved)')
//     const selectedSeats = container.querySelectorAll('.selected')
//     selectedSeats.forEach(function (item) {
//         selectedSeatsArr.push(item)
//     })
//     seats.forEach(function (item) {
//         seatsArr.push(item)
//     })
  
//     let index =[]
//     index= selectedSeatsArr.map(function (i) {
//         return seatsArr.indexOf(i)
//     })
//     setLocalStorage(index)
//     count.textContent = selectedSeats.length
//     amount.textContent = select.value * container.querySelectorAll('.selected').length
    
    

// }





// function setLocalStorage(index) {
//     localStorage.setItem('selected', JSON.stringify(index))
//     localStorage.setItem('selectedMovie', JSON.stringify(select.selectedIndex))
// }

// function getIndexFromLS(){
//     const selectedSeats= JSON.parse(localStorage.getItem('selected'))
//     if(selectedSeats!=null && selectedSeats.length>0 ){
//         seat.forEach(function(seat,index){
//             if(selectedSeats.indexOf(index)>-1){
//                 seat.classList.add('selected')
//             }
//         })
//     }
//     const selectedMovie=JSON.parse(localStorage.getItem('selectedMovie'))
//     if(selectedMovie!=null){
//         select.selectedIndex=selectedMovie
//     }

// }

























// function getIndexFromLS(){
//     const selectedSeats= JSON.parse(localStorage.getItem('selected'))
//     if(selectedSeats!=null && selectedSeats.length>0 ){
//         seat.forEach(function(seat,index){
//             if(selectedSeats.indexOf(index)>-1){
//                 seat.classList.add('selected')
//             }
//         })
//     }

//     const selectedMovie= JSON.parse(localStorage.getItem('selectedMovie'))
//     if(selectedMovie != null){
//         select.selectedIndex=selectedMovie

//     }
// }








    // let selectedIndex= selectedSeatsArr.map(function(item){
    //     return seatsArr.indexOf(item)

    // })
    // saveToLocalStorage(selectedIndex)








// function saveToLocalStorage(index){
//     localStorage.setItem('selected',JSON.stringify(index))
//     localStorage.setItem('movieSelected',JSON.stringify(select.selectedIndex))
// }








// const seatsArr=[]
    // const selectedSeatsArr=[]
    // const selectedSeats= container.querySelectorAll('.seat.selected')
    // selectedSeats.forEach(function(item){
    //     selectedSeatsArr.push(item)
    // })
    // seats.forEach(function(item){
    //     seatsArr.push(item)
    // })














// function getIndexFromLS(i){
//     let indexOfSelected ;

//     indexOfSelected = JSON.parse(localStorage.getItem('selected'))
//     if(indexOfSelected!==null){
//     indexOfSelected.forEach(function(item){
//        console.log( i[item])
//     })
// }
//     console.log(indexOfSelected)

// }

















