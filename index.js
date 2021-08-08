//Theme-changer
let checkbox = document.querySelector('input[name="theme"]');

checkbox.addEventListener('change', function() {
    // Change the theme of the website
    if(this.checked){
        document.documentElement.setAttribute("data-theme", "dark");
        document.calculator.setAttribute("data-theme", "dark");
        document.input.setAttribute("data-theme", "dark");
        document.button.setAttribute("data-theme", "dark");
    }
    else{
        document.documentElement.setAttribute("data-theme", "light");
        document.calculator.setAttribute("data-theme", "light");
        document.input.setAttribute("data-theme", "light");
        document.button.setAttribute("data-theme", "light");
    }
});

//Detecting Key Press
// document.addEventListener('keypress', function(event){
//     // display(event.num);
//     let keyName = event.num;

//     // Numbers 0-9
//     if(keyPressedNumbersAllowed.includes(keyName)) {
//         this.setNum(keyName);
//     }

//     // Operators /, *, -, +, =
//     if(keyPressedOperatorsAllowed.includes(keyName)) {
//         keyName == 'Enter' ? keyName = '=' : keyName = keyName;
//         this.calculateWithOperator(keyName);
//     }

//     // Backspace to reset value and display value
//     if(keyName == 'Backspace') {
//         this.resetDisplayValue();
//     }

//     // Dot
//     if(keyName == ',' || keyName == '.') {
//         this.setDot();
//     }
// });

let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value +=num;
}
function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function Clear(){
    outputScreen.value="";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
