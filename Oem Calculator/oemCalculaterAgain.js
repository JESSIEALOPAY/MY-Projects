const elements = {
    productName: document.getElementById('productName'),
    productPrice: document.getElementById('productPrice'),
    productCard: document.getElementById('productCard'),
    productList: document.getElementById('item-list'),
    addBtn: document.querySelector('.addBtn'),
    updateBtn: document.querySelector('.addUpdate'),
    deleteBtn: document.querySelector('.addDelete'),
    cancelBtn: document.querySelector('.addCancel'),
    totalTL:document.getElementById('total-tl'),
    total$:document.getElementById('total-dolar')
}



const storageController = (function () {
    return{
        getProductsFromLS:function(){
            let products;
            if(localStorage.getItem('Products')){
                products=JSON.parse(localStorage.getItem('Products'))
            }else{
                products=[]
            }
            console.log(products)
            return products
        }
    }
})()


const productController = (function () {
    const products = []
    
    class Product {
        constructor(id, object, price) {
            this.id = id
            this.object = object
            this.price = price
        }
    }
    const createNewID=()=>{
        let id
        if(products.length>0){
        id=products[products.length-1].id+1
        }else{
            id=1
        }
        return id
    }

    return {
        addProductsFromLS:function(){
            let productsFromLS=storageController.getProductsFromLS()
            productsFromLS.forEach(prd => {
                products.push(prd)
            });
        },
        getproducts: function () {
            return products
        },
        addNewProducts: function (object, price) {
            let id=createNewID()
            let newProduct=new Product(id,object,price)
            products.push(newProduct)
            localStorage.setItem('Products',JSON.stringify(products))
            console.log(11)
        },
        deleteProduct: function(element){
            let id= element.children[0].textContent
            products.forEach((prd,index) => {
                if(prd.id==id){
                    products.splice(index,1)
                }
            });
            localStorage.setItem('Products',JSON.stringify(products))
            console.log(products)
        },
        updateProduct:function(element){
            let id= element.children[0].textContent
            let product={id:id,object:elements.productName.value,price:elements.productPrice.value}
            products.forEach((prd,index) => {
                if(prd.id==id){
                    products.splice(index,1,product)
                }
            });
            localStorage.setItem('Products',JSON.stringify(products))
        },
        calculateMoney:function(){
            let total=0
            products.forEach(prd => {
                total+=Number(prd.price)
            });
            return total
        }
        
    }

})()

const UIController = (function () {

    return{
        displayAddButton:function(){
            elements.updateBtn.style.display='none'
            elements.deleteBtn.style.display='none'
            elements.cancelBtn.style.display='none'
            elements.addBtn.style.display='inline'
        },
        displayUpdateButtons:function(){
            elements.updateBtn.style.display='inline'
            elements.deleteBtn.style.display='inline'
            elements.cancelBtn.style.display='inline'
            elements.addBtn.style.display='none'
        },
        displayProducts:function(){
            let products=productController.getproducts()
            if(products.length>0){
               let html=''
            products.forEach(prd => {
                html+=`
                <tr>
                            <td>${prd.id}</td>
                            <td>${prd.object}</td>
                            <td>${prd.price}</td>
                            <td style="text-align: right;"><i
                                        class="far fa-edit"></i></td>
                 </tr>
                `
            }); 
            elements.productList.innerHTML=html
            elements.productCard.style.display='flex'
            }
            
            this.displayAddButton()
            
        },
        clearInputs:function(){
            elements.productName.value=''
            elements.productPrice.value=''
        },
        editState:function(element){
            document.querySelectorAll('tr').forEach(x => {
                x.classList.remove('bg-danger')
            });
            element.classList.add('bg-danger')
            let name=element.children[1].textContent
            let price=element.children[2].textContent
            elements.productName.value=name
            elements.productPrice.value=price
            this.displayUpdateButtons()
        
        },
        showAlert:function(msg,type){
            let html=`<div class="alert alert-${type}" role="alert">
             ${msg}
          </div>`
            elements.productCard.insertAdjacentHTML('beforebegin',html)
            setTimeout(() => {
                document.querySelectorAll('.alert').forEach(item => {
                    item.remove()
                });
            }, 2000);
        },
        deleteProduct:function(element){
            element.remove()
            this.clearInputs()
            this.displayAddButton()
        },
        updateProduct:function(element){
            let object=elements.productName.value
            let price=elements.productPrice.value
            element.children[1].textContent=object
            element.children[2].textContent=price
            this.clearInputs()
            this.displayAddButton()
            document.querySelectorAll('tr').forEach(x => {
                x.classList.remove('bg-danger')
            });
        },
        displayMoney:function(){
            let money= productController.calculateMoney()
            elements.totalTL.textContent=money
            elements.total$.textContent=(money*8.55 ).toFixed(2)
        }
    }
})()


const appController = (function (UI,PRO) {
    const loadEventListeners = () => {
        elements.addBtn.addEventListener('click', addNewProducts)
        elements.productCard.addEventListener('click',updateConsole)
        elements.cancelBtn.addEventListener('click',cancelBtn)
        elements.deleteBtn.addEventListener('click',deleteBtn)
        elements.updateBtn.addEventListener('click',updateProduct)
    }

    const addNewProducts = (e) => {
        let object=elements.productName.value
        let price=elements.productPrice.value
        if(object.length>0 &&price.length>0){
            PRO.addNewProducts(object,price)
            UI.displayProducts()
            UI.showAlert('Product has been added','success')
        }else{
            UI.showAlert('Please complete the form','danger')
        }
        UI.displayMoney()
        UI.clearInputs()
        e.preventDefault()
    }
    const updateConsole=(e)=>{
        if(e.target.className=='far fa-edit'){
            let element=e.target.parentElement.parentElement
            
            UI.editState(element)
            
        }


        e.preventDefault()
    }
    const cancelBtn=function(e){
        UI.clearInputs()
        document.querySelectorAll('tr').forEach(x => {
            x.classList.remove('bg-danger')
        });
        UI.displayAddButton()
        e.preventDefault()
    }
    const deleteBtn=function(e){
        let element=document.querySelector('.bg-danger')
        console.log(element)
        PRO.deleteProduct(element)
        UI.deleteProduct(element)
        UI.displayMoney()
        e.preventDefault()
    }
    const updateProduct=function(e){
        let element=document.querySelector('.bg-danger')
        PRO.updateProduct(element)

        UI.updateProduct(element)
        UI.displayMoney()
        console.log(PRO.getproducts())
        e.preventDefault()
    }
    return {
        init: function () {
            console.log('app has been started')
            PRO.addProductsFromLS()
            UI.displayProducts()
            UI.displayMoney()
            

            loadEventListeners()
        }
    }



})(UIController,productController)


appController.init()


























// {id:1,object:'Computer',price:2500},
// {id:2,object:'Keyboard',price:2500},
// {id:3,object:'Mouse',price:2500},
// {id:4,object:'Ram',price:2500}













// <tr>
//    <td>a</td>
//    <td>a</td>
//    <td>a</td>
//    <td style="text-align: right;"><button type="submit" class="btn btn-warning btn-sm"><i class="far fa-edit"></i> </button></td> 
// </tr> 













