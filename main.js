// SIMPLE ADDITION CALCULATOR

//ADD EVENT LISTENER TO THE BUTTON
document.getElementById("btn").addEventListener("click", calcTotal);

//EVENT FUNCTION
function calcTotal() {
    //INPUT
let num1 = +document.getElementById("num1").value;
let num2 = +document.getElementById("num2").value;

    //PROCESS
let total = num1 + num2;

    //OUTPUT
    document.getElementById("total").innerHTML = total;
}