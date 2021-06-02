const product = () => {
  const btn = document.querySelector("#btn");
  // handle click button
  btn.onclick = function () {

    // const rbs = document.querySelectorAll('input[name="radio"]');
    const radio1 = document.querySelector(".radio1");
    const radio2 = document.querySelector(".radio2");
    const radio3 = document.querySelector(".radio3");
    const radio4 = document.querySelector(".radio4");
    const radio5 = document.querySelector(".radio5");
    const radio6 = document.querySelector(".radio6");
    const radio7 = document.querySelector(".radio7");
    const radio8 = document.querySelector(".radio8");
    const radio9 = document.querySelector(".radio9");
    const radio10 = document.querySelector(".radio10");
    const radio11 = document.querySelector(".radio11");
    const radio12 = document.querySelector(".radio12");
    const radio13 = document.querySelector(".radio13");
    const radio14 = document.querySelector(".radio14");
    const bd = document.querySelectorAll(".container");
    let selectedValue;
    if (radio1.checked) {
      selectedValue = `Arts, Entertainment & Education`;
    } else if (radio2.checked) {
      selectedValue = `Automotive & Sports`;
    } else if (radio3.checked) {
      selectedValue = `Business & Careers`;
    } else if (radio4.checked) {
      selectedValue = `Family, Parenting & Society`;
    } else if (radio5.checked) {
      selectedValue = `Health, Fitness & Food`;
    } else if (radio6.checked) {
      selectedValue = `Home/Garden, Pets & Hobbies`;
    } else if (radio7.checked) {
      selectedValue = `News, Politics & Law`;
    } else if (radio8.checked) {
      selectedValue = `Personal Finance`;
    } else if (radio9.checked) {
      selectedValue = `Real Estate`;
    } else if (radio10.checked) {
      selectedValue = `Retail`;
    } else if (radio11.checked) {
      selectedValue = `Style & Fashion`;
    } else if (radio12.checked) {
      selectedValue = `Technology & Computing`;
    } else if (radio13.checked) {
      selectedValue = `Travel`;
    } else {
      selectedValue = `Other`;
    }
    localStorage.setItem("product", JSON.stringify(selectedValue));
  };
};
product();

//  const rbs = document.querySelectorAll('input[name="radio"]');
//   for (const rb of rbs) {
//       if (rb.checked) { 
//         console.log("push")
//         // btn.href="./Q2.html" 
//         btn.setAttribute("onclick","location.href='./Q2.html'")                    
//       }else{
//         console.log("push3333")
//         btn.setAttribute("onclick","location.href='#'")                     
//       }
//   }