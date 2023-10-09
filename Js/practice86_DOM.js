let id = document.getElementById("elzero");
console.log(id);

let class1 = document.getElementsByClassName("element")[0];
console.log(class1);

let name1 = document.getElementsByName("js")[0];
console.log(name1);

let name2 = document.getElementsByTagName("div")[0];
console.log(name2);

let element1 = document.querySelector("div");
console.log(element1);

let element2 = document.querySelector("#elzero");
console.log(element2);

let element3 = document.querySelector(".element");
console.log(element3);

let element4 = document.querySelector('[name="js"]');
console.log(element4);

let element5 = document.querySelectorAll("div")[0];
console.log(element5);

let element6 = document.querySelectorAll("#elzero")[0];
console.log(element6);

let element7 = document.querySelectorAll(".element")[0];
console.log(element7);

let element8 = document.querySelectorAll('[name="js"]')[0];
console.log(element8);

console.log(document.body.firstElementChild);
console.log(document.body.childNodes[1]);
console.log(document.body.children[0]);

// ---------------------------------------------------------------------------

for (let i = 0; i < document.images.length; i++) {
    document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  document.images[i].alt = "Elzero Logo";
    
};

// ------------------------------------------------------------------------------ 

let elementD = document.querySelector('[name="dollar"]');
console.log(elementD);

let egy = document.querySelector(".result");
console.log(egy);

elementD.oninput = function () {
  return egy.innerHTML = `{${elementD}} USD Dollar = {${(elementD.value * 40).toFixed(2)}} Egyptian Pound`
};

elementD.style.width = "250px";
elementD.style.padding = "10px";

// ----------------------------------------------------------------------------------

let div1 = document.querySelector(".one");
let div2 = document.querySelector(".two");
console.log(div1);
console.log(div2);

let content1 = div1.textContent;
let content2 = div2.textContent;
console.log(content2);

div1.title = div1.className;
div2.title = div2.className;
console.log(div1.title);
console.log(div2.title);

div1.innerHTML = content2;
div2.textContent = `${content1} ${div2.attributes.length}`;