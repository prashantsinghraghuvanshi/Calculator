const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//main function
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //% function
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //last character remove
    output = output.toString().slice(0, -1);
  } else {
    //return
    if (output === "" && specialChars.includes(btnValue)) return;
    console.log(output);
    console.log(btnValue);
    output += btnValue;
    console.log(output);
    console.log(btnValue);
  }
  display.value = output;
};

//call calculate
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});