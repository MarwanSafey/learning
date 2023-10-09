/* 
DOM
- What is DOM : Document Object Model
- DOM Selectors
-- Find Element by ID
-- Find Element by Tag Name
-- Find Element by Class Name
-- Find Element by CSS Selectors
-- Find Element by Collection
----- title
----- body
----- images
----- forms
----- links
*/

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElements = document.getElementsByClassName("my-span");
let myQueryElements = document.querySelector(".my-span");
let myQueryAllElements = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElements[1]);
console.log(myQueryElements);
console.log(myQueryAllElements);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);

/* 
DOM [Get / Set Elements Content And Attributes]
- innerHTML
- textContent
- Change Attributes Directly
- Change Attributes with Methods
    - getAttribute
    - setAttribute

Search
- innerText
*/

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");

/* 
DOM [Check Attributes]
- Element.attributes
- Element.hasAttribute
- Element.hasAttributes
- Element.removeAttribute
*/

console.log(document.getElementsByTagName("p")[2].attributes);

let myP = document.getElementsByTagName("p")[2];

if (myP.hasAttribute("data-src")) {
    if (myP.getAttribute("data-src") === "") {
        myP.removeAttribute("data-src");
    } else {
        myP.setAttribute("data-src", "New Value");
    }
} else {
    console.log(`Not Found`)
}

if (myP.hasAttributes()) {
    console.log(`Has Attributes`);
}

if (document.getElementsByTagName("div")[2].hasAttributes()) {
    console.log(`Has Attributes`);
} else {
    console.log('Div Has No attributes');
}

/* 
DOM [Create Elements]
 - createElement
 - createComment
 - createTextNode
 - createAttribute
 - appenChild
*/

let myElement1 = document.createElement("div");
let myAtt = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");

myElement1.className = "Product";
myElement1.setAttributeNode(myAtt);   // to change it in the future
myElement1.setAttribute("data-test", "Testing");

// Apped Comment to Element
myElement1.appendChild(myComment);

// Append Text to Element
myElement1.append(myText);

// Append Element to Body
document.body.appendChild(myElement1);

/* 
Dom [Create Elements]
 - Practice Product with Heading and Paragraph
*/

let myElement3 = document.createElement("div");
let heading = document.createElement("h3");
// let text2 = document.createTextNode("This is H3")
// heading.appendChild(text2);
heading.textContent = "This is the Product";

let para = document.createElement("p");
para.textContent = "This is the Product Description";


myElement3.className = "Product 2";

myElement3.appendChild(heading);
heading.appendChild(para);

document.body.appendChild(myElement3)

/* 
DOM [Deal With Childrens]
 - children
 - childNodes
 - firstChild
 - lastChild
 - firstElementChild
 - lastElementChild
*/

let myElement4 = document.getElementsByTagName("div")[3];

console.log(myElement4);
console.log(myElement4.children);
console.log(myElement4.children[0]);
console.log(myElement4.childNodes);
console.log(myElement4.childNodes[0]);
console.log(myElement4.firstChild);
console.log(myElement4.lastChild);
console.log(myElement4.firstElementChild);
console.log(myElement4.lastElementChild);

/* 
DOM [Events]
- Use Events On HTML
- Use Events On JS
  - onclick
  - oncontextmenu   : on right click you will get special menu
  - onmouseenter
  - onmouseleave

  - onload
  - onscroll
  - onresize

  - onfoucus
  - onblur
  - onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onclick = function() {
    console.log("Clicked");
};

window.onscroll = function() {
    console.log("Scroll");
};

/* 
DOM [Events]
 - Validate Form Practice
 - Prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

console.log(userInput);
console.log(ageInput);

document.forms[3].onsubmit = function (e) {
    let userValid = false;
    let ageValid = false;

    if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
    }

    if (ageInput.value !== "") {
        ageValid = true;
    }

    if (userValid === false || ageValid === false) {
        e.preventDefault();
    }
};

document.links[3].onclick = function(event) {
    console.log(event);
    event.preventDefault();
}

/* 
DOM [Events Simulation]
- click
- focus
- blur
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function() {
    two.focus();
};

one.onblur = function () {
    document.links[3].click();
};

/*
DOM [Class List]
- classList
 - lenght
 - contains
 - item(index)
 - add/remove
 - toggle
*/

let div = document.getElementById("my-div");

console.log(div.classList);
console.log(typeof div.classList);
console.log(div.classList.contains("osama"));
console.log(div.classList.contains("show"));
console.log(div.classList.item("3"));

div.onclick = function () {
    div.classList.add("add-one", "add-two");
    //div.classList.remove("add-one", "add-two");
    //div.classList.toggle("add-one", "add-two");  toggle: add if it doesn't exist and remove if it exist
};

/* 
DOM [CSS]
- style
- cssText
- removeProperty(propertyName) [Inline, Stylesheet]
- setProperty(propertyName, Value, priority)
*/

div.style.color = "red";
div.style.fontWeight = "bold";

//OR

div.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

div.style.removeProperty("color");
div.style.setProperty("font-size", "40px", "important");

console.log(document.styleSheets[0])
document.styleSheets[0].rules[0].style.removeProperty("line-height");
document.styleSheets[0].rules[0].style.setProperty("background-color", "red", "important");

/* 
DOM [Deal With Elements]
- before [Element || String]
- after [Element || String]
- append [Element || String]
- prepend [Element || String]
- remove
*/

let createP = document.createElement("p");

div.after(createP);
div.prepend("Hello From JS ");

//div.remove();

/* 
DOM [Traversing]
- nextSibling
- previousSibling
- nextElementSibling
- previousElementSibling
- parentElement
*/

let span = document.querySelector(".Two");

console.log(span.nextElementSibling);

console.log(span.parentElement);

span.onclick = function() {
    span.parentElement.style.opacity = '0';
    // OR
    // span.parentElement.remove();
};

/* 
DOM [Cloning]
- cloneNode(Deep)
*/

let myP1 = document.querySelector(".my-p").cloneNode(true);
let myDiv = document.querySelectorAll("div")[1];
console.log(myDiv);

myP.id - `${myP.id}-clone`;

myDiv.appendChild(myP1);

/*
DOM [Add Event Listener]
- addEventListener
- use Without On
- Attach Multiple Events
- Error Test

Search
- Capture & Bubbling JavaScript
- removeEventListener
 */

let myP2 = document.querySelector("p");
console.log(myP2);

// myP2.onclick = function () {
//     console.log("Message From OnClick");
// };

// myP2.onclick = one1;
// myP2.onclick = two2;

// function one1() {
//     console.log("Message From OnClick 1");
// }

// function two2() {
//     console.log("Message From OnClick 2");
// }

// myP2.addEventListener("click", function () {
//     console.log("Message From OnClick 1 Event");
// });

// myP2.addEventListener("click", one1);
// myP2.addEventListener("click", two2);


myP2.onclick = function () {
    let newP = myP2.cloneNode(true);
    newP.className = "clone";
    document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () {
//     console.log("Iam Cloned");
// };

document.addEventListener("click", function (e) {
    if (e.target.className === "clone") {
        console.log("Iam Cloned");
    }
});