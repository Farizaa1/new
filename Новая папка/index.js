document.getElementById("name").innerHTML = "Fariza, CS-2117N";

const d = new Date();
document.getElementById("year").innerHTML = "Year: " + d.getFullYear();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("weekday").innerHTML = "Today is: " + weekday[d.getDay()];
document.getElementById("day").innerHTML = "Date: " + d.getDate();
document.getElementById("month").innerHTML = "Month: " + d.getMonth();
document.getElementById("time").innerHTML = "Current time is: " + d.toLocaleTimeString();

var a = document.getElementById("num1").value;
var b = document.getElementById("num2").value;

function multipy() {
    var num = a * b;
    var result = document.getElementById("Result");
    result.innerHTML = "The Result Is: " + num;
}

function divide() {
    var num = a / b;
    var result = document.getElementById("Result");
    result.innerHTML = "The Result Is: " + num;
}
