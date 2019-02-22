function countPlus(e) {
    event.preventDefault();
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var total;

    total = number1 + number2;
    document.getElementById("total").innerHTML = total;

}

function countMinus(e) {
    event.preventDefault();
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var total;

    total = number1 - number2;
    document.getElementById("total").innerHTML = total;

}

function countTime(e) {
    event.preventDefault();
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var total;

    total = number1 * number2;
    document.getElementById("total").innerHTML = total;

}

function countDivide(e) {
    event.preventDefault();
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var total;

    total = number1 / number2;
    document.getElementById("total").innerHTML = total;

}