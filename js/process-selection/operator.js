import { canFirstNumberHaveOperator, isOnlySecondNumberMissing, isOperator } from "./booleans.js";
import { memory } from "../memory.js";
import { displayScreen } from "../display.js";
function replaceOperator(selectionType) {
    memory.displayString = memory.displayString.slice(0, -2);
    if (selectionType == "-")
        memory.displayString = memory.displayString.concat("- ");
    if (selectionType == "+")
        memory.displayString = memory.displayString.concat("+ ");
    if (selectionType == "*")
        memory.displayString = memory.displayString.concat("x ");
    if (selectionType == "/")
        memory.displayString = memory.displayString.concat("÷ ");
    memory.operator = selectionType;
    displayScreen(memory.displayString);
}
function makeSecondNumberNegative() {
    memory.isNegative = true;
    memory.displayString = memory.displayString.concat("-");
    displayScreen(memory.displayString);
}
function placeOperator(selectionType) {
    if (selectionType == "-")
        memory.displayString = memory.displayString.concat(" - ");
    if (selectionType == "+")
        memory.displayString = memory.displayString.concat(" + ");
    if (selectionType == "*")
        memory.displayString = memory.displayString.concat(" x ");
    if (selectionType == "/")
        memory.displayString = memory.displayString.concat(" ÷ ");
    memory.operator = selectionType;
    memory.isDecimal = false;
    memory.decimalSpaces = 0;
    displayScreen(memory.displayString);
}
function addOperatorToZero(selectionType) {
    if (selectionType == "+") {
        memory.firstNumber = 0;
        memory.displayString = "0 + ";
    }
    if (selectionType == "*") {
        memory.firstNumber = 0;
        memory.displayString = "0 x ";
    }
    if (selectionType == "/") {
        memory.firstNumber = 0;
        memory.displayString = "0 ÷ ";
    }
    memory.operator = selectionType;
    displayScreen(memory.displayString);
}
function makeFirstNumberNegative() {
    memory.isNegative = true;
    memory.displayString = "-";
    displayScreen(memory.displayString);
}
function processOperator(selectionType) {
    if (canFirstNumberHaveOperator()) {
        if (selectionType == "-") {
            makeFirstNumberNegative();
            return (0);
        }
        if (!memory.isNegative) {
            addOperatorToZero(selectionType);
            if (isOperator())
                return (1);
            else
                addOperatorToZero(selectionType);
            return (0);
        }
    }
    else if (!isOperator()) {
        placeOperator(selectionType);
        return (0);
    }
    else if (isOnlySecondNumberMissing()) {
        if (selectionType == "-") {
            if (memory.isNegative)
                return (1);
            makeSecondNumberNegative();
            return (0);
        }
        else {
            if (memory.isNegative)
                return (1);
            replaceOperator(selectionType);
            return (1);
        }
    }
}
export { processOperator };
