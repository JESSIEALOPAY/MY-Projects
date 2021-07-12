// function person(name,yearOfBirth,job){
//     this.name=name
//     this.yearOfBirth=yearOfBirth
//     this.job=job
//     this.calculateAge=function(){
//         return 2021-this.yearOfBirth
//     }
// }
// let burak= new person('burak',1999,'lazy')
// let muslera= new person('nando',1987,'goalkeeper')


// console.log(muslera.calculateAge())

// console.log(burak.job)


//  let person = function(name,yearOfBirth,job){
//         this.name=name
//         this.yearOfBirth=yearOfBirth
//         this.job=job
//         }

// person.prototype.calculateAge= function(){
//     return 2021-this.yearOfBirth
// }
// person.prototype.LastName='Alopay'


// let burak= new person('burak',1999,'lazy')
// let muslera= new person('nando',1987,'goalkeeper')



// console.log(muslera)

// console.log(muslera.job)
// console.log(muslera.calculateAge())

// console.log(burak)
// console.log(burak.LastName)
// console.log(burak.job)
// console.log(burak.calculateAge())

// console.log(burak.name +' '+burak.LastName )

// let employee=function(name,salary){

//     this.name=name
//     this.salary=salary
// }

// employee.prototype.toplamMaas=function(){
//     let yıllık=this.salary*12
//     let tax=0
//     let total=this.salary*(new Date().getMonth()+1)
//     if(yıllık<=20000){
//         tax=total*0.2
//     }else if(yıllık>20000 && yıllık<3000){
//         tax=total*0,25
//     }else{
//         tax=total*0.3
//     }
//     return{
//         tax: tax,
//         paid: total-tax
//     }
// }

// let burak=new employee('burak',2000)
// console.log(burak)
// console.log(burak.toplamMaas())
// console.log(`${burak.name} şuana kadar ${burak.toplamMaas().tax}TL kesintiyle ${burak.toplamMaas().paid}TL maaş almıştır`)


// let personProto={
//     lastname:'gurcan',
//     calculateAge : function(){
//         return 2021-this.yearOfBirth;
//     }
// }

// let burak= Object.create(personProto)
// burak.name= 'burak'
// burak.job='student'
// burak.yearOfBirth = 1999;




// console.log(burak)

// console.log(burak.calculateAge())
// console.log(`${burak.name} ${burak.lastname}  ${burak.calculateAge()} yaşındadır`)

// let nando=Object.create(personProto,{
//     name: {value: 'muslera'},
//     yearOfBirth: {value:1987},
//     job:{value:'goalkeeper'}
// })


// console.log(nando.calculateAge())

// function person(name,yearOfBirth,job){
//     this.job=job
//     this.yearOfBirth=yearOfBirth
//     this.name=name

// }
// person.prototype.calculatAge=function(){
//     return 2021-this.yearOfBirth
// }

// let teacher=function(name,yearOfBirth,job,subject){
//     person.call(this,name,yearOfBirth,job) 
//     this.subject=subject
// }

// //inherit the person prototype methods
// teacher.prototype=Object.create(person.prototype)
// teacher.prototype.constructor=teacher

// teacher.prototype.greeting= function(){
//     return 'hi my name is '+ this.name
// }

// let burak=new teacher('burak',1999,'teacher','math')
// console.log(burak)







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


//                             CALLBACK FUNCTİONS              
// let val;

// function multipleByTwo(a, b, c,callback) {
//     let arr = []
//     for(i=0;i<3;i++){
//         arr[i]=callback(arguments[i]*2)
//     }
//     return arr
// }

// val=multipleByTwo(3,5,7,addThree)

// function addOne(a){
//     return a+1
// }
// function addTwo(a){
//     return a+2
// }
// function addThree(a){
//     return a+3
// }


// console.log(val)


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


//     }
// }

// let carQuestion =question('car')

// carQuestion('burak')

// let bookQuestion= question('book')
// bookQuestion('burak')


// let softwareQuestion=question('software')
// softwareQuestion('burak','javascript')


// (function(){
//     let days=['sunday','monday','tuesday','wednesday','thursday',',friday','saturday']
//     let today=new Date()
//     let msg='today is '+days[today.getDay()]
//     console.log(msg)
    

// }())


// function constructor(name,yearOfBirth,job){
//     this.name=name
//     this.yearOfBirth=yearOfBirth
//     this.job=job
//     this.calculate=function(){
//         return 2021- this.yearOfBirth
//     }
// }




// let burak=new constructor ('burak',1999,'student')


// console.log(burak.calculate())
 


// function constructor(name,yearOfBirth,job){
//     this.name=name
//     this.yearOfBirth=yearOfBirth
//     this.job=job
//     console.log(this)

// }

// constructor.prototype.calculate=function(){
//     return 2021-this.yearOfBirth
// }

// let burak=new constructor ('burak',1999,'student')
// console.log(burak)


// function employee(name,salary){
//     this.name=name
//     this.salary=salary

// }


// employee.prototype.vergi=function(){
//     let total=this.salary*12
//     let brut=(new Date().getMonth()+1)*this.salary
//     let kesinti;
//     let netMaas;
//     console.log(brut)
//     if(total<30000){
//         kesinti=brut*0.2
//         netMaas=brut-kesinti
//         console.log(`${this.name} bey ${kesinti} tl kesinti ile hesabınıza ${netMaas} tl yatırılmıitır`)
//     }
//     if(total>30000 && total<45000){
//         kesinti=brut*0.25
//         netMaas=brut-kesinti
//         console.log(`${this.name} bey ${kesinti} tl kesinti ile hesabınıza ${netMaas} tl yatırılmıitır`)
//     }
//     if(total<30000){
//         kesinti=brut*0.3
//         netMaas=brut-kesinti
//         console.log(`${this.name} bey ${kesinti} tl kesinti ile hesabınıza ${netMaas} tl yatırılmıitır`)
//     }

// }

// let burak=new employee('burak',3500)
// burak.vergi()


// let person=function(name){
//     this.name
// }
// person.prototype.introduce=function(){
//     return 'hi my name is '+this.name
// }

// let student=function(name,number){
//     person.call(name)
//     this.number=number

// }
// student.prototype=Object.create(person.prototype)
// student.prototype.constructor=student

// student.prototype.study=function(){
//     return 'Im study math'
// }

// let burak= new student('burak',1817)

// console.log(burak)






