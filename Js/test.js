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