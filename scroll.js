let box = document.querySelector("#section1")
window.addEventListener("scroll", function(){
    if(this.scrollY > 150){
        box.classList.add("new")
    }
})


let boxTwo = document.querySelector("#section2")
window.addEventListener("scroll", function(){
    if(this.scrollY > 600){
        boxTwo.classList.add("new")
    }
})
let boxThree = document.querySelector("#section3")
window.addEventListener("scroll", function(){
    if(this.scrollY > 1200){
        boxThree.classList.add("new")
    }
})

