
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
      zName = zName.split(" ");
      return `Hello ${zName[0]} ${zName[1][0].toUpperCase()}`;
      // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
      zAge = parseInt(zAge);
      return `Your Age Is ${zAge}`;
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
      zCountry = zCountry.slice(0, 2).toUpperCase();
      return `You Live In ${zCountry}`;
      // Egypt => You Live In EG
      // Syria => You Live In SY
    }
    function fullDetails() {
      return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY

//-------------------------------------------------------------------
/*
function itsMe() {
    return `Iam A Normal Function`;
  }
  
  console.log(itsMe()); // Iam A Normal Function
*/
let itsMe = _ => `Iam A Normal Function`;

console.log(itsMe());
/*
function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
  }
  
  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
*/

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org"));

//-------------------------------------------------------------------------------------
/*
function checker(zName) {
    return function (status) {
      return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
      };
    };
  }
  
  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
*/

let checker = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000));
console.log(checker("Ahmed")("Not Available")());

//----------------------------------------------------------------------------------------

function specialMix(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    data[i] = parseInt(data[i]);
    if (isNaN(data[i])) {
      continue;
    } else result += data[i];
  }
  if (result == 0 ) {
    result = 'All Is Strings';
  }
  return result;
}
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings