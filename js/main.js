function show() {
    let drop = document.querySelector(".drop-down")
    let layer = document.querySelector(".fade-layer")

    drop.classList.toggle("show");
    layer.classList.toggle("visible");
}

let btn = document.querySelector(".menu-button")
let layer = document.querySelector(".fade-layer")

btn.addEventListener("click" ,show);
layer.addEventListener("click",show);







