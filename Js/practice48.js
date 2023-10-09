/*
let start = 10;
let end = 100;
let exclude = 40;

 Output
10
20
30
50
60
70
80
90
100


for (i = start; i <= end; i += start) {
    if (i == exclude) continue;
    console.log(i);
  }
*/
//------------------------------------------------------------------------------
/*
let start = 10;
let end = 0;
let stop = 3;

 Output
10
09
08
07
06
05
04
03

for (i = start; i >= stop; i--) {
    if (i != 10) {
        i = "0" + i.toString();
    }
    console.log(i);
}
*/

//----------------------------------------------------------------------
/*
let start = 1;
let end = 6;
let breaker = 2;

Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4

for (i = start; i <= 6; i++) {
    console.log(i);
    console.log(`-- ${breaker}`);
    console.log(`-- ${end - breaker}`);
}
*/

//-------------------------------------------------------------------------------
/* 
let index = 10;
let jump = 2;

for (;;) {
  console.log(index);
  index -= 2;
  if (index < jump*jump) break;
}

Output
10
8
6
4
*/

//--------------------------------------------------------------------------------
/*
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

 Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

let j = 1
for (i = 0; i < friends.length; i++) {
    if (friends[i].charAt(0) == letter.toUpperCase()) continue ;
    console.log(`"${j++} => ${friends[i]}"`)
}
*/
//---------------------------------------------------------------
/* 
let start = 0;
let swappedName = "elZerO";

Output
"ELzERo"

let swap = [];
for (i = start; i < swappedName.length; i++) {
    if (swappedName[i] == swappedName[i].toLowerCase()) {
        swap += swappedName[i].toUpperCase();
    } else {
        swap += swappedName[i].toLowerCase();
    }
}
console.log(swap);
*/

//-----------------------------------------------------------------------
/*
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

/* Output
2
3
4


for (i = start; i < mix.length; i++) {
    if (i == start || typeof mix[i] == "string") continue;
    console.log(mix[i])
}

*/
//--------------------------------------------------------
