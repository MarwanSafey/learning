/*
string challenge
all solutions must be in one chain
you can use concatenate
*/

let a = "Elzero Web School";

// Include This methods in your solution [slice, charAt] to get Zero
console.log(a.charAt(2).toUpperCase() + a.slice(3,6));

// 8 H
console.log(a[13].toUpperCase().repeat(8));
console.log(a.charAt(13).toUpperCase().repeat(8));

// Return Array
console.log(a.split(" ",1)); // [Elzero]

// use only "substr" Method + Template literals in your solution
console.log(a.substr(0,6), a.substr(-6)); // Elzero Schhol
console.log(`${a.substr(0, 6)} ${a.substr(11)}`); // Elzero School
console.log(`${a.substr(0,6)} ${a.substr(-6)}`);  //Elzero School

// Solution must be dynamic and string may change
console.log(a.charAt(0).toLowerCase()+a.slice(1,16).toUpperCase()+a.charAt(16).toLocaleLowerCase());
console.log(a.charAt(0).toLowerCase()+a.substr(1,a.length - 2).toUpperCase()+a.charAt(a.length-1).toLowerCase()); // eLZERO WEB SCHOOl
console.log(a.charAt(0).toLowerCase() + a.slice(1,-1).toUpperCase() + a.charAt(a.length -1).toLowerCase()) //eLZERO WEB SCHOOl