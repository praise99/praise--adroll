// localStorage.clear()
let submitThree=document.getElementById("submitThree")
submitThree.addEventListener("click",()=>{
    let questionThree=document.getElementById("questionThree").value
    localStorage.setItem("thirdAnswer",JSON.stringify(questionThree))

})