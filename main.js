const numbers = document.getElementsByClassName("btn_num");
const signs = document.getElementsByClassName("btn_signs");
const display = document.getElementsByClassName("calculator-display");
let displayNumbers = [];




// looping numbers and adding a click event, storing the buttons pressed in displayNumbers[]
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    displayNumbers.push(this.innerHTML);
    document.getElementById("calculator-display").innerHTML = displayNumbers.join(" ");
  });
}

// looping signs and adding a click event, storing the buttons pressed in displayNumbers[]
for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener("click", function () {
        
        if(this.innerHTML === "CE"){ //check for CE press -> empty displayNumbers and put back 0 in the display
            displayNumbers.length = 0;
            document.getElementById("calculator-display").innerHTML = "0"
        } else if (this.innerHTML === "C"){ //check for C press -> DO TO LOGIC !!!!!!!!!!!!!!!!!!!!!!!
            displayNumbers.length = 0;
            document.getElementById("calculator-display").innerHTML = "0"
        } else {
            displayNumbers.push(this.innerHTML);
            document.getElementById("calculator-display").innerHTML = displayNumbers.join(" ");
        }       
    });
  }
