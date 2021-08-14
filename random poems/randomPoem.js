randomPoem()
async function randomPoem() {
    let result = await fetch('https://www.poemist.com/api/v1/randompoems')
    let json = await result.json()
    view(json)

}

function view(data) {
    console.log(data)
    let html = ''
    data.forEach(poem => {
        html+=`
        <div class="poemContainer" >
            <pre class="poem" style="color: rgb(255, 255, 255); display: inline;" >
               <h2 style="margin: 0; ">${poem.title}</h2>
            ${poem.content}
                <h3 style="color: azure;">${poem.poet.name}<h5 style="color: azure;">Poet</h5></h3>
                <a href="${poem.url}" > <button type="button" class="btn  btn-dark" style="text-align: center;">Go To Poem</button> </a>
            </pre>
        </div>
        `

    });
    console.log(html)
    document.getElementById('container').innerHTML=html

}
document.getElementById('NewPoems').addEventListener('click',randomPoem)
