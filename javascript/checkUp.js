

function annelerGunu(year){
    let date= new Date(year,4,1,0,0,0,0)
    for(i=1;i<15;i++){
        date.setDate(i)
        if((date.getDay()==0)&& date.getDate()>7){
            console.log(`${year} yılının mayıs ayının ${date.getDate()}. gününde anneler günü`)
            console.log(date)
        }
    }

}

annelerGunu(2025)


function ageCalculater(year,month,day){
    let birthday=new Date(year,month,day)
    let today= new Date()
    
    let calculate=today-birthday
    console.log()
    let age=parseInt(calculate/1000/60/60/24/365)

    console.log(age)

}










