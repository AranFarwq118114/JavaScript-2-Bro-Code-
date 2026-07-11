


let username = window.prompt("Enter Your Name: ");

// username = username.trim();

// let letter = username.charAt(0);

// letter = letter.toUpperCase();

// let Extrachars = username.slice(1);

// Extrachars = Extrachars.toLowercase();

// username = letter + Extrachars;

// console.log(username);

// chain method

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);

