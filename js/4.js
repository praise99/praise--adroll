// const rbs = document.querySelectorAll('input[name="radio"]');
//     let selectedValue;
//     for (const rb of rbs) {
//         if (rb.checked) {
//             selectedValue = rb.value;
//             break;
//         }
//     }
// alert(selectedValue);
let noOfOrder=JSON.parse(localStorage.getItem("noOfOrder"))
let avgOfOrder=JSON.parse(localStorage.getItem("avgOfOrder"))
let visitors=JSON.parse(localStorage.getItem("visitors"))
let productCost=JSON.parse(localStorage.getItem("productCost"))
let adSpend=JSON.parse(localStorage.getItem("adSpend"))

let radioanswer=JSON.parse(localStorage.getItem("product"))

let finish=`Based on estimated figures from ${radioanswer} companies, we recommend:`


let topic=document.querySelector(".head-title7")
topic.textContent=finish
let final=1
let mod1=document.querySelector(".mod1")
let mod2=document.querySelector(".mod2")
let mod3=document.querySelector(".mod3")
let mod4=document.querySelector(".mod4")
let pick=document.querySelector(".i")
let pick1=document.querySelector(".i2")
let pick2=document.querySelector(".i3")
let pick3=document.querySelector(".i4")
let price=document.querySelector(".price")

let new5=document.querySelector(".new")

price.innerHTML=`$ ${final}`
new5.innerHTML=`${visitors}`



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

let adjust=document.querySelector(".bukun")
let rest=document.querySelector(".rest")
let rest2=document.querySelector(".subtitute")
rest2.classList.add("hide")
rest.classList.add("hide")

let calcResult=((Number(avgOfOrder)-Number(productCost)*Number(noOfOrder))/(Number(adSpend)))
let result=document.querySelector(".realtor")
result.innerHTML=`$ ${calcResult.toFixed(2)}`

adjust.addEventListener("click",()=>{
    adjust.classList.add("hide")
    rest.classList.remove("hide")
    price.classList.add("hide")
    rest2.classList.remove("hide")
    rest2.value=""
})
rest.addEventListener("click",()=>{
    if(rest2.value !=""){
        let final2=rest2.value
        price.innerHTML=`$ ${final2}`
        let calResult=(Number(avgOfOrder)-Number(productCost)*Number(noOfOrder)/Number(final2 ))
       result.innerHTML=`$ ${calResult.toFixed(2)}`
    }
    adjust.classList.remove("hide")
    rest.classList.add("hide")
    price.classList.remove("hide")
    rest2.classList.add("hide")
    

})

// (Number(noOfOrder)*Number(avgOfOrder)*Number(visitors))

 