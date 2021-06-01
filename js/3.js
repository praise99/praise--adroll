// localStorage.clear()
let submitThree=document.getElementById("submitThree")
submitThree.addEventListener("click",()=>{
    let questionThree=document.getElementById("questionThree").value
    localStorage.setItem("visitors",JSON.stringify(questionThree))

})