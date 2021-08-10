function person(name,yearOfBirth,job){
    this.name=name
    this.yearOfBirth=yearOfBirth
    this.job=job
    this.calculateAge=function(){
        return 2021-this.yearOfBirth
    }
}
let burak= new person('burak',1999,'lazy')
let muslera= new person('nando',1987,'goalkeeper')


console.log(muslera.calculateAge())

console.log(burak.job)


 let person = function(name,yearOfBirth,job){
        this.name=name
        this.yearOfBirth=yearOfBirth
        this.job=job
        }

person.prototype.calculateAge= function(){
    return 2021-this.yearOfBirth
}
person.prototype.LastName='Alopay'


let burak= new person('burak',1999,'lazy')
let muslera= new person('nando',1987,'goalkeeper')



console.log(muslera)

console.log(muslera.job)
console.log(muslera.calculateAge())

console.log(burak)
console.log(burak.LastName)
console.log(burak.job)
console.log(burak.calculateAge())

console.log(burak.name +' '+burak.LastName )

let employee=function(name,salary){

    this.name=name
    this.salary=salary
}

employee.prototype.toplamMaas=function(){
    let yıllık=this.salary*12
    let tax=0
    let total=this.salary*(new Date().getMonth()+1)
    if(yıllık<=20000){
        tax=total*0.2
    }else if(yıllık>20000 && yıllık<3000){
        tax=total*0,25
    }else{
        tax=total*0.3
    }
    return{
        tax: tax,
        paid: total-tax
    }
}

let burak=new employee('burak',2000)
console.log(burak)
console.log(burak.toplamMaas())
console.log(`${burak.name} şuana kadar ${burak.toplamMaas().tax}TL kesintiyle ${burak.toplamMaas().paid}TL maaş almıştır`)


let personProto={
    lastname:'gurcan',
    calculateAge : function(){
        return 2021-this.yearOfBirth;
    }
}

let burak= Object.create(personProto)
burak.name= 'burak'
burak.job='student'
burak.yearOfBirth = 1999;




console.log(burak)

console.log(burak.calculateAge())
console.log(`${burak.name} ${burak.lastname}  ${burak.calculateAge()} yaşındadır`)

let nando=Object.create(personProto,{
    name: {value: 'muslera'},
    yearOfBirth: {value:1987},
    job:{value:'goalkeeper'}
})


console.log(nando.calculateAge())

function person(name,yearOfBirth,job){
    this.job=job
    this.yearOfBirth=yearOfBirth
    this.name=name

}
person.prototype.calculatAge=function(){
    return 2021-this.yearOfBirth
}

let teacher=function(name,yearOfBirth,job,subject){
    person.call(this,name,yearOfBirth,job) 
    this.subject=subject
}

//inherit the person prototype methods
teacher.prototype=Object.create(person.prototype)
teacher.prototype.constructor=teacher

teacher.prototype.greeting= function(){
    return 'hi my name is '+ this.name
}

let burak=new teacher('burak',1999,'teacher','math')
console.log(burak)







let person = function (name) {
    this.name = name
}

person.prototype.introduce = function () {
    return 'hi my name is ' + this.name
}

let student = function (name, number) {
    person.call(this, name)
    this.number = number
}

student.prototype = Object.create(person.prototype)
student.prototype.constructor = student

student.prototype.study = function () {
    return 'my number is ' + this.number + ' Ive already studied work hard'
}




let teacher = function (name, branch) {
    person.call(this, name)
    this.branch = branch
}

teacher.prototype = Object.create(person.prototype)
teacher.prototype.constructor = teacher

teacher.prototype.teach = function () {
    return 'i am teaching ' + this.branch
}


let headmaster = function (name, branch) {
    teacher.call(this, name, branch)
}

headmaster.prototype = Object.create(teacher.prototype)
headmaster.prototype.constructor = headmaster

headmaster.prototype.shareTask = function () {
    return 'aranızda bölüşün amk bana ne '
}


let burak = new student('burak', 1817)
let jessie = new teacher('jess', 'matematik')
let chris = new headmaster('chris', 'music')
console.log(burak.introduce())
console.log(jessie)
console.log(chris.introduce())


                            CALLBACK FUNCTİONS              
let val;

function multipleByTwo(a, b, c,callback) {
    let arr = []
    for(i=0;i<3;i++){
        arr[i]=callback(arguments[i]*2)
    }
    return arr
}

val=multipleByTwo(3,5,7,addThree)

function addOne(a){
    return a+1
}
function addTwo(a){
    return a+2
}
function addThree(a){
    return a+3
}


