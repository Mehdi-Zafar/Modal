const hambutton = document.querySelector(".hambutton");
const modal = document.querySelector("div.container");
const closebutton = document.querySelector(".closebutton");
hambutton.addEventListener("click", function () {
  modal.classList.toggle("show-modal");
  modal.classList.toggle("hide-modal");
});
closebutton.addEventListener("click", function () {
  modal.classList.add("hide-modal");
  modal.classList.remove("show-modal");
});

// if(modal.classList.contains("show-sidebar")){
//   document.body.style.filter = "blur(5px)";
// }

// modal.addEventListener("blur",() => {
//   // modal.classList.add("hide-sidebar");
//   // modal.classList.remove("show-sidebar");
//   console.log('blurred');
// })

// modal.onblur = ()=>{
//   modal.classList.add("hide-sidebar");
//   modal.classList.remove("show-sidebar");
// }

