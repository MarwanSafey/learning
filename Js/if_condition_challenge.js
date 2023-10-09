// write with Ternary if syntax

let st = "Elzero Web School";

if (((st.length)*2).toString() === "34") {
    console.log("Good");
}

// W position may change
if (st[7] === "W") {
    console.log("Good");
}

if (typeof st === "string") {
    console.log("Good");
}

if (typeof(st.length) === "number") {
    console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}
