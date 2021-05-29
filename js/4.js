// const rbs = document.querySelectorAll('input[name="radio"]');
//     let selectedValue;
//     for (const rb of rbs) {
//         if (rb.checked) {
//             selectedValue = rb.value;
//             break;
//         }
//     }
// alert(selectedValue);
let firstAnswer=JSON.parse(localStorage.getItem("firstAnswer"))
let secondAnswer=JSON.parse(localStorage.getItem("secondAnswer"))
let thirdAnswer=JSON.parse(localStorage.getItem("thirdAnswer"))

let radioanswer=JSON.parse(localStorage.getItem("product"))

let finish=`Based on estimated figures from ${radioanswer} companies, we recommend:`


let topic=document.querySelector(".head-title7")
topic.textContent=finish
let final=(Number(firstAnswer)*Number(secondAnswer)*Number(thirdAnswer))
let mod1=document.querySelector(".mod1")
let mod2=document.querySelector(".mod2")
let mod3=document.querySelector(".mod3")
let mod4=document.querySelector(".mod4")
let pick=document.querySelector(".i")
let pick1=document.querySelector(".i2")
let pick2=document.querySelector(".i3")
let pick3=document.querySelector(".i4")
let price=document.querySelector(".price")
price.innerHTML=`$ ${final}`

pick.addEventListener("mouseenter",()=>{
    mod1.classList.add("block")
})
pick1.addEventListener("mouseenter",()=>{
    mod2.classList.add("block")
})
pick2.addEventListener("mouseenter",()=>{
    mod3.classList.add("block")
})
pick3.addEventListener("mouseenter",()=>{
    mod4.classList.add("block")
})
pick.addEventListener("mouseleave",()=>{
    mod1.classList.remove("block")
})
pick1.addEventListener("mouseleave",()=>{
    mod2.classList.remove("block")
})
pick2.addEventListener("mouseleave",()=>{
    mod3.classList.remove("block")
})
pick3.addEventListener("mouseleave",()=>{
    mod4.classList.remove("block")
})