let colorBlock = document.querySelector("abc-def");
let colors = colorBlock.querySelectorAll("li");
let btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
   e.preventDefault();
   colors.forEach((li) => (li.style.color = "black"));
});