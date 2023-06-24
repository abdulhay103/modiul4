const pTag = document.getElementById("pTag");
const btn = document.getElementById("btn");


let array = [5, 4, 6, 8, 9, 12]

let result = 0
let newArray = array.map((value, index)=>{
    return value * 3
})
pTag.innerText = newArray