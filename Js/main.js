// window.alert("Hello From JS File");
document.write ("<h1>Hello <span>Page</span></h1>");
// document.createElement("");
console.log("Hello ALLL");

/*
Console Methods
 -log
 -error
 -table

Web API
 -JS using the Web API to do what i want on the console
 so the Console is from the API

Styling Console
 -Directive %c
*/

console.log("Log");
console.error("Error");
console.table(["osama","Ahmed","Sayed"]);

console.log("Hello From %cJS %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px");

// ECMAScript = ES6 

/*
Data Types Intro:
 -String
 -Number
 -Array => Object
 -Object
 -Boolean
 */
// string
console.log("Marwan Safey");
console.log(typeof "Marwan Safey");
// number
console.log(typeof 5000);
console.log(typeof 5000.99);
// array
console.log(typeof [10, 15, 17]);
console.log(typeof ["os", "Ah", "Sa"]);
// object
console.log(typeof {name: "Osama", age:17, country:"Eg"});
// boolean
console.log(typeof true);
console.log(typeof false);
// undefined
console.log(typeof undefined);
// object
console.log(typeof null);

var user = "Sayed" ,
     age = 37;

console.log(user);
console.log(age);

console.log(hello);

hello.innerHTML = "Option";

/*
Var
  -Redeclare (Yes)
  -Access Before Declare (Undefined)
  -Variable Scope Drama [Added To Windoow]()
  -Block or Function Scope

Let
  -Redeclare (No => Error)
  -Access Before Declare (Error)
  -Variable Scope Drama []()
  -Block or Function Scope

Const
  -Redeclare (No => Error)
  -Access Before Declare (Error)
  -Variable Scope Drama []()
  -Block or Function Scope
*/

console.log('Ezero Web "School"');
console.log("Ezero Web 'School'");
console.log("Ezero Web \"School\"");
console.log('Ezero \\ Web \'School\'');
console.log('Ezero \
Web \
"School"');
console.log("Ezero\nWeb\nSchool");

// Concatenation

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

document.write(a + " " + b);
console.log(a,b);

console.log(a + " \"\" " + b + "\n" + c + " " + d);
console.log(`${a} "" '' \\ ${b}
${c} ${d}`);

let title = "Elzero";
let desc = "Elzero Web School";

