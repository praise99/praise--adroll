// localStorage.clear()
let submitThree=document.getElementById("submitTwo")
submitThree.addEventListener("click",()=>{
    let questionThree=document.getElementById("questionTwo").value
    localStorage.setItem("productCost",JSON.stringify(questionThree))

})