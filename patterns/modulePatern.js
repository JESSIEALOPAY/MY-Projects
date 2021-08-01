//Encapsulation

var Counter = {
    number: 0,
    increment: function () {
        return ++this.number;
    },
    decrement: function () {
        return --this.number;
    }
}

console.log(Counter.increment());
console.log(Counter.increment());
Counter.number = 10;
console.log(Counter.decrement());




//script.js
(function () {
    var name = 'Sadık';
    console.log(name);
})();


// app.js
(function () {
    var name = 'Çınar';
    console.log(name);
})();



var Module = (function () {

    // private members
    let number = 0;

    let increment = function () {
        return ++number;
    }

    function decrement() {
        return --number;
    }
    let burak='burak is still stupid'
    return {
        // public members
        increment,
        decrement,
        burak
    }

})();

console.log(Module);
console.log(Module.increment());
console.log(Module.increment());
console.log(Module.decrement());


var Module1 = (function () {

    var privateMethod = function () {
        return 125
    };

    return {
        publicMethod: function () {
           return privateMethod()+11
        }
    }

})();

console.log(Module1.publicMethod());



const products = [
    {name:'Samsung S7',price:3000},
    {name:'Samsung S8',price:4000},
    {name:'Samsung S9',price:5000}
];

let ProductController=(function(){
    let collection=[]
    let addProduct= function(product){
        collection.push(product)
    }
    let removeProduct= function(product){
        let index= collection.indexOf(product)
        collection.splice(index,1)
    }
    let getProduct= function(){
        return collection
    }
    return {
        getProduct,
        addProduct,
        removeProduct
    }

})()


ProductController.addProduct(products[1])
ProductController.addProduct(products[0])
//ProductController.removeProduct(products[1])
ProductController.addProduct(products[2])


console.log(ProductController.getProduct())


// Module Extenting

var extended = (function(m){

    m.sayHello = function(){
        console.log('hello from extended module');
    }

    return m;

})(ProductController || {});

extended.sayHello();
console.log(extended.getProduct());


// ProductController.collection=10
// console.log(ProductController.collection)

console.log(ProductController)

let Sinleton=(function(){
    let instance;

    let creatInstance=function(){
        return{
            random: Math.random()*10
        }
    }
    return {
        getInstance: function(){
            if(!instance){
                instance=new creatInstance()
                console.log(instance)
            }
            return instance
        }
    }

})()

let instance1=Sinleton.getInstance()
let instance2=Sinleton.getInstance()

console.log(instance1.random)
console.log(instance2.random)


let singleteon1=(function(){
    let instance;
    let ProductController=function(){
        const products=[
            {name:'product1'},
            {name:'product1'},
            {name:'product1'}
        ]
        let add=function(product){
             products.push(product)
        }
        let get=function(){
            return products
        }
        return{
            add,get
        }

    }

    return {
        getInstance: function(){
            if(!instance){
                instance=new ProductController()
            }
            return instance
        }
    }

})()


let ProductController1=singleteon1.getInstance()
let ProductController2=singleteon1.getInstance()
ProductController1.add({name:'my product4'})
ProductController2.add({name:'my product5'})


console.log(ProductController1.get())
console.log(ProductController2.get())




function Factory(){

    this.createEmployee=function(type){
        let employee;

        if(type==='fulltime'){
            employee=new Fulltime()
        }else if(type==='parttime'){
            employee=new Parttime()
        }else if(type==='temporary'){
            employee=new Temporary() 
        }
        employee.type=type
        employee.say=function(){
            console.log(this.type+' : '+this.hourly)
        }
        return employee
    }
}

function Fulltime(){
    this.hourly='50tl'
}
function Parttime(){
    this.hourly='45tl'
}
function Temporary(){
    this.hourly='65tl'
}


let factory=new Factory()
let fulltime=factory.createEmployee('fulltime')
let parttime=factory.createEmployee('parttime')
let temporary=factory.createEmployee('temporary')
console.log(fulltime)
console.log(temporary.type)
console.log(parttime)
factory.createEmployee('parttime').say()
factory.createEmployee('temporary')

console.log(factory.createEmployee('temporary'))



























