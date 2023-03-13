import { isFirstNumber, isOperator, isSecondNumber } from "./booleans.js";
import { memory } from "../memory.js";
import { displayScreen } from "../display.js";
function expandSecondNumber(selectionNumber) {
    if (memory.secondNumber < 0)
        memory.secondNumber = memory.secondNumber * 10 - selectionNumber;
    else
        memory.secondNumber = memory.secondNumber * 10 + selectionNumber;
    if (memory.isNegative) {
        memory.secondNumber = memory.secondNumber * -1;
        if (memory.secondNumber != 0)
            memory.isNegative = false;
    }
    memory.displayString = memory.displayString.concat(selectionNumber.toString());
}
function replaceSecondZero(selectionNumber) {
    memory.secondNumber = selectionNumber;
    memory.displayString = memory.displayString.slice(0, -1);
    memory.displayString = memory.displayString.concat(selectionNumber.toString());
    displayScreen(memory.displayString);
}
function addSecondNumber(selectionNumber) {
    memory.secondNumber = selectionNumber;
    if (memory.isNegative == true) {
        memory.secondNumber = memory.secondNumber * -1;
        if (memory.secondNumber != 0)
            memory.isNegative = false;
    }
    memory.displayString = memory.displayString.concat(selectionNumber.toString());
}
function expandFirstNumber(selectionNumber) {
    if (memory.firstNumber < 0)
        memory.firstNumber = memory.firstNumber * 10 - selectionNumber;
    else
        memory.firstNumber = memory.firstNumber * 10 + selectionNumber;
    if (memory.isNegative) {
        memory.firstNumber = memory.firstNumber * -1;
        if (memory.firstNumber != 0)
            memory.isNegative = false;
    }
    memory.displayString = memory.displayString.concat(selectionNumber.toString());
}
function addFirstNumber(selectionNumber) {
    memory.firstNumber = selectionNumber;
    if (memory.isNegative == true) {
        memory.firstNumber = memory.firstNumber * -1;
        if (memory.firstNumber != 0)
            memory.isNegative = false;
    }
    memory.displayString = memory.displayString.concat(selectionNumber.toString());
}
function replaceFirstZero(selectionNumber) {
    memory.firstNumber = selectionNumber;
    memory.displayString = memory.displayString.slice(0, -1);
    memory.displayString = memory.displayString.concat(selectionNumber.toString());
    displayScreen(memory.displayString);
}
function replaceRestartValue() {
    memory.firstNumber = undefined;
    memory.displayString = "";
    displayScreen(memory.displayString);
    if (memory.usedAns)
        memory.usedAns = false;
    if (memory.usedEqual)
        memory.usedEqual = false;
    if (memory.reachedStart)
        memory.reachedStart = false;
}
function processNumber(selectionKey) {
    let selectionNumber;
    selectionNumber = +selectionKey;
    if (!isOperator() &&
        !isSecondNumber() &&
        (memory.usedAns || memory.usedEqual || memory.reachedStart)) {
        replaceRestartValue();
    }
    if (isFirstNumber() && !isOperator() && !isSecondNumber()) {
        if (memory.firstNumber == 0 && selectionNumber == 0)
            return (1);
        else if (memory.firstNumber == 0 && selectionNumber != 0) {
            replaceFirstZero(selectionNumber);
            return (1);
        }
    }
    if (!isFirstNumber()) {
        addFirstNumber(selectionNumber);
    }
    else if (!isOperator()) {
        expandFirstNumber(selectionNumber);
    }
    else if (!isSecondNumber()) {
        addSecondNumber(selectionNumber);
    }
    else {
        if (memory.secondNumber == 0 && selectionNumber == 0)
            return (1);
        else if (memory.secondNumber == 0 && selectionNumber != 0) {
            replaceSecondZero(selectionNumber);
            return (1);
        }
        else {
            expandSecondNumber(selectionNumber);
        }
    }
    displayScreen(memory.displayString);
    return (0);
}
export { processNumber };
