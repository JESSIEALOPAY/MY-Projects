// Storage Controller
const StorageController = (function () {
    
    
    
    return {
        getProducts:function(){
            let products;
            
            console.log(localStorage.getItem('products'))
            if(localStorage.getItem('products')===null){
                products=[]
            }else{
                products=JSON.parse(localStorage.getItem('products'))
            }
            return products
        },
        setProducts: function(prd){
            console.log('a')
            let products=this.getProducts()
            products.push(prd)
            localStorage.setItem('products',JSON.stringify(products))
        },
        deleteProducts:function(selected){
             
            let products= this.getProducts()
            console.log(selected)
            products.forEach((item,index)=>{
                if(item.name==selected.name&&item.price==selected.price&&item.id==selected.id){
                    
                    console.log(index)
                    products.splice(index,1)
                }
            })
            localStorage.setItem('products',JSON.stringify(products))
            

        },
        updateProduct:function(prd){
            localStorage.setItem('products',JSON.stringify(prd))
            
        }


    }

    
})()



// Product Controller
const ProductController = (function () {

    const Product = function (id, name, price) {
        this.id = id
        this.name = name
        this.price = price
    }
    const data = {
        products: [],
        selectedProduct: null,
        totalPrice: 0
    }
    return {
        getProducts: function () {
            data.products=StorageController.getProducts()
            UIController.showTotal(this.getTotal())
            
            return data.products
        },
        getData: function () {
            return data
        },
        addProduct: function (name, price) {
            let id;

            if (data.products.length === 0) {
                id = 1
            } else {
                id = data.products[data.products.length-1].id+1
            }
            const newProduct = new Product(id, name, Number(price))
            data.products.push(newProduct)
            StorageController.setProducts(newProduct)
            return newProduct
        },
        setCurrentProduct: function (product) {
            data.selectedProduct = product
        },
        updateProduct: function (name, price) {
            let product = null

            data.products.forEach(prd => {
                if (prd.id == data.selectedProduct.id) {
                    prd.name = name
                    prd.price = Number(price)
                    product = prd
                }
            });

            return product
        },
        deleteProduct: function () {
            const selected= data.selectedProduct
            StorageController.deleteProducts(selected)
            data.products.forEach((prd,index) => {
                if(prd==selected){
                    data.products.splice(index,1)
                }
            });
            data.selectedProduct=null
        },
        getProductById: function (id) {
            let product = null
            data.products.forEach(prd => {
                if (prd.id == id) {
                    product = prd
                }
            });
            return product
        },
        getTotal: function () {
            let total = 0
            data.products.forEach(prd => {
                total += prd.price
            });
            data.totalPrice = total
            return total

        }
    }

})()


// UI Controller
const UIController = (function () {
    const selectors = {
        productList: '#item-list',
        addButton: '.addBtn',
        updateButton: '.addUpdate',
        deleteButton: '.addDelete',
        cancelButton: '.addCancel',
        productName: '#productName',
        productPrice: '#productPrice',
        productCard: '#productCard',
        totalTL: '#total-tl',
        totalDolar: '#total-dolar'
    }

    return {
        createProductList: function (products) {

            let html = ''
            products.forEach(prd => {
                html += `
                <tr>
                <td>${prd.id}</td>
                <td>${prd.name}</td>
                <td>${prd.price} $</td>
                <td class="text-right">
                   
                        <i class="far fa-edit edit-product"></i>

                </td>
                </tr>
                `
            });



            document.querySelector(selectors.productList).innerHTML = html

        },
        getSelectors: function () {
            return selectors
        },
        addProduct: function (prd) {
            document.querySelector(selectors.productCard).style.display = 'block'
            let html = `
            <tr>
            <td>${prd.id}</td>
            <td>${prd.name}</td>
            <td>${prd.price} $</td>
            <td class="text-right">
               
                    <i class="far fa-edit edit-product"></i>

            </td>
            </tr>
            `
            document.querySelector(selectors.productList).innerHTML += html


        },
        addProductToForm: function () {
            document.querySelector(selectors.productName).value = ProductController.getData().selectedProduct.name
            document.querySelector(selectors.productPrice).value = ProductController.getData().selectedProduct.price
            console.log(ProductController.getData().selectedProduct.name)
        },
        addingState: function () {
            document.querySelector(selectors.addButton).style.display = 'inline'
            document.querySelector(selectors.updateButton).style.display = 'none'
            document.querySelector(selectors.deleteButton).style.display = 'none'
            document.querySelector(selectors.cancelButton).style.display = 'none'
        },
        editState: function (tr) {
            document.querySelectorAll('tr').forEach(x => {
                x.classList.remove('bg-danger')
            });
            tr.classList.add('bg-danger')

            document.querySelector(selectors.addButton).style.display = 'none'
            document.querySelector(selectors.updateButton).style.display = 'inline'
            document.querySelector(selectors.deleteButton).style.display = 'inline'
            document.querySelector(selectors.cancelButton).style.display = 'inline'

        },
        updateProduct: function (prd) {
            let updateItem = null
            document.querySelectorAll('tr').forEach(item => {
                if (item.classList.contains('bg-danger')) {
                    item.children[1].textContent = prd.name
                    item.children[2].textContent = Number(prd.price) + ' $'
                    updateItem = item
                }
            });
            return updateItem
        },
        deleteProduct:function(){
            document.querySelector(selectors.productList).querySelector('.bg-danger').remove()
            this.showTotal(ProductController.getTotal())
            this.clearInputs()
            this.addingState() 
            if(document.querySelector('tr')===null){
                this.hideCard()
            }
        },
        clearInputs: function () {
            document.querySelector(selectors.productName).value = ''
            document.querySelector(selectors.productPrice).value = ''
        },
        hideCard: function () {
            document.querySelector(selectors.productCard).style.display = 'none'
        },
        showTotal: function (total) {
            document.querySelector(selectors.totalDolar).textContent = Number(total)
            document.querySelector(selectors.totalTL).textContent = Number(total * 8.43)

        }

    }
})()


