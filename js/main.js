let hamburger = document.getElementById("hamburger");
let menu = document.getElementById("menu");
let close = document.getElementById("close");
let hdiv = document.getElementById("hamburger-div");

hamburger.addEventListener("click", ()=>{
    close.classList.toggle("hidden");
    hdiv.classList.add("hidden");
    menu.classList.toggle("hidden");
})

close.addEventListener("click",() =>{
    menu.classList.toggle("hidden");
    close.classList.toggle("hidden");
    hdiv.classList.toggle("hidden");
})


