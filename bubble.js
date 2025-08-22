
const section=document.getElementById("sec");
section.addEventListener("click",()=>console.log("click"));

const divi=document.getElementById("divi")
divi.addEventListener("click",()=>console.log("divi click"));

const list=document.getElementById("listy");
list.addEventListener("click",(event)=>{
    console.log("list click");
    event.stopPropagation();
})
