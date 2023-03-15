import { isAnsOrEqualUsed, isFirstNumber, isOnlyFirstNumber, isOnlySecondNumberMissing } from "./booleans.js";
import { addSecondNumber, expandSecondNumber, replaceSecondZero } from "./number-two.js";
import { memory } from "../memory.js";
import { displayScreen } from "../display.js";
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
}
function processNumber(selectionKey) {
    let selectionNumber;
    selectionNumber = +selectionKey;
    if (isAnsOrEqualUsed()) {
        replaceRestartValue();
    }
    if (isOnlyFirstNumber()) {
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
    else if (isOnlyFirstNumber()) {
        expandFirstNumber(selectionNumber);
    }
    else if (isOnlySecondNumberMissing()) {
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
