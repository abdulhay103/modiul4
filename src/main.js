const pTag = document.getElementById("pTag");
const btn = document.getElementById("btn");


let array = [5, 4, 6, 8, 9, 12]

let checkNum = array.every((num)=>{
   num >10
})

console.log(checkNum);
pTag.innerText = checkNum