// APP Controller 
const AppController = (function (ProductCtrl, UICtrl) {
    let selectors = UICtrl.getSelectors()

    const loadEventListeners = function () {
        document.querySelector(selectors.addButton).addEventListener('click', productAddSubmit)
        // edit product click
        document.querySelector(selectors.productList).addEventListener('click', productEditClick)
        //edit product submit
        document.querySelector(selectors.updateButton).addEventListener('click', productEditSubmit)
        //cancel button click
        document.querySelector(selectors.cancelButton).addEventListener('click', cancelBtnClick)
        // delete btn click
        document.querySelector(selectors.deleteButton).addEventListener('click', deleteBtnClick)
    }

    const productAddSubmit = function (e) {
        const productName = document.querySelector(selectors.productName).value
        const productPrice = document.querySelector(selectors.productPrice).value
        if (productName !== '' & productPrice !== '') {
            const newProduct = ProductCtrl.addProduct(productName, productPrice)
            UICtrl.addProduct(newProduct)
            // StorageController.setProducts(newProduct)
            console.log(1)
            UICtrl.clearInputs()

            const total = ProductCtrl.getTotal()
            UICtrl.showTotal(total)
        

        }


        e.preventDefault()
    }
    const productEditClick = function (e) {
        if (e.target.classList.contains('edit-product')) {
            const id = e.target.parentElement.parentElement.children[0].textContent
            const product = ProductCtrl.getProductById(id)
            console.log(e.target.parentElement.parentElement)
            ProductCtrl.setCurrentProduct(product)

            UICtrl.addProductToForm()

            UICtrl.editState(e.target.parentElement.parentElement)

            //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)  
        }
        e.preventDefault()
    }
    const productEditSubmit = function (e) {
        const productName = document.querySelector(selectors.productName).value
        const productPrice = document.querySelector(selectors.productPrice).value
        if (productName !== '' && productPrice !== '') {
            const updateProduct = ProductCtrl.updateProduct(productName, productPrice)
            StorageController.updateProduct(ProductCtrl.getData().products)
            let tr = UICtrl.updateProduct(updateProduct)
            tr.classList.remove('bg-danger')
            UICtrl.showTotal(ProductCtrl.getTotal())
            UICtrl.clearInputs()
            UICtrl.addingState()

        }

        e.preventDefault()
    }
    const cancelBtnClick = function (e) {
        UICtrl.addingState()
        document.querySelector(selectors.productList).querySelector('.bg-danger').classList.remove('bg-danger')
        UICtrl.clearInputs()
        console.log(5)
        e.preventDefault()
    }
    const deleteBtnClick = function (e) {
        // const selectedProduct = ProductCtrl.getData().selectedProduct
        ProductCtrl.deleteProduct()
        UICtrl.deleteProduct()
        
        e.preventDefault()
    }

    return {
        init: function () {
            console.log('starting ...')
            const products = ProductCtrl.getProducts()
           
            if (products.length == 0) {
                UICtrl.hideCard()
            } else {
                UICtrl.createProductList(products)
                
            }

            UICtrl.addingState()
            loadEventListeners()
        }
    }
})(ProductController, UIController)

AppController.init()







