

let button = document.getElementById("moveButon")

button.onmouseover = function(){
    button.style.position = "absolute";
    button.style.left = Math.random()*90 + "%";
    button.style.top = Math.random()*90 + "%";
};