let markUp =` 
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;
document.write(markUp);

/*
1- Create 3 Variables [Title, Description, Date]
  All in one statment
  Variable name must be two words
  title content is "Elzero"
  description content is "Elzero Web School"
  date content is "25/10"
2- Create Variable contains Div contains
  H3 for title
  p for paragraph
  span for time
3- Add This card to page 4 Times
4- Use template literals for concatenate
 */

var myTitle ="Elzero",
    myDescription="Elzero Web School",
    myDate="25/10";

var myCard =`
<div class="card">
<h3>Hello ${myTitle}</h3>
<p>${myDescription}</p>
<span>${myDate}</span>
</div>
`;

let result = myCard.repeat(4)

document.write(result);

/*
 Arithemtic Operators
 + Addition
 - Subtraction
 * Multiplication
 / Division 
 ** Exponentiation (ES7)
 % Modulus (Division Remainder)
 ++ Increment [Post / Pre]
 -- Decrement [Post / Pre]
*/

/*
- + Unary Plus [Return Number If Its Not Number]
- - Unary Negation [Return Number If Its Not Number + Negates it]
Tests
 - Normal Number
 - String Number
 - String Negative Number
 - String Text
 - Float
 - Hexadecimal Numeral System => 0xFF
 - null
 - false
 - true
Type Coercion (Type Casting)
 - +
 - -
 - "" -2
 - false - true
Number
 - Double Precision
 - Syntactic Sugar "_"
 - e
 - **
 - With Decimal
 - Number + BigInt
 - Number Min Value
 - Number Mox Value
 */

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 234343565252);

/*
Number Methods
 - Two Dots To Call A Methods
 - toString()
 - toFixed()
 - parseInt()
 - parseFloat()
 - isInteger() [ES6]
 - isNaN() [ES6]
 */

console.log((100).toString());
//=
console.log(100.10.toString());

console.log(100.5555.toFixed(2));

console.log(Number("100 osama"));
console.log(+"100 osama");
console.log(parseInt("100 osama"));
console.log(parseInt("osama 100 osama"));
console.log(parseInt("100.500 osama"));
console.log(parseFloat("100.500 osama"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));

console.log(Number.isNaN("osama" / 20));

/*
Math Object
 - round()
 - ceil()
 - floor()
 - min()
 - max()
 - pow()
 - random()
 - trunc() [ES6]
 */

console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));

console.log(Math.random());

console.log(Math.trunc(99.5));

/*
 - Access with Index
 - Access with charAt()
 - length
 - trim()
 - toUpperCase()
 - toLowerCase()
 - chain Methods
 */

let theName = "  Ahmed  ";

console.log(theName);

console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());

/*
String Methods
 -indexOf(value [Mand], start [opt] 0)
 -lastIndexOf(value [Mand], start [opt] Length)
 -slice(start [Mand], End [opt] not include end)
 -repeat(Times) [ES6]
 -split(separator [opt], Limit [opt])
 */

 let m = "Elzero Web School";

console.log(m.indexOf("Web"));
console.log(m.indexOf("Web", 8));
console.log(m.indexOf("o")); //5
console.log(m.lastIndexOf("o")); //15

console.log(m.slice(2, 6));
console.log(m.slice(-5, -3));

console.log(m.repeat(4));

console.log(m.split("", 6));

/*
String Methods
 -substring(Start [Mand], End [Opt] not including End)
   --Start > End will swap
   --Start < 0 it start from 0
   --Use length to get last character
 -substr(start [Mand], characters to extract)
   --start >= length = ""
   --Negative start from end
 -includes(Value [Mand], start [opt] default 0) [ES6]
 -startsWith(Value [Mand], start [opt] default 0) [ES6]
 -endsWith(Value [Mand], length [opt] default Full Length) [ES6]
*/

let n = "Elzero Web School";

console.log(n.length);

console.log(n.substring(2,6));
console.log(n.substring(6,2));
console.log(n.substring(-10,6)); // 0 - 6
console.log(n.substring(n.length - 5, n.length - 3));

console.log(n.substr(0,6));
console.log(n.substr(17));
console.log(n.substr(-3));
console.log(n.substr(-5, 2));

console.log(n.includes("Web"));
console.log(n.includes("Web", 8));

console.log(n.startsWith("E"));
console.log(n.startsWith("E", 2))
console.log(n.startsWith("zero", 2))

console.log(n.endsWith("ro", 6));

/*
Comparison Operators:
---------------------
compare value only
- == Equal
- != Not Equal

compare value + type
- === Identical
- !== Not Identical

- > Larger Than
- >= Larger than or Equal
- < Smaller Than
- <= Smaller than or Equal

Logical Operators:
------------------
- !  Not
- && And
- || Or
*/

/* 
Control Flow:
--------------
- if 
- else if
- else
*/

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";

if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}


console.log(price);


// conditional (Ternary) operator

let Name = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}
// condition ? if True : if False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result1 = theGender === "Male" ? "Mr" : "Mrs";

document.write(result1);

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${Name}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 to 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");

/*
Logical Or ||
  -Null + Undefined + Any Falsy Value
Nullish Coalescing operator ??
  -Null + Undefined  (only)
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let price1 = 0;

console.log(`The Price Is ${price1 || 200}`);
console.log(`The Price Is ${price1 ?? 200}`);

/*
Switch Statement
switch (expression) {
  Case 1:
   // Code Block
   break;
  Default:
   // Code Block
}
-Default Ordering
-Multiple Match
*/

let day = 2;

switch (day) {
  default:
    console.log("Unknown Day");
    break;
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
}

/*
Arrays
 -Creaate Arrays [Two Methods] new Array() + []
 -Access Arrays Elements
 -Nested Arrays
 -Change Arrays Elements
 -Check for Array Array.isArray(arr);
 */

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][0]}`);

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);

