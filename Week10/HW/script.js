alert("Hello world!");
console.log("My first JavaScript assignment");
document.getElementById("output").innerHTML = "I just modified this element with JavaScript";
let name = "Olesia";
let age = 21;
let number = 73.0;
console.log("My name is " + name + ", I am " + age + " years old, and my favorite number is " + number + ".")

function calculate(lhs, rhs) {
    console.log("The sum of " + lhs + " and " + rhs + " is " + (lhs+rhs));
    console.log("The subtraction is " + (lhs-rhs));
    console.log("The multiplication is " + (lhs*rhs));
    console.log("THe division is " + (lhs/rhs));
  }

calculate(1, 1);
calculate(100, 13);
calculate(39, 13);

function fahrenheitToCelsius(F) {
    alert((F - 32) * 5/9);
}
function celsiusToFahrenheit(C) {
    alert(C * 9/5 + 32);
}

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
button1.addEventListener("click", function() { fahrenheitToCelsius(40) });
button2.addEventListener("click", function() { celsiusToFahrenheit(100) });

function stringing(str) {
    alert(str.toUpperCase() + "\nAnd its length is " + str.length);
}

stringing("Celsius is a bit better");

let isLightOn = true;

function toggle() {
    isLightOn = !isLightOn;
    if (isLightOn) {
        button.value = "Light is ON";
    }
    else {
        button.value = "Light is OFF";
    }
}

const button = document.getElementById("light");
button.addEventListener("click", function() { toggle(isLightOn) });

let last_line = "";
const last = document.getElementById("last");

function countByTwo(val) {
    let current = 0;
    while(current <= val) {
        last_line += current + " ";
        current += 2;
    }
    last.textContent = last_line;
}

const loopadoopboop = document.getElementById("lastest");
loopadoopboop.addEventListener("click", function() { countByTwo(20); });