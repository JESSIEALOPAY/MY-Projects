const secondElement=document.getElementById('seconds')
const minsElement=document.getElementById('mins')
const hourElement=document.getElementById('hours')
const dayElement=document.getElementById('days')

setInterval(() => {
    
let newYear= new Date(2022,0,1)
let rightNow= new Date()


let distance= newYear-rightNow

let seconds= parseInt((distance/1000)%60)
if(seconds<10){
    seconds='0'+seconds
}
let minutes= parseInt((distance/1000/60)%60)
let hours=parseInt((distance/1000/60/60)%24)
let days=parseInt(distance/1000/60/60/24)

secondElement.textContent=seconds
minsElement.textContent=minutes
hourElement.textContent=hours
dayElement.textContent=days



}, 1000);





























