// Number Challenge

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find the smallest number in all variables and return integer.
console.log(Math.trunc(d));

// Use variable a + d one time to get the needed output
console.log(Math.pow(a , Math.trunc(d)));

// Get integer "2" from d variable with 4 Methods.
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(parseInt(d));

// Use variables b + d to get this values
console.log((Math.trunc(b)/Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(Math.trunc(b)/Math.ceil(d))); // 67 => Number