const numbers = document.getElementsByClassName("btn_num");
const sign = document.getElementsByClassName("btn_sings");
const display = document.getElementsByClassName("calculator-display");
let displayNumbers = [];




// looping numbers and adding a click event, storing the buttons pressed in displayNumbers
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    displayNumbers.push(this.innerHTML);
    document.getElementById("calculator-display").innerHTML = displayNumbers.join(" ");
  });
}