console.log(Array.isArray(myFriends));

myFriends[myFriends.length] = "Mero";

console.log(myFriends);

myFriends.unshift("Osama", "Nabil"); // add in the begining of the array
console.log(myFriends);

myFriends.push("Samah", "Eman"); //add in the end of the array
console.log(myFriends);

let first = myFriends.shift(); // remove first element in array and return it
console.log(myFriends);
console.log(`First Name is ${first}`);

let last = myFriends.pop(); // remove last element in array and return it
console.log(myFriends);
console.log(`Last Name is ${last}`);

console.log(myFriends.indexOf("Ahmed"));  // search for element and what is its index from the begining 
console.log(myFriends.indexOf("Ahmed", 2));

console.log(myFriends.lastIndexOf("Ahmed")); // search for element and what is its index from the end 
console.log(myFriends.lastIndexOf("Ahmed", -2));

console.log(myFriends.includes("Ahmed")); // if it is exist or not
console.log(myFriends.includes("Ahmed", 2));

let newArray = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
console.log(newArray);
console.log(newArray.sort().reverse()); // sort: sort the array assending depend on the first letter and reverse just reverse whatever the order

/*
Arrays Methods [Slicing]
 -slice(start [Opt], End [Opt] not including end)
 -slice() => All Array
 -if start is undefined => 0
 -negative count from end
 -if end is undefined || > Indexes => slice to the end array.length
Return New Array
 -splice(start [Mand], Deletecount [opt]-> [0 No remove], the items to add [opt])
 -if negative => start from the end
 */

let newArray1 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal","Ameer"];
console.log(newArray1);
console.log(newArray1.slice());
console.log(newArray1.slice(1));
console.log(newArray1.slice(1, 3));
console.log(newArray1.slice(-3));
console.log(newArray1.slice(1, -2));
console.log(newArray1.slice(-4,-2));
console.log(newArray1);

newArray1.splice(1, 2, "sameer", "samara");
console.log(newArray1);

/*
Arrays Methods [Joining]
 -concat(array, array) => Return A New Array
 -join(separator)
 */

 let newArray2 = ["Samar", "Sameh"];
 let newArray3 = ["Haytham", "Shady"];

 let allArray = newArray1.concat(newArray2, newArray3, "Gameel", [1, 2]);
 console.log(allArray);

 console.log(allArray.join());
 console.log(allArray.join(""));
 console.log(allArray.join(" @ "));
 console.log(allArray.join("|"));
 console.log(allArray.join("|").toUpperCase());