console.log(val)


function question(hobby) {
    switch (hobby) {
        case 'car':
            return function (name) {
                console.log(name + ' do you have a car?')
            }
            break;

        case 'book':

            return function (name) {
                console.log(name + ' what isyour favourite book?')
            }
            break;

        case 'software':
            return function (name,type) {
                console.log(name + ' are you interested in '+type+'?')
            }
            break;
        default:
            return function (name) {
                console.log(name + ' how are you ?')
            }


    }
}

let carQuestion =question('car')

carQuestion('burak')

let bookQuestion= question('book')
bookQuestion('burak')


let softwareQuestion=question('software')
softwareQuestion('burak','javascript')


(function(){
    let days=['sunday','monday','tuesday','wednesday','thursday',',friday','saturday']
    let today=new Date()
    let msg='today is '+days[today.getDay()]
    console.log(msg)


}())


function constructor(name,yearOfBirth,job){
    this.name=name
    this.yearOfBirth=yearOfBirth
    this.job=job
    this.calculate=function(){
        return 2021- this.yearOfBirth
    }
}




let burak=new constructor ('burak',1999,'student')


console.log(burak.calculate())



function constructor(name,yearOfBirth,job){
    this.name=name
    this.yearOfBirth=yearOfBirth
    this.job=job
    console.log(this)

}

constructor.prototype.calculate=function(){
    return 2021-this.yearOfBirth
}

let burak=new constructor ('burak',1999,'student')
console.log(burak)


function employee(name,salary){
    this.name=name
    this.salary=salary

}


employee.prototype.vergi=function(){
    let total=this.salary*12
    let brut=(new Date().getMonth()+1)*this.salary
    let kesinti;
    let netMaas;
    console.log(brut)
    if(total<30000){
        kesinti=brut*0.2
        netMaas=brut-kesinti
        console.log(`${this.name} bey ${kesinti} tl kesinti ile hesabınıza ${netMaas} tl yatırılmıitır`)
    }
    if(total>30000 && total<45000){
        kesinti=brut*0.25
        netMaas=brut-kesinti
        console.log(`${this.name} bey ${kesinti} tl kesinti ile hesabınıza ${netMaas} tl yatırılmıitır`)
    }
    if(total<30000){
        kesinti=brut*0.3
        netMaas=brut-kesinti
        console.log(`${this.name} bey ${kesinti} tl kesinti ile hesabınıza ${netMaas} tl yatırılmıitır`)
    }

}

let burak=new employee('burak',3500)
burak.vergi()


let person=function(name){
    this.name
}
person.prototype.introduce=function(){
    return 'hi my name is '+this.name
}

let student=function(name,number){
    person.call(name)
    this.number=number

}
student.prototype=Object.create(person.prototype)
student.prototype.constructor=student

student.prototype.study=function(){
    return 'Im study math'
}

