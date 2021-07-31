function sayHi() {
    return new Promise(resolve => resolve('hi'))
}
console.log(sayHi())
sayHi().then(x => console.log(x))


async function sayHello() {
    return 'hello'
}
console.log(sayHello())
sayHello().then(a => console.log(a))

let isErr = true
function getCategory() {
    return new Promise((resolve, reject) => {
        let catecory = 'phone'
        let error='ERROR'
        if (!isErr) {
            resolve(catecory)
        } else{
            reject(error)
        }
   });
}

async function getProducts(category){
    let msg='5 products found in '+ category
    return msg
}


getCategory().then(getProducts).then(x=>console.log(x)).catch(err=>console.log(err))

async function result(){
    try {
    let category= await getCategory()
    let result=await getProducts(category)
    console.log(result)
    } catch (error) {
        console.log(error)
    }
    
   
}   

result()

async function pleasure(){
    let myPleasure='ı like watch the nfl matches'
    return myPleasure

}

pleasure().then(e=>console.log(e))




















