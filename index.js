
const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "We love Programming!"

let idx = 1

const SPEED_CONSTANT = 400
let time = SPEED_CONSTANT/speedEl.value


const writeText = () => {
    textEl.innerHTML = text.slice(0,idx)

    idx++;

    if(idx>text.length){
        idx=1
    }

    setTimeout(writeText,time)
}

writeText()

speedEl.addEventListener("input",(e)=>{
    console.log(e)
    time = SPEED_CONSTANT/e.target.value
})


