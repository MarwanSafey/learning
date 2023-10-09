let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// write code here

my = my.reverse().slice(--counter);

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"]

console.log(my.slice(++zero, ++counter)); // ["Elham", "Mazero"]
console.log(my.shift())
console.log(my)
console.log(my[--zero].slice(zero, --counter) + my[++zero].slice(++zero)); // "Elzero"
console.log(zero)
console.log(counter)
console.log(my)

console.log(my[--zero].slice(-counter, -zero)+ my[zero].slice(-zero).toUpperCase()); // "rO"