let burak= new student('burak,1817) 











         12.07.2021


(function () {
    let h1 = document.createElement('h1')
    h1.appendChild(document.createTextNode('Most beautiful girl of the world'))
    document.querySelector('body').appendChild(h1)
    h1.style.color = 'white'
    console.log(h1)
}())





function player(name, team, yearOfBirth, position, draft) {
    this.name = name
    this.team = team
    this.position = position
    this.draft = draft
    this.yearOfBirth = yearOfBirth
}
player.prototype.age = function () {
    return 2021 - this.yearOfBirth
}

let lebron = new player('King', 'Cavs', 1984, 'PF', 2003)


function allstarPlayers(name, team, yearOfBirth, position, draft, allStar) {
    player.call(this, name, team, yearOfBirth, position, draft)
    this.allStar = allStar
}

allstarPlayers.prototype = Object.create(player.prototype)
allstarPlayers.prototype.contructor = allstarPlayers

allstarPlayers.prototype.salary = function () {
    if (this.allStar > 3) {
        paid = 30000000
    } else {
        paid = 25000000
    }
    return paid
}


let klay = new allstarPlayers('klay11', 'GSW', 1990, 'SG', 2011, 7)
console.log(klay.salary())
console.log(lebron.age())


function agesOfPlayers(a, b, c, calculate) {
    let arr = []
    for (i = 0; i < arguments.length - 1; i++) {
        arr[i] = calculate(arguments[i])
    }
    return arr

}

function ageCalculate(a) {
    return 2021 - a
}

console.log(agesOfPlayers(1994, 1987, 1992, ageCalculate))




function favouriteMusic(answer) {
    switch (answer) {
        case 'rap':
            return function (song) {
                console.log('you will should listen to ' + song)
            }
            break
        case 'rock':
            return function (song) {
                console.log('you have listen to anastasia ' + song)
            }

            break
        case 'pop':
            return function (song) {
                console.log('you should listen to ' + song)
            }
            break


    }
}

let rap = favouriteMusic('rap')
rap('ezhel')

let rock = favouriteMusic('rock')
rock('from slash')

let pop = favouriteMusic('pop')
pop('buz kırağı')


const person={
    firstName: 'Billie',
    lastName:'Eilish',
    getFullName: function(){
       return `${this.firstName} ${this.lastName}`
    },
    setFullName: function(text){
        let Words= text.split(' ')
        this.firstName=Words[0]
        this.lastName=Words[1]
    }
}


console.log(person)
console.log(person.getFullName())

person.setFullName('isabelle haak')
console.log(person.getFullName())



const person={
    firstName: 'Billie',
    lastName:'Eilish',
    get FullName() {
       return `${this.firstName} ${this.lastName}`
    },
    set FullName(text){
        let Words= text.split(' ')
        this.firstName=Words[0]
        this.lastName=Words[1]
    }
}
console.log(person.FullName)

person.FullName='isabelle haak'

console.log(person.FullName)
console.log(person)



let legends=function(){
    console.log(`${this.name} is a legend.${this.name} has ${this.rings} rings`)
}

let brady={
    name: 'brady',
    rings:7
}

let rodgers={
    name: 'brews',
    rings:2

}

legends.call(brady)
legends.call(rodgers)

legends.apply(brady)

let legendBrady= legends.bind(rodgers)
legendBrady()

let num = {
    min: 125,
    max: 250,
    checkNumber: function (value) {
        if (typeof value !== 'number') {
            return false
        } else {
            return value >= this.min && value <= this.max
        }
    }
}

console.log(num.checkNumber(100))

let pleasure = {
    min: 15,
    max: 35
}

console.log(num.checkNumber.call(pleasure, 20))
console.log(num.checkNumber.apply(pleasure, [24]))

(function () {
    let h1 = document.createElement('h1')
    h1.appendChild(document.createTextNode('Most beautiful girl of the world'))
    document.querySelector('body').appendChild(h1)
    h1.style.color = 'white'
}())



try {
    console.log(val)
    (function () {
        let h1 = document.createElement('h1')
        h1.appendChild(document.createTextNode('Most beautiful girl of the world'))
        document.querySelector('body').appendChild(h1)
        h1.style.color = 'white'
    }())

} catch (error) {
    console.log(new Error(error))
}
finally{
    console.log('always')
}














//                                 13.07.2021


let club = function (name, statu, color, country) {
    this.name = name
    this.statu = statu
    this.color = color
    this.country = country
}

club.prototype.status = function () {
    return `you are ${this.statu} in the ${this.country} league`
}




let UCL = function (statu, name, color, success, country) {
    club.call(this, name, statu, color, country)
    this.success = success
}

UCL.prototype = Object.create(club.prototype)
UCL.prototype.constructor = UCL

UCL.prototype.succeed = function () {
    console.log(this.name)
    return `${this.name} reached the ${this.success}`
}

let cimbom = new UCL('best Team', 'Galatasaray', 'red-yellow', 'quarter final', 'turkey')

console.log(cimbom)
console.log(cimbom.status())
console.log(cimbom.succeed())

function calculate(a, b, c, call) {
    return call((a + b) * c)
}
function mod(a) {
    return a + 15
}
console.log(calculate(2, 5, 18, mod))

function mood(feel) {
    switch (feel) {
        case 'sad':
            return function () {
                console.log(`you should be different person`)
            }
            break
        case 'happy':
            return function () {
                console.log(`you won't let anyone hurt you`)
            }
    }
}

let sadly = mood('sad')
sadly()
let Happier = mood('happy')
Happier()

let human={
    firstName: 'jessie',
    lastName:'alopay',
    FullName:function(){
        return `${this.firstName} ${this.lastName}`
    }

}


let human={
    firstName: 'jessie',
    lastName:'alopay',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(text){
        const parca= text.split(' ')
        this.firstName=parca[0]
        this.lastName=parca[1]
    }
}

Object.defineProperty(human,'fullName',{ 
     get function(){
        return `${this.firstName} ${this.lastName}`
    },

    set function(text){
        const parca= text.split(' ')
        this.firstName=parca[0]
        this.lastName=parca[1]
    }

})
console.log(human.fullName)
human.fullName='chris alopay'
console.log(human.fullName)


let me=function(a,b){
    console.log(`i am ${this.name} i feel ${this.mood}. i live in ${this.city} at the moment. I'll move to ${a} in ${b} `)
}

let jessie={
    name:'jessie',
    city:'LA',
    mood:'happy'
}
let chris={
    name:'chris',
    city:'boston',
    mood:'sad',
    job:'QB on football'
}


me.call(jessie,'NY City','5 month later')
me.call(chris,'London','3 years later')

me.apply(chris,['London','3 years later'])


let burak=me.bind(jessie,'London','3 years later')
burak()


let pleasure={
    name:'burak',
    callName:function(value){
        if(value>=10000){
            return `${this.name} is generous person `
        }else{
            return `${this.name} is a bitch`
        }
    }

}

let jess={name:'jessie'}
console.log(pleasure.callName.call(jess,5000))
let bind= pleasure.callName.bind(jess,15000)
console.log(bind())
console.log(pleasure.callName(10000))

document.getElementById('myBtn').addEventListener('click',function(e){
    let name=document.getElementById('name')
    let age=document.getElementById('age')
    let errors=document.getElementById('errors')
    errors.innerHTML=''

    try {
        if(name.value.length===0){
            throw new Error('name is required')
        }
        if(name.value.length>15){
            throw new Error('name is too long')
        }
        if(age.value.length===0){
            throw new Error('age is required')
        }
        if(isNaN(age.value)){
            throw new Error('age must be number')
        }

    } catch (err) {
        console.log(err)
        errors.innerHTML=err.message
    }

    e.preventDefault()
})



                      14.07.2021
                       general repeat
function allPerson(name, age, contractDuration) {
    this.name = name,
        this.age = age
    this.contractDuration = contractDuration
}


function players(name, age, contractDuration, salary) {
    allPerson.call(this, name, age, contractDuration)
    this.salary = salary
}

players.prototype.calculateMoney = function () {
    return this.salary * this.contractDuration
}


let captain = function (name, age, contractDuration, salary, bonus) {
    players.call(this, name, age, contractDuration, salary)
    this.bonus = bonus
}
captain.prototype = Object.create(players.prototype)
captain.prototype.constructor = captain
captain.prototype.calculateBonus = function () {
    return this.calculateMoney() * this.bonus
}


let coach = function (name, age, contractDuration, responsibility, salary) {
    allPerson.call(this, name, age, contractDuration)
    this.responsibility = responsibility
    this.salary = salary
}

coach.prototype.coachMoney = function () {
    return this.contractDuration * this.salary
}
coach.prototype.job = function () {
    return `my job is to coordinate ${this.responsibility}`
}

let burak = new allPerson('burak', 22, 3)
console.log(burak)

let chris = new players('burak', 22, 3, 300000)
console.log(chris)
console.log(chris.calculateMoney())

let jessie = new captain('jessie', 25, 4, 2500, 1.3)
console.log(jessie)
console.log(jessie.calculateBonus())


let AndyReid = new coach('Andy Reid', 63, 6, '45 players', 240000)
console.log(AndyReid)
console.log(AndyReid.job())
console.log(AndyReid.coachMoney())


function random(a, b, c, callback) {
    return callback(a * b / c)
}

function complicated(a) {
    return a * 7 + 27
}

console.log(random(25, 15, 5, complicated))

function turn(random) {
    switch (random) {
        case 1:
            return function () { console.log(`first`) }
            break
        case 2:
            return function () { console.log('second') }
            break
        case 3:
            return function () { console.log('third') }
            break

    }

}

let first = turn(1)
first()
let second = turn(2)
second()
let third = turn(3)
third()


let burakAlopay={
   name:'burak',
   lastName:'alopay',
   fullname:function(){
    return this.name+' '+this.lastName
   }
}

console.log(burakAlopay.fullname())


let burakAlopay = {
    name: 'burak',
    lastName: 'alopay',
    getfullname:function() {
        return this.name + ' ' + this.lastName
    },
    setfullName:function(value) {
        let part = value.split(' ')
        this.name = part[0]
        this.lastName = part[1]
    }
}
burakAlopay.setfullName('jessie alopay')
console.log(burakAlopay.getfullname())


function tired(a){
    console.log(`${this.name} is so tired. cause ${this.name} has  been working ${a} hours `)
}

let jessie={name:'jessie'}
let chris={name:'chris'}

tired.call(jessie)
tired.call(chris)

tired.apply(jessie,[3])

let jess=tired.bind(chris,7)
jess()


