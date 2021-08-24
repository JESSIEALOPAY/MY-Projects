document.getElementById('add').addEventListener('click', addNewNotes)

let notesOfLS= JSON.parse(localStorage.getItem('notes'))
notesOfLS.forEach(note => {
    addNewNotes(note)
});



function addNewNotes(textOfLS = '') {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${textOfLS ? "" : "hidden"}"></div>
            <textarea class="${textOfLS ? "hidden" : ""}"></textarea>
        </div>
    `;

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')

    const textArea = note.querySelector('textarea')
    const main = note.querySelector('.main')

    if(typeof textOfLS =='string'){
        textArea.value=textOfLS
        console.log(textOfLS)
        console.log(1)
    }
    let myNote = textArea.value
        main.innerHTML = `
        <pre>${myNote}</pre>
        `

    editBtn.addEventListener('click', () => {
        note.querySelector('.main').classList.toggle('hidden')
        note.querySelector('textarea').classList.toggle('hidden')
        myNote = textArea.value
        main.innerHTML = `
        <pre>${myNote}</pre>
        `
        updateLS()
    })
    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLS()
    })

    document.querySelector('body').appendChild(note)
}


function updateLS() {
    let notes
    if(localStorage.getItem('notes')){
        notes=JSON.parse(localStorage.getItem('notes'))
    }else{
        notes=[]
    }
    const notesOfTextArea = document.querySelectorAll('textarea')
    notesOfTextArea.forEach(note => {
        if(note.value!==''&& notes.indexOf(note.value)==-1){
               notes.push(note.value) 
        }
    });
    localStorage.setItem('notes',JSON.stringify(notes))

}


let arr=[1,52,84,4,6,7]

console.log(arr.indexOf(5))
















//     let html=`
//     <div class="note">
//             <div class="notes">
//                 <div class="tools">
//                     <button class="edit"><i class="fas fa-edit"></i></button>
//                     <button class="delete"><i class="fas fa-trash-alt"></i></button>
//                 </div>
//                 <div class="main hidden"></div>
//                 <textarea class=""></textarea>
//             </div>
//         </div>
//     `





