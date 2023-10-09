let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice("", num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice("", num)); // ["Ahmed", "Elham", "Osama"];

//------------------------------------------------------------------

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]

// ----------------------------------------------------------------------

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//------------------------------------------------------------------

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop().shift().slice(website.length).toUpperCase()); // ZERO

//---------------------------------------------------------------------------

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

haystack.includes(needle) ? console.log("Found") : console.log("Not Found");
haystack.indexOf(needle, 1) ? console.log("Found") : console.log("Not Found");
haystack.lastIndexOf(needle, -2) ? console.log("Found") : console.log("Not Found");

//------------------------------------------------------------------------------------

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1, arr2).sort().slice(-3).join("").toLowerCase();
console.log(allArrs); // fxy