/*
Loop
- For
 for ([1] [2] [3]) {
  // Block Of Code
 }
- Loop On Sequences
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}
//--------------------------------------------------------

let myFriends1 = [1, 2, "Osama", "Ahmed", "Sayed", "Ali", "Amira"];
let onlyNames = [];

for (let i = 0; i < myFriends1.length; i++) {
  console.log(myFriends1[i]);
}

for (let i = 0; i < myFriends1.length; i++) {
  if (typeof myFriends1[i] === "string") {
    onlyNames.push(myFriends1[i]);
  }
}
console.log(onlyNames);

//------------------------------------------------------

let products = ["Keyboard", "Mouse", 10, 20, "Pen", "Pad", 30, 40, "Monitor"];

let color = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(10));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(10));
  console.log("Colors:");
  console.log("-".repeat(8));
  for (let j = 0; j < color.length; j++) {
    console.log(`- ${color[j]}`);
  }
  console.log("Models:");
  console.log("-".repeat(8));
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
    }
}

for (let m = 0; m < products.length; m++) {
  if (products[m] === "Pen") {
    break; // means stop the loop
  }
  console.log(products[m]);
}

for (let m = 0; m < products.length; m++) {
  if (typeof products[m] === "number") {
    continue; // means bypass this and continue the loop
  }
  console.log(products[m]);
}

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j< color.length; j++) {
    console.log(`- ${color[j]}`);
    if (color[j] === "Green") {
      break mainLoop;  // label to break the mainloop
    }
  }
}

let i = 0;

for (; ;) {
  console.log(products[i]);
  i++;
  if (i === products.length) break;
}

let showCount = 5;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`)
  for (let j = 0; j < color.length; j++) {
    document.write(`<p>${color[j]}</p>`)
  }
  document.write(`<p>${color.join(" | ")}</p>`)
  document.write(`</div>`);
}

// While Loop

let product = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];

let index = 0;

while (index < product.length) {
  console.log(product[index]);
  index += 1;
}

let l = 0;

do {
  console.log(l);
 l++;
} while (false);

console.log(l);

// Functions :
//------------

function sayHello(userName, age) {
  if (age < 20) {
    console.log(`App Is Not Suitable For You`);
  } else {
    console.log(`Hi ${userName} your Age is ${age}`);
  }
}

sayHello("Osama", 38);
sayHello("Sayed", 40);
sayHello("Ali", 18);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i == exclude) continue;
    console.log(i);
  }
}

generateYears(2000, 2024, 2020);

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i == 15) {
      return `Interruptting`;
    }
    console.log(i);
  }
}

generate(10, 20);

function sayHello(userName = "Unknown", age = "Unknown") {
 // if (age == undefined) {
 //   age = "Unknown";
 // }
 // OR
 // age = age || "Unknown";
  return `Hello ${userName} Your Age is ${age}`;
}

console.log(sayHello());

function calc(...numbers) {
  //console.log(Array.isArray(numbers));
  let result = 0;
  for (let i=0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show == "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    } 
  } else {
      document.write(`<p>Skills Is Hidden</p>`);
    }
    document.write(`</div>`);
}

showInfo("Osama", 38, 20, "No", "Html", "CSS");

// Anonymous Function (function without name)

let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));

document.getElementById("show").onclick = function () {
  console.log("Show");
};

//setInterval(function () {
 // console.log("Good");
//}, 2000);


// Example 1

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return message;
}

console.log(sayMessage("Osama", "Mohamed"));



// Example 2

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));


// Example 3

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName(){
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));

//Arrow Function

// let print = function () {
//   return 10;
// };

// let print = () => 10;

// let print = function (num) {
//   return num;
// };

// let print = num => num;

// let print = function (num1, num2) {
//   return num1 + num2;
// };

let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));

//for search
//-Execution Context
//-Lexical Enviroment

/*
Higher Order Functions
--> is a function that accepts functions as parameters and/or returns a function.

Map
-method creates a new array
-populated with the results of calling a provided a provided function on every element in the calling array.

syntax map (callBackFunction(Element, Index, Array) { }, thisArg)
-Element => The current element being processed in the array.
-Array => The Current Array

Notes
-Map Return a New Array

Examples
-Anonymous Function
-Named Function
*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray4 = [];

for (let i = 0; i < myNums.length; i++) {
  newArray4.push(myNums[i] + myNums[i]);
}
console.log(newArray4);

// Same Idea with Map using anomynous function

// let addSelf = myNums.map(function(element, index, array) {
//   console.log('Current Element => ${element}');
//   console.log('Current Index => ${index}');
//   console.log('Array => ${array}');
//   console.log('This => ${this}');
//   return element + element;
// }, 10);

// console.log(addSelf);

// * same Idea with Map using arrow function

// let addSelf = myNums.map((a) => a +a)

// console.log(addSelf);

// same Idea using name funciton

function Addition(ele) {
  return ele + ele;
}
let add = myNums.map(Addition);

console.log(add)

/* Map Practice
-swap Cases
-Inverted Numbers
-Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases.split("").map(function(ele) {
//   // condition ? True : False
//   return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase() ;
// }).join("");

// console.log(sw);


let sw = swappingCases.split("").map((ele) => (ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase())).join("");

console.log(sw);

let inv = invertedNumbers.map(function(ele) { 
  return -ele;
});
console.log(inv);

// let ign = ignoreNumbers.split("").map(function(ele) {
//   return isNaN(parseInt(ele)) ? ele : "";
// }).join("");
// console.log(ign);

/*
Filter
-method creates a new array
-with all elements that pass the test implemented by provided function. 
It returns an empty array if no element.

Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
*/

// Get Friends With Name Starts with A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterFriends = friends.filter(function(ele) {
  return ele.startsWith("A");
});
console.log(`Filtered Names: ${JSON.stringify(filterFriends)}`);
console.log(filterFriends);

//Get Even Numbers Only
let numbers2 = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers2.filter(function(el) {
  return el % 2 == 0;
});
console.log(`${evenNumbers} are only even number in given list.`);
console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers2.map(function(el) {
//   return ele + ele;
// });

// console.log(addMap);

// let addFilter = numbers2.filter(function(el) {
//   return el % 2 == 0 && typeof (el)!= 'object';
// });

// console.log(addFilter);

/*
Filter
-Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";
let smallWords = sentence.split(" ").filter(function(ele) {
  return ele.length <= 4;
}).join(" ");
console.log(smallWords); // Output : I Loeood Cooee To Ply

// Ignore Numbers
let ign = ignoreNumbers.split("").filter(function(ele) {
  return isNaN(parseInt(ele));
}).join("");
console.log(ign);

// Filter Strings + Multiply
let mix = "A13BS2ZX";
let multi = mix.split("").filter(function(ele) {
  return !isNaN(parseInt(ele));
}).map(function(ele) {
  return ele *= ele;
}).join("");
console.log(multi);

/*
Reduce and Sort Arrays of Objects by Properties using reduce() method with sort().
Example:
We have an array of objects containing name, age properties as shown below -
```javascript
const peopleArray = [
  {"name": "John", "age": 35},
  {"name": "Jane", "age": 28}];
  const sortedPeopleByAgeAsc = [...peopleArray].sort((a, b) => a
  ["age"] - b["age"]);
  for (var i=0 ;i<sortedPeopleByAgeAsc.length; ++i
    ){
      document.write(`Name:${sortedPeopleByAgeAsc[i]["name"]} Age:${
        sortedPeopleByAgeAsc[i]["age"]} <br>`);}
        ```
Reduce
-methode executes a reducer function on each element of the array, resulting in a single output value.

Syntax
reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
-Accumulator => the accumulated value previously returned in the last invocation
-Current Value=> The current element being processed in the array
-Current index=>The index of the current element being processed in the array
-Source Array=>the source array to be reduced
-initialvalue => optional parameter that sets the starting point or base case for accumulating values
* starts from index 0 if an initialValue is provided
otherwise, it starts from index 1.
*/

let nums = [10, 20, 15, 30];

let addNums = nums.reduce(function(acc, current, index, arr) {
  console.log('Acc => ${acc}');
  console.log('Current Element => ${current}');
  console.log('Current Element Index => ${index}');
  console.log('Array => ${arr}')
  console.log(acc + current);
  console.log('############');
  return acc + current;
});

console.log(add);

/*
Reduce
-Longest Word
-Remove Characters + Use Reduce
*/

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "propaganda_Two"];

let check = theBiggest.reduce(function(acc, current) {
  console.log('Acc => ${acc}');
  console.log('Current Element => ${current}');
  console.log(acc.length > current.length ? acc : current);
  console.log('############');
  return acc.length > current.length ? acc : current;
});
console.log(check);


let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let checkLetter = removeChars.filter(function(ele) {
  return ele !== '@';
}).reduce(function(acc, current) {
  return `${acc}${current}`;
});
console.log(checkLetter);

/*
- forEach
method executes a provided function once for each array element.

Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
- callBackFunction: A callback function to be executed for each item in an array.
It takes three arguments - The value of the element being processed (element), its index within the array
(index), and the entire array itself (array). It can optionally have another argument which is specified.

Note
that if you want to modify or delete elements from your original array inside foreach loop then use map()
- Doesn't return anything [Undefined]
- Break will not break the Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    //Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    //Add active class To Clicked On This Element
    ele.classList.add("active");
    //this.classList.add("active");
    //Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

/*
Higher Order Functions - Challenge

you can use
,
_
space
True => 1 => one Time Only In The Code

you can't use
-Numbers
-Letters

-You Must use [Filter + Reduce + Map + Your Knowledge]
-Order Is Not Important
-All In One Chain

*/
// ===================================================>
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split("")
  .filter(function (ele, i, arr) {
    return isNaN(ele) && ele !== "," && i !== arr.length - true;
  })
  .reduce(function (acc, current) {
    return acc === current ? acc : acc + current;
  })
  .split("_")
  .join(" ");

console.log(solution);

/* 
Object
- Dig Deeper
- Dot Notation vs Bracket Notation
- Dynamic Property Name
*/

let user1 = {
  theName: "Osama",
  "country of": "Egypt",
  country: "EG"
};

let myVar = "country";

console.log(user1.theName);
console.log(user1["theName"]);
console.log(user1["country of"]);

console.log(user1.country);
console.log(user1.myVar); // Undefined 3ashan myVar dah variable (dynamaic property name)
console.log(user1[myVar]);

/* 
Object
-Nested Object and Trainings
*/


let user2 = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  address: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function() {
    if (user2.available == true) {     // to access the available we put user2. as he will not find it in the global
      return 'Free For Work';
    } else {
      //console.log("Sorry! You are not Available");
      return 'Not Free';
    }
  },
};

