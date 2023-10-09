let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let x = 4;
let counter = 1;
let l = 0;

document.write(`<div>We Have ${x} Admins</div>`);
document.write(`<hr></hr>`);

for (let i = 0; i < x; i++) {
    if (myAdmins[i] == "Stop") break;
    document.write(`<div>`);
    document.write(`<hr></hr>`)
    document.write(`The Admin For Team ${counter} Is ${myAdmins[i]}`);
    document.write(`<h3>Team Members:</h3>`);
    let list = 1;
    for (let j = 0; j < myEmployees.length; j++) {
        if (myEmployees[j][l] == myAdmins[i][l] ){
            document.write(`- ${list} ${myEmployees[j]}`);
            document.write(`<br></br>`)
            list++;
        }
    }
    counter++;
    document.write(`</div>`)
    
}