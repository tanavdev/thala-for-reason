const memeinp = document.querySelector("#memeinp")
const memebtn = document.querySelector("#memebtn")
const memeheading = document.querySelector("#memeheading")
const memeimg = document.querySelector("#memeimg")
const dhoni = document.getElementById("dhoni");
const moyeaud = document.getElementById("moye");

function checkINT(str) {
    let numString = Math.abs(str).toString(); // Convert number to string
    let sum = 0;

    for (let i = 0; i < numString.length; i++) {
        let digit = parseInt(numString[i]);
        sum += digit;
    }

    return sum;
}

memebtn.addEventListener("click", () => {
    if (memeinp==""){
        
    } else {
    if (checkINT(memeinp.value) == 7) {
        thala(memeinp.value)
    } else if(memeinp.value.length === 7) {
        thala(memeinp.value)
    } else {
        moye(memeinp.value)
    }}

})

function thala(str) {
    dhoni.play()
    moyeaud.pause()
    memeheading.innerText = `"${str}" is THALA for a reason.`
    memeimg.src = "ms-dhoni.webp"
}

function moye() {
    dhoni.pause()
    moyeaud.play()
    memeheading.innerText = "MOYE MOYE"
    memeimg.src = "moye-moye.jpeg"
}