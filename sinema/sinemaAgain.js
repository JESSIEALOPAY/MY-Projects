const container=document.querySelector('.container')
const movie=document.querySelector('#movie')
const seats=container.querySelectorAll('.seat:not(.reserved)')
const count=document.querySelector('#count')
const amount=document.querySelector('#amount')

seats.forEach(item => {
    item.addEventListener('click',()=>{
        if(item.classList!=='reserved'){
            item.classList.toggle('selected')
            
        }
        calcualteMoney() 
    })
    
});


movie.addEventListener('change',calcualteMoney)

function calcualteMoney(){
    let allSeats=[]
    let selectedSeats=[]
    let index=[]
    container.querySelectorAll('.selected').forEach(item => {
        selectedSeats.push(item)
    });
    container.querySelectorAll('.seat:not(.reserved)').forEach(item => {
        allSeats.push(item)
    });
    index=selectedSeats.map(function(item){
        return allSeats.indexOf(item)
    })
    localStorage.setItem('seats',JSON.stringify(index))
    console.log(index)
    count.textContent=selectedSeats.length
    amount.textContent=selectedSeats.length*movie.value

}


getItemFromLS()
function getItemFromLS(){
    let index;
    if(localStorage.getItem('seats')===null){
        index=[]
    }else{
    index=JSON.parse(localStorage.getItem('seats'))
    index.forEach(element => {
        seats[element].classList.add('selected')
       
    });
} 
    console.log(localStorage.getItem('seats'))
}