console.log(user2.name);
console.log(user2.age);
console.log(user2.skills);
console.log(user2.skills.join(" | "));
console.log(user2.skills[2]);
console.log(user2.address.ksa);
console.log(user2.address.egypt.one);
console.log(user2["address"].egypt.one);
console.log(user2["address"]["egypt"].one);
console.log(user2["address"]["egypt"]["one"]);

console.log(user2.checkAv());

/* 
Object
-Create with New Keyword new Object();
*/
/* let user3 = {
  age: 20,
}; */

// OR

let user3 = new Object({
  age: 20,
});

console.log(user3);

user3.age = 38;
user3["country"] = "Egypt";

user3.sayHello = function(){
  // console.log(`Hi I am ${this.age}`);
  // alert(`${this.age}, Welcome to my website`);
  return 'Hello';
};

console.log(user3);
console.log(user3.age);
console.log(user3.country);
console.log(user3.sayHello());

/* 
Function this keyword
- this Introduction
- this Inside Object Method
-- when a Function is called as a method of an object,
-- its this is set to the object the method is called on.
- Global Object
- Test Variables with window and This
- Globla Context
- Function Context

Search
- Strict Mode
Strict mode changes previously accepted "bad syntax" into real errors. 
As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, 
this will throw an error, 
making it impossible to accidentally create a global variable.
*/


console.log(this);
console.log(this == window);

myVar1 = 100;

console.log(window.myVar1);
console.log(this.myVar1);

function sayHello() {
  console.log(this);
  return this;
};
sayHello();

console.log(sayHello() == window);

document.getElementById("show").onclick = function () {
  console.log(this);
};

let user4 = {
  age: 38,
  ageInDays: function() {
    "use strict";
    console.log(this);
    return this.age * 365;
  },
};

console.log(user4.age);
console.log(user4.ageInDays());

/* Object
- Create Object with create Method
*/

let user5 = {
  age: 40,
  doubleAge: function() {
    return this.age * 2;
  },
};

console.log(user5);
console.log(user5.age);
console.log(user5.doubleAge());

let obj = Object.create({});

obj.a = 100;

console.log(obj);

let copyObj = Object.create(user5);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

/*
Object
- Create Object with Assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function() {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function() {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 1,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj1, {prop5: 5, prop6: 6});

console.log(newObject);

