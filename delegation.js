
// const items=document.getElementsByClassName("list");
// for(const item of items){
//     item.addEventListener("click",function(event){
//         event.target.parentNode.removeChild(event.target);
//     })};
const items=document.getElementById("order")
items.addEventListener("click",(event)=>event.target.parentNode.removeChild(event.target));

const button4=document.getElementById("btn4");
button4.addEventListener("click",()=>{
const orderList=document.getElementById("order");
const newList=document.createElement("li");
newList.innerText="You are my dream girl.";
orderList.append(newList);
})
