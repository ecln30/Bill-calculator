const tipBtn = document.querySelectorAll(".tipbtn")
const tip = document.getElementById("tip")
const sum = document.getElementById("total")
const Bill = document.querySelector(".item")
const reset = document.querySelector(".reset-btn")
const person = document.querySelector(".number")
const custom = document.querySelector("#custom")
const arr = []

custom.addEventListener("input", Custom)
reset.addEventListener("click", Reset)
person.addEventListener("input", Total)
tipBtn.forEach(item => {
    item.addEventListener("click", changeColor)
})


function Custom() {
    let percent = custom.value
    console.log(typeof custom.value)
     parseInt(custom.value)
     tip.value = "$" + ( Bill.value * percent / 100).toFixed(2)
      arr.push(percent)
      if( tip.value === "$NaN")
      tip.value = ''
     localStorage.setItem("nums", JSON.stringify(arr))
    
}


function changeColor(e) {
    let el = e.target
    if(el.matches("#custom")) return
    el.classList.toggle("cyan")
    const content = el.textContent.replaceAll("%", "")
    arr.push(content)
    localStorage.setItem("nums", JSON.stringify(arr))
    Tip()
    
}

function Tip() {
    
    let percent = arr.pop()
    tip.value = "$" + ( Bill.value * percent / 100).toFixed(2)
    
    if (!tip.value === ""){
        arr.length = ""
    }
}


function Total() {
    
    let data = JSON.parse(localStorage.getItem("nums"))
    let percent = data.pop()
    if(person.value == " " || person.value == 0) {
       sum.value = "$" + (Bill.value * percent / 100 * 1).toFixed(2) 
    }
    sum.value = "$" + (Bill.value * percent / 100 / person.value).toFixed(2)

}

    
function Reset() {

    arr.length = ""
    localStorage.clear()
    location.reload()
}



