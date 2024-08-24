let display = "";
function displayNumber(number) {
    display += number;
    document.getElementById('display').value = display;
}
function displayOperator(operator) {
    if (display !== '' && !isNaN(display[display.length - 1])) {
        display += operator;
        document.getElementById('display').value = display;
    }
}
function clearDisplay() {
    display = '';
    document.getElementById('display').value = '';
}
function calculate() {
    if (display !== '' && !isNaN(display[display.length - 1])) {
        try {
            var answer = eval(display);
            document.getElementById('display').value = answer;
            display = answer.toString();
        } catch (error) {
            document.getElementById('display').value = 'Error';
            display = '';
        }
    }
}
