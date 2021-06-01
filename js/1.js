// localStorage.clear()
let submitOne=document.getElementById("submitOne")
submitOne.addEventListener("click",()=>{
    let questionOne=document.getElementById("questionOne").value
    localStorage.setItem("noOfOrder",JSON.stringify(questionOne))
})
