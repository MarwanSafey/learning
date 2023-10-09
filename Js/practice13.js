let a = 21;
let b = 20;

let pattern = ("_"+ a + "_"+  b + "_" ).repeat(4).replaceAll("__" ,'');
console.log(pattern); // _21_2021_2021_2021_20_  _21_2021_2021_2021_20_


console.log( "_"+ a +"_"+ b + a +"_"+ b + a +"_"+ b + a +"_"+ b + "_");