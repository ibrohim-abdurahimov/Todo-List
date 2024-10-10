const form = document.querySelector(".form")
const inp = document.querySelector(".form input")
const collection = document.querySelector(".collection")
const wr = document.querySelector(".wrapper")
const clearAllButton  = document.querySelector(".clear-btn")



const DATA = JSON.parse(localStorage.getItem("data")) ||[]

function createList(data){
    while(collection.firstChild){
        collection.firstChild.remove()
    }
    data.forEach(item =>{
        let p = document.createElement("p")
        p.classList.add("list")
        p.innerHTML = `<span>${item.title}</span> <button>del</button>`
        
        p.querySelector('button').addEventListener('click', function (e) {
        e.stopPropagation();
        p.remove();
});
        collection.appendChild(p)
        wr.scrollTop = wr.scrollHeight
    })
}
function clearAllTasks() {
    collection.innerHTML = "";
    localStorage.clear()
}
createList(DATA)

form.addEventListener("submit", e => {
    e.preventDefault()
    const value = inp.value
    if(!value){
        return null
    }
    let newTODO = {
        id: new Date().getTime(),
        title:value
    }
    DATA.push(newTODO)
    localStorage.setItem("data",JSON.stringify(DATA))
    inp.value = ""
    createList(DATA)
})
clearAllButton.addEventListener('click', clearAllTasks);




