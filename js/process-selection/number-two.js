import { memory } from "../memory.js";
import { displayScreen } from "../display.js";
function addSecondNumber(selectionNumber) {
    memory.secondNumber = selectionNumber;
    if (memory.isNegative == true) {
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
export { addSecondNumber, replaceSecondZero, expandSecondNumber };
