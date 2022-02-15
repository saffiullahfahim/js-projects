let btn = document.querySelector(".btn");
let color;

btn.onclick = function(){
    color =  "#" + String(Math.ceil(Math.random()*999)).padStart(3, "0").toString(16);
    console.log(color);
    document.body.style.backgroundColor = color;
}