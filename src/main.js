const pTag = document.getElementById("pTag");
const btn = document.getElementById("btn");


let array = [5, 4, 6, 8, 9, 12]

let result = 0
// for (let i = 0; i <= array.length; i++) {
//     let sum = result + array[i]
//     result = sum

// }

// for (let i of array) {
//     let sum = result + i
//     result = sum

// }

function switchCase() {
    let date = new Date()
    let toDay = date.getDay();
    let day = "";
    switch (toDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    pTag.innerText = `Today is ${day}`
    setTimeout(() => {
        pTag.innerText = ""
    }, 5000);
}
