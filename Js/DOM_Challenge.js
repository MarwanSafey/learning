let myForm = document.querySelector("form");
let number = document.querySelectorAll("input");
let selected = document.querySelector("select");
let result = document.querySelector(".results");

//css for form
myForm.style.display = "flex";
myForm.style.flexDirection = "column";
myForm.style.margin = "auto";
myForm.style.textAlign = "center";
myForm.style.gap = "15px";

//css for inputs
number[2].style.backgroundColor = "#009688";
number[2].style.border = "none";
number[2].style.color = "white";
number[2].style.borderRadius = "5px";

selected.style.width = "325px";
selected.style.margin = "auto";
selected.style.padding = "10px";

number.forEach(function (e) {
    e.style.padding = "10px";
    e.style.width = "300px";
    e.style.margin = "auto";
  });

//css for result
result.style.display = "grid";
result.style.gridTemplateColumns = "repeat(auto-fill , minmax(350px,1fr))";
result.style.gap = "30px";
result.style.marginTop = "20px";

myForm.onsubmit = function (e) {
  document.querySelectorAll(".box").forEach(function (e) {
    e.remove();
  });
  for (i = 0; i < number[0].value; i++) {
    let myElment = document.createElement(`${selected.value}`);
    result.appendChild(myElment);
    myElment.className = "box";
    myElment.title = "Element";
    myElment.id = `id-${i + 1}`;
    myElment.textContent = `${number[1].value}`
    //css
    myElment.style.backgroundColor = "rgb(244 67 54 / 90%)";
    myElment.style.color = "white";
    myElment.style.padding = "10px";
    myElment.style.borderRadius = "6px";
    myElment.style.fontSize = "20px";
  };
  e.preventDefault();
};