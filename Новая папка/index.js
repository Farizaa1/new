document.getElementById("name").innerHTML = "Fariza, CS-2117N";

const d = new Date();
document.getElementById("year").innerHTML = "Year: " + d.getFullYear();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("weekday").innerHTML = "Today is: " + weekday[d.getDay()];
document.getElementById("day").innerHTML = "Date: " + d.getDate();
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month").innerHTML = "Month: " + month[d.getMonth()];
document.getElementById("time").innerHTML = "Current time is: " + d.toLocaleTimeString();

const date = new Date("06/30/2024"); 
var grad = Math.round((date.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
document.getElementById("gradDay").innerHTML = grad + " days left until the freedom!";

function multiply() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    document.getElementById("Result").innerHTML = num1 * num2;
}

function divide() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    document.getElementById("Result").innerHTML = num1 / num2;
}

