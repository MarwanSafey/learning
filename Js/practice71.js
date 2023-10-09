let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let word = mix.map(function(ele) {
    return isNaN(ele) ? ele : "";
}).reduce(function(acc,curr) {
    return `${acc}${curr}`;
});
console.log(word);

//--------------------------------------------------------------

let myString = "EElllzzzzzzzeroo";

// Elzero

let word1 = myString.split("").filter(function(ele, index) {
    return !(ele == myString[index + 1]);
}).join("");
console.log(word1);

//---------------------------------------------------------------

let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

let concatArray = myArray.reduce(function (acc, curr) {
    return acc.concat(curr);
  }, []).reduce(function(acc,curr) {
    return `${acc}${curr}`;
  });
console.log(concatArray);

//-----------------------------------------------------------------

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let numOnly = numsAndStrings.filter(function(ele) {
    return !(isNaN(ele));
}).map(function(ele) {
    return -ele;
});
console.log(numOnly);

//----------------------------------------------------------------

let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let total = nums.reduce(function(initial,curr) {
    return curr % 2 == 0 ? initial * curr : initial + curr; 
},1);

console.log(total);

//---------------------------------------------------------
