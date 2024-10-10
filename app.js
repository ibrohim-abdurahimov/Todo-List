const form = document.querySelector(".form")
const inp = document.querySelector(".form input")
const collection = document.querySelector(".collection")
const wr = document.querySelector(".wrapper")



const DATA = JSON.parse(localStorage.getItem("data")) ||[]

function createList(data){
    while(collection.firstChild){
        collection.firstChild.remove()
    }
    data.forEach(item =>{
        let p = document.createElement("p")
        p.classList.add("list")
        p.innerHTML = item.title
        collection.appendChild(p)
        wr.scrollTop = wr.scrollHeight
    })
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
function refresh(){
    localStorage.clear()
}
