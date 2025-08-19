
const yellow=document.getElementById("Yellow");
yellow.onclick=y;
function y(){
    document.body.style.backgroundColor="yellow";
}

const red=document.getElementById("Red");
red.onclick=r;
function r(){
    document.body.style.backgroundColor="red";
}

const blue=document.getElementById("Blue");
blue.onclick=()=>document.body.style.backgroundColor="blue";

const orange=document.getElementById("Orange");
orange.addEventListener("click",o);
// orange.onclick=o;

function o(){
    document.body.style.backgroundColor="orange"
}
// const o=()=>document.body.style.backgroundColor="orange"