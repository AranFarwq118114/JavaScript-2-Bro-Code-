const mylabel = document.getElementById("mylabel");
const myinput = document.getElementById("myinput");
const mybtn = document.getElementById("mybtn");
const myparagraph = document.getElementById("myparagraph");

let age;

mybtn.onclick = function(){
    age = myinput.value;
    age = Number(age);

    if(age >= 100 ){

      myparagraph.textContent = "You are too old!";

     }else if(age == 0 ){

      myparagraph.textContent = "You can not enter!";

     }else if(age >= 18){

       myparagraph.textContent = "You are allowed to enter!";

     }else if(age < 0){

       myparagraph.textContent = "You are not born yet!";

     }else{

       myparagraph.textContent = "Your not allowed to enter!";
     }
}