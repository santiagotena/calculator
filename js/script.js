// Global object for memory //
const memory = {
    firstNumber: undefined,
    operator: undefined,
    secondNumber: undefined,
    lastResult: undefined,
    applyNegative: false,
    displayString: "",
};
// Operations //
function add(a, b) {
    return (a + b);
}
function substract(a, b) {
    return (a - b);
}
function multiply(a, b) {
    return (a * b);
}
function divide(a, b) {
    return (a / b);
}
function operate(a, b, operation) {
    if (operation == "add")
        return (add(a, b));
    else if (operation == "substract")
        return (substract(a, b));
    else if (operation == "multiply")
        return (multiply(a, b));
    else if (operation == "divide")
        return (divide(a, b));
}
// Memory //
function resetMemory() {
    memory.firstNumber = undefined;
    memory.operator = undefined;
    memory.secondNumber = undefined;
    memory.lastResult = undefined;
    memory.applyNegative = false;
    memory.displayString = "";
}
// Display selection and results //
function resetDisplay() {
    let display = document.querySelector('.display');
    display.textContent = "0";
}
function displayScreen(displayNumber) {
    let display = document.querySelector('.display');
    display.textContent = displayNumber;
}
// Input processing //
function processNumber(selectionNumber) {
    // DO NOT print zeroes at the start!
    if (memory.firstNumber == undefined) {
        memory.firstNumber = selectionNumber;
        if (memory.applyNegative == true) {
            memory.firstNumber = memory.firstNumber * -1;
            memory.applyNegative = false;
        }
        memory.displayString = memory.displayString.concat('', selectionNumber.toString());
    }
    else if (memory.firstNumber != undefined && memory.operator == undefined) {
        memory.firstNumber = memory.firstNumber * 10 + selectionNumber;
        memory.displayString = memory.displayString.concat('', selectionNumber.toString());
    }
    else if (memory.firstNumber != undefined && memory.operator != undefined && memory.secondNumber == undefined) {
        memory.secondNumber = selectionNumber;
        if (memory.applyNegative == true) {
            memory.secondNumber = memory.secondNumber * -1;
            memory.applyNegative = false;
        }
        memory.displayString = memory.displayString.concat(' ', selectionNumber.toString());
    }
    else if (memory.secondNumber != undefined && memory.operator != undefined) {
        memory.secondNumber = memory.secondNumber * 10 + selectionNumber;
        memory.displayString = memory.displayString.concat('', selectionNumber.toString());
    }
    displayScreen(memory.displayString);
}
function processOperator(selectionType) {
    if (memory.firstNumber == undefined || (memory.firstNumber == 0 && memory.operator != undefined)) {
        if (selectionType == "substract") {
            memory.applyNegative = true;
            memory.displayString = "-";
            displayScreen(memory.displayString);
            return;
        }
        if (selectionType == "add" && memory.applyNegative == false) {
            memory.firstNumber = 0;
            memory.displayString = "0 +";
        }
        if (selectionType == "multiply" && memory.applyNegative == false) {
            memory.firstNumber = 0;
            memory.displayString = "0 x";
        }
        if (selectionType == "divide" && memory.applyNegative == false) {
            memory.firstNumber = 0;
            memory.displayString = "0 ÷";
        }
        memory.operator = selectionType;
        displayScreen(memory.displayString);
        return;
    }
    else if (memory.firstNumber != undefined && memory.operator == undefined && memory.secondNumber == undefined) {
        if (selectionType == "substract")
            memory.displayString = memory.displayString.concat('', " -");
        if (selectionType == "add")
            memory.displayString = memory.displayString.concat('', " +");
        if (selectionType == "multiply")
            memory.displayString = memory.displayString.concat('', " x");
        if (selectionType == "divide")
            memory.displayString = memory.displayString.concat('', " ÷");
        memory.operator = selectionType;
        displayScreen(memory.displayString);
        return;
    }
    else if (memory.firstNumber != undefined && memory.operator != undefined && memory.secondNumber == undefined) {
        memory.displayString = memory.displayString.slice(0, -1);
        if (selectionType == "substract")
            memory.displayString = memory.displayString.concat('', "-");
        if (selectionType == "add")
            memory.displayString = memory.displayString.concat('', "+");
        if (selectionType == "multiply")
            memory.displayString = memory.displayString.concat('', "x");
        if (selectionType == "divide")
            memory.displayString = memory.displayString.concat('', "÷");
        memory.operator = selectionType;
        displayScreen(memory.displayString);
        return;
    }
}
function processResult() {
    let result;
    if (memory.firstNumber != undefined && memory.operator == undefined && memory.secondNumber == undefined)
        result = memory.firstNumber;
    else if (memory.firstNumber != undefined && memory.operator != undefined && memory.secondNumber != undefined) {
        if (memory.operator == "divide" && memory.secondNumber == 0) {
            displayScreen("Wait. That's illegal.");
            resetMemory();
            return;
        }
        result = operate(memory.firstNumber, memory.secondNumber, memory.operator);
    }
    resetMemory();
    memory.lastResult = result;
    memory.firstNumber = result;
    memory.displayString = result.toString();
    displayScreen(memory.displayString);
}
function clear() {
    resetMemory();
    resetDisplay();
}
function processInput(selection) {
    let selectionType;
    let selectionKey;
    let selectionNumber;
    selectionType = selection.getAttribute('data-type');
    selectionKey = selection.getAttribute('data-key');
    if (selectionType === "number") {
        selectionNumber = +selectionKey;
        processNumber(selectionNumber);
    }
    if (selectionType === "operator")
        processOperator(selectionKey);
    if (selectionKey === "=")
        processResult();
    if (selectionKey == "CLEAR")
        clear();
}
// Event Listeners //
let selections = document.querySelectorAll('.key');
selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        processInput(selection);
    });
});
///////////
// Debugger
// http://localhost:5500/top/projects/calculator/
// To do:
// [x] Chain calculations
// [ ] Avoid multiple zeroes
// [ ] Ans
// [ ] .
// [ ] Keyboard Support
// [ ] CSS
