let age = 12;
let massage = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(massage);

let Student = true;
let status = Student ? "You are a student." : "You are not a student.";
console.log(status);

let purchaseAmount = 150;
let discount = purchaseAmount > 100 ? 10 : 0;
console.log(`your total is: $${purchaseAmount - purchaseAmount * (discount / 100)}`);