/* Challenge 1 */
let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);


/*
[++a]
Value = 11
Explain = pre-increment operator

[+] = "addition operater"

[+b++]
Value = 20;
Explain = first unary plus operator convert the value from string to number, then post-increment increase the value by 1 to be 21 but not used

[+] = "addition operater"

[+c++]
Value = 80;
Explain = unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 81 but not used

[-] = subtraction operater

[+a++]
Value = 11;
Explain = Unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 12 but not used


so, the total value = 11 + 20 + 80 - 11 = 100
*/
//a=12 b=21 c=81  a=
console.log(++a + -b + +c++ + a++ + +a);
// 13 -21 + 81 + 13 + 14 =100

//a=14 b=21 c=82  
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// 81 + 21 + 13*21 - 22*13 +12 -1= 100
//              273     286
/*Challenge 2 */
let d = "-100";
let e = "20";
let f = 30;
let g = true;

//only use variables
//do not use variable twice

console.log(-d * +e); //2000
console.log(++e * ++g + ++f + -d ); //173
