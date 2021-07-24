// let xhr = new XMLHttpRequest() // her durum değişikliğinde tetiklenir

// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 ) {
//         console.log(xhr.responseText)
//     }else if( xhr.status == 404){
//         console.log(' kaynak bulunumadı')
//     }
//     xhr.onprogress=function(){
//         console.log('on progressing')
//     }
// }


// xhr.open('GET', 'msg.txt', true)
// xhr.send()

// console.log('Burak is')

// console.log(xhr.readyState)
// console.log(xhr.status)

//  readyState :

// 0: request not initialized // istek başlatılmadı
// 1: server connection established // sunucu bağlantısı kuruldu
// 2: request received  // istek kabul edildi
// 3: processing request // istek işleniyor
// 4: request finished and response is ready //istek tamamlandı ve cevap hazır

// status :
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"




//                                   24.07.2021

// let ajax= new XMLHttpRequest()

// ajax.onreadystatechange=function(){
//     if(this.readyState===4 && this.status===200){
//     console.log(ajax.responseText)
// }
// }
// ajax.onprogress=function(){
//     console.log('progressing')
// }


// console.log('van anholt')


// ajax.open('GET','msg.txt',true)
// ajax.send()

// let xhr= new XMLHttpRequest()

// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 ) {
//         console.log(xhr.responseText)
//     }else if( xhr.status == 404){
//         console.log(' kaynak bulunumadı')
//     }
//     xhr.onprogress=function(){
//         console.log('on progressing')
//     }
// }

// xhr.onreadystatechange =function(){
//     if(this.status==200){
//     console.log(xhr.responseText)
   
// }
// }

// xhr.open('GET','employees.json',true)
// // xhr.onload=function(){
// //     if(this.status===200){
// //         console.log(this.responseText)
// //     }
// // }


// xhr.send()


//                          JSON UYGULAMA


document.querySelector('#getEmployee').addEventListener('click',getPlayers)

function getPlayers(){
    const xhr=new XMLHttpRequest()

    xhr.open('GET','employees.json',true)
    xhr.onload=function(){
        console.log(this.responseText)
        let players=JSON.parse(this.responseText)
        console.log(players) 
        let html=""
        players.forEach(item => {
            html+=
        `<tr>
        <td>${item.firstName}</td>
        <td>${item.lastName}</td>
        <td>${item.Number}</td>
        <td>${item.isQB}</td>  
        </tr> `   
        
        });
        console.log(html)
      document.getElementById('players').innerHTML=html

    }

    xhr.send()

}







































