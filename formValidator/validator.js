const form=document.getElementById('form')
const email = document.getElementById('email')
const username= document.getElementById('username')
const password=document.getElementById('password')
const repassword=document.getElementById('repassword')




function success(input){
    input.classList='form-control is-valid'

}


function errors(input,message){
    input.classList='form-control is-invalid'
    input.nextElementSibling.innerText=message
    input.nextElementSibling.className='invalid-feedback'
    //     div.innerText=message
    //     div.className='invalid-feedback'
}


function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value==''){
            errors(input,`${input.id} is required`)
        }else{
            success(input)
        }
    })
}



function checkLength(input,min,max){
    if(input.value.length<min){
        errors(input,` en az ${min} harf olamlıdır`)
    }else if(input.value.length>max){
        errors(input,`en fazla ${max} olmalıdır`)
    }
    

}




function checkPassword(input1,input2){
    if(input1.value!==input2.value){
        errors(input2,`girdiğiniz şifreler uyuşmuyor`)
    }
}





form.addEventListener('submit',function(e){
    checkRequired([email,username,password,repassword])
    checkLength(username,7,10)
    checkLength(password,5,11)
    checkPassword(password,repassword)

    e.preventDefault()
})










































// const form=document.getElementById('form')
// const email = document.getElementById('email')
// const username= document.getElementById('username')
// const password=document.getElementById('password')
// const repassword=document.getElementById('repassword')



// function error(input,message){
//     input.classList='form-control is-invalid'
//     const div=input.nextElementSibling
//     div.innerText=message
//     div.className='invalid-feedback'

// }

// function success(input){
//     input.classList='form-control is-valid'
// }

// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// function checkRequired(inputs){
//     inputs.forEach(function(input){
//           if(input.value==''){
//         error(input,`${input.id} is required`)
//     }else{
//         success(input)
//     }
//     })
  
// }

// function checkLength(input, min, max){
//     if(input.value.length<min){
//         error(input,`${input.id} en az ${min} karakter olamlıdır`)
//     }else if(input.value.length>max){
//         error(input,`${input.id} en fazla ${max} karakter olamlıdır`)
//     }else{
//         success(input)
//     }
// }


// function checkPassword(input1,input2){
//     if(input1.value !== input2.value){
//         error(input2,'parola eşleşmiyor')
//     }
// }

// form.addEventListener('submit',function(e){
//     validateEmail(email.value)
//     checkRequired([username,email,password,repassword])
//     checkLength(username,7,15)
//     checkLength(password,7,12)
//     checkPassword(password , repassword)
//     console.log (username.value.length)
//     e.preventDefault()
// })

