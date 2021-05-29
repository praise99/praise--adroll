// localStorage.clear()
let submitTwo=document.getElementById("submitTwo")
submitTwo.addEventListener("click",()=>{
    let questionTwo=document.getElementById("questionTwo").value
    localStorage.setItem("secondAnswer",JSON.stringify(questionTwo))
})