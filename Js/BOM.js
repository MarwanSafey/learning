/* 
BOM [Browser Object Model]
- Introduction
 - Window Object Is The Browser Window
 - Window Contain The Document Object
 - All Global Variables And Objects And Functions Are Members Of Window Object
   - Test Document And Console
- What Can We Do With Window Object ?
 - Open A New Tab In Same Window (Open)
 - Close Current Tab Or Window(Close)
 - Resize Window
 - Print Document
 - Run Code After Period Of Time Once or More
 - Fully Control The URL
 - Save Data Inside Browser To Use Later 
*/

/* 
BOM [Browser Object Model]
- alert(Message) => Need No Response Only Ok Available
- confirm(Message) => Need Response And Return A Boolean
- prompt(Message, Default Message) => Collect Data
*/

// window.alert("Test");
// this.alert("Test");
// alert("Test");

/* let confirmMsg = confirm("Are You Sure?");

console.log(confirmMsg);

if (confirmMsg === true) {
    console.log("Item Deleted");
} else {
    console.log("No Item Deleted") ;
} */

// let promptMsg = prompt("Good Day To You?", "Day in 3 letters");

// console.log(promptMsg);

/* 
BOM [Browser Object Model]
- setTimeout(Function, Timeout, Additional Params)
- clearTimeout(Identifier)
*/

/* setTimeout(function () {
    console.log(`Msg`);
}, 3000); */


/* setTimeout(sayMsg, 3000);

function sayMsg() {
    console.log(`Iam Message`);
} */


/* setTimeout(sayMsg, 3000, "Osama", 34);

function sayMsg(user, age) {
    console.log(`Iam Message ${user} his age: ${age}`);
}

 */

/* 
BOM [Browser Object Model]
- setInterval(Function, Millseconds, Additional Params)
- clearInterval(Identifier)
*/


/* setInterval(function () {
    console.log(`Msg`);
}, 3000); */

/* setInterval(sayMsg, 3000);

function sayMsg() {
    console.log(`Iam Message`);
}  */


/* setInterval(sayMsg, 3000, "Osama", 34);

function sayMsg(user, age) {
    console.log(`Iam Message ${user} his age: ${age}`);
} */


/* let  div = document.querySelector("div");

function countdown() {
    div.innerHTML -= 1;
    if (div.innerHTML == "0") {
        clearInterval(counter)
    }
}

let counter =  setInterval(countdown, 1000) */

/* 
BOM [Browser Object Model]
- location Object
 - href Get / Set [URL || Hash || File || Mail]
 - host
 - hash
 - protocol
 - reload()
 - replace()
 - assign()
*/

// console.log(location);
// console.log(location.href);

// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);  get the port number
// console.log(location.hostname); get the name of the website without https and 

// console.log(location.protocol); get the protocol name (http, https,...)

// console.log(location.hash); get after the hash

//location.reload() reload the page

// location.replace(...)  remove the current page from history and go to the given one
// location.assign(...)   navigate to this page without remove the current page from history

/* 
BOM [Browser Object Model]
- open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Rep)
- close()
- Window Features
 - width [Num]
 - height [Num]
 - left [Num]
 - top [Num]

Search
- Window.Open Window Features
*/

setTimeout(function() {
    window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=100")
}, 2000);