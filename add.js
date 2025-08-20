
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
// const o=()=>document.body.style.backgroundColor="orange";

const button=document.getElementById("btn");
button.addEventListener("click",()=>
    {
    console.log("click");
    const inputType=document.getElementById("nam");
    const name=inputType.value;
    const paragraph=document.getElementById("para");
    paragraph.innerText=name;
    inputType.value="";
})

const button2=document.getElementById("btn2");
button2.addEventListener("click",function(){

    const message=document.getElementById("comment");
    const msg=message.value;

    const para2=document.getElementById("paragraph");
    const newPara=document.createElement("p");
    newPara.classList.add("style")
    newPara.innerText=msg;
    para2.append(newPara);
    message.value="";
})
 