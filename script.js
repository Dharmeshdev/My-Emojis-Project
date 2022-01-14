let addtoEnd = document.getElementById('add-end')
let addBeginning = document.getElementById('add-beg')
let removeEnd = document.getElementById('remove-end')
let removeBeginning = document.getElementById('remove-beg')

let inputEl = document.getElementById('input-el')
let emojis = document.getElementById('emojis')

let emojiarr = ["💻","👨‍💻","💪🏼"  ] 
// "🧑" , "👩‍💻" , "👨‍⚖️" , "👨‍💻"

emojis.innerHTML  = emojiarr

// Add to End
addtoEnd.addEventListener('click', () => {
    adde()
})
function adde(){
    if(inputEl.value){
        emojiarr.push(inputEl.value)
        inputEl.value = ''
        render()
    }
}

// Remove from end
removeEnd.addEventListener('click', () => {
    emojiarr.pop()
    render()
})

// Add to beginning 
addBeginning.addEventListener('click', () => {
    if(inputEl.value){
        emojiarr.unshift(inputEl.value)
        inputEl.value = ''
    }
    render()
})

// Remove from beginning
removeBeginning.addEventListener('click', () => {
    emojiarr.shift()
    render()
})

function render(){
    for(let i=0; i<Array.length; i++){
        emojis.textContent = emojiarr[i]
    }
    emojis.textContent = ' ' +emojiarr  
}

// Random Emoji function
let randomBtn = document.getElementById('random')
let randomText = document.getElementById('random-output')

let randomArr = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣","😊","😇", "🙂", "🙃", "😉", "😼", "😽", "🙀", "😿", "😾"]

function randomfnc(){
    let randomfn = Math.floor(Math.random() * randomArr.length);
    return randomArr[randomfn]
}

randomBtn.addEventListener('click', () =>{
   emojiarr.push(randomfnc())
   render()
})


let addThisEmoji = document.getElementById('addthisemoji')



// randomText.addEventListener('dblclick', () => {
//     randomText.textContent = ''; 
// })

// Drag and drop function