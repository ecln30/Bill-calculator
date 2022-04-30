













const tip = document.querySelectorAll(".tipbtn")

tip.forEach(item => {
    item.addEventListener("click", changeColor)
})


function changeColor(e) {
     e.target.classList.toggle("cyan")
}








