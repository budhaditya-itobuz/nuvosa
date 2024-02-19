const body = document.querySelector("#body");
const toggler = document.getElementById("toggle");
toggler.setAttribute("src", "./images/navbar/moon-solid.svg");

toggler.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (toggler.getAttribute("src") != "./images/navbar/sun-solid.svg")
    toggler.setAttribute("src", "./images/navbar/sun-solid.svg");
  else {
    toggler.setAttribute("src", "./images/navbar/moon-solid.svg");
  }
});
