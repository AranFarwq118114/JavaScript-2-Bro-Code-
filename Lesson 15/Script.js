const Fullname = "John Doe";

// let firstname = Fullname.slice(0, 3);

// let lastname = Fullname.slice(5, 8);

// let firstchar = Fullname.slice(0, 1);

// let lastchar = Fullname.slice(4, 5);

let firstname = Fullname.slice(0, Fullname.indexOf(" "));

let lastname = Fullname.slice(Fullname.indexOf(" ") + 1);

console.log(firstname);

console.log(lastname);


const email = "aranxyz@gmail.com";

let firstslice = email.slice(0, email.indexOf("@"));
let lastslice = email.slice(email.indexOf("@"));

console.log(firstslice);
console.log(lastslice);