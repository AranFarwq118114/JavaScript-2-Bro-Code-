const Decreasingbtn = document.getElementById("Decreasingbtn");
const Restbtn = document.getElementById("Restbtn");
const increasingbtn = document.getElementById("Increasingbtn");
const counterlabel = document.getElementById("counterlabel");

let count = 0;

increasingbtn.onclick = function () {
    count++;
    counterlabel.textContent = count;
}

Restbtn.onclick = function () {
    count = 0;
    counterlabel.textContent = count;
}

Decreasingbtn.onclick = function () {
    count--;
    counterlabel.textContent = count;
}