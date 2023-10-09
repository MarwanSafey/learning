function sayHello(theName, theGender) {
    if (theGender == "Male") {
        console.log(`Hello Mr ${theName}`);
    } else if (theGender == "Female") {
        console.log(`Hello Miss ${theName}`);
    } else if (theGender == undefined) {
        console.log(theName);
    }
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"

//------------------------------------------------------------------
function calculate(firstNum, secondNum, operation) {
    if (secondNum == undefined) {
        console.log(`Second Number Not Found`);
    } else if (operation == undefined || operation == "add") {
        console.log(secondNum + firstNum);
    } else if (operation == "subtract") {
        console.log(firstNum - secondNum);
    } else if (operation == "multiply") {
        console.log(firstNum * secondNum);
    }
  }
  
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600

//-------------------------------------------------------------------------------------

function ageInTime(theAge) {
    if (theAge < 10 || theAge > 100) {
        console.log(`Age Out Of Range`);
    } else {
        console.log(`
        Months = ${theAge*12}
        Weeks = ${theAge*12*4}
        Days = ${theAge*12*4*365}
        Hours = ${theAge*12*4*365*24}
        Minuties = ${theAge*12*4*365*24*60}
        Seconds = ${theAge*12*4*365*24*120}`);
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months

//--------------------------------------------------------------------
//another way without IF condition
/*
function checkStatus(a, b, c) {
  let Name, Age, Status;
  for (let i = 0; i < arguments.length; i++) {
    typeof arguments[i] === "string"
      ? (Name = arguments[i])
      : typeof arguments[i] === "number"
        ? (Age = arguments[i])
        : (Status = arguments[i]);
  }
  Status === true
    ? (Status = ` You Are Available For Hire`)
    : (Status = `You Are Not Available For Hire`);

  console.log(`Hello ${Name}, Your Age Is ${Age}, ${Status}`);
}
*/

  function checkStatus(a, b, c) {
    let Name, Age, Status;
    for (i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "string"){
            Name = arguments[i];
        } else if (typeof arguments[i] == "number") {
            Age = arguments[i];
        } else if (typeof arguments[i] == "boolean") {
            if (arguments[i] == true) {
                Status = "You Are Available For Hire";
            } else {
                Status = "You Are Not Available For Hire";
            }
        }
    }
    console.log(`Hello ${Name}, Your Age Is ${Age}, ${Status}`);
  }
  
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//------------------------------------------------------------------------------------

function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for (i = startYear; i <= endYear; i++) {
        document.write(`<option value="${i}">${i}</option>`)
    }
    document.write(`</select>`)
  }
  createSelectBox(2000, 2021);

//------------------------------------------------------------

function multiply(...num) {
    let result = 1;
    for (i = 0; i < num.length; i++) {
        if (typeof num[i] == "string") continue;
        else {
            num[i] = parseInt(num[i]);
        }
    result *= num[i];
    }
    console.log(result);
}


multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

