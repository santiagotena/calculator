// Global object for memory //
const memory = {
    // currentSelection: undefined,
    // lastSelection: undefined,
    firstNumber: undefined,
    operator: undefined,
    secondNumber: undefined,
    lastResult: 0,
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
function resetMemory(memory) {
    // memory.currentSelection = undefined;
    // memory.lastSelection = undefined;
    memory.firstNumber = undefined;
    memory.operator = undefined;
    memory.secondNumber = undefined;
    memory.lastResult = 0;
    memory.applyNegative = false;
    memory.displayString = "";
}
function udpateMemory(selectionKey) {
    //Modify:
    // memory.lastSelection = memory.currentSelection;
    // memory.currentSelection = selectionKey;
}
// Display selection and results //
function resetDisplay() {
    let display = document.querySelector('.display');
    display.textContent = "0";
}
function displayChoice(displayNumber) {
    let display = document.querySelector('.display');
    display.textContent = displayNumber;
}
// Input processing //
function processNumber(selectionNumber) {
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
    displayChoice(memory.displayString);
}
function processOperator(selectionType) {
    if (memory.firstNumber == undefined || (memory.firstNumber == 0 && memory.operator != undefined)) {
        if (selectionType == "substract") {
            memory.applyNegative = true;
            memory.displayString = "-";
            displayChoice(memory.displayString);
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
        displayChoice(memory.displayString);
        return;
    }
    else if (memory.firstNumber != undefined && memory.secondNumber == undefined && memory.operator == undefined) {
        if (selectionType == "substract")
            memory.displayString = memory.displayString.concat('', " -");
        if (selectionType == "add")
            memory.displayString = memory.displayString.concat('', " +");
        if (selectionType == "multiply")
            memory.displayString = memory.displayString.concat('', " x");
        if (selectionType == "divide")
            memory.displayString = memory.displayString.concat('', " ÷");
        memory.operator = selectionType;
        displayChoice(memory.displayString);
        return;
    }
    else if (memory.firstNumber != undefined && memory.secondNumber == undefined && memory.operator != undefined) {
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
        displayChoice(memory.displayString);
        return;
    }
}
function processResult() {
    // Consider story
    operate(memory.firstNumber, memory.secondNumber, memory.operator);
    // Reset memory
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
    // displayChoice(selectionKey);
}
// Event Listeners //
let selections = document.querySelectorAll('.key');
selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        processInput(selection);
    });
});
// Debugger
// http://localhost:5500/top/projects/calculator/
