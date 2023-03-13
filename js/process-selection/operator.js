import { isFirstNumber, isOperator, isSecondNumber } from "./booleans.js";
import { memory } from "../memory.js";
import { displayScreen } from "../display.js";
function processOperator(selectionType) {
    if (!isFirstNumber() || (memory.firstNumber == 0 && isOperator())) {
        if (selectionType == "-") {
            memory.isNegative = true;
            memory.displayString = "-";
            displayScreen(memory.displayString);
            return (0);
        }
        if (memory.isNegative == false) {
            if (selectionType == "+") {
                memory.firstNumber = 0;
                memory.displayString = "0 +";
            }
            if (selectionType == "*") {
                memory.firstNumber = 0;
                memory.displayString = "0 x";
            }
            if (selectionType == "/") {
                memory.firstNumber = 0;
                memory.displayString = "0 ÷";
            }
        }
        memory.operator = selectionType;
        displayScreen(memory.displayString);
        return (0);
    }
    else if (isOperator() && !isSecondNumber()) {
        if (selectionType == "-") {
            if (memory.isNegative)
                return (1);
            memory.isNegative = true;
            memory.displayString = memory.displayString.concat("-");
            displayScreen(memory.displayString);
            return (0);
        }
    }
    else if (!isOperator()) {
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
        return (0);
    }
    else if (!isSecondNumber()) {
        memory.displayString = memory.displayString.slice(0, -1);
        if (selectionType == "-")
            memory.displayString = memory.displayString.concat("-");
        if (selectionType == "+")
            memory.displayString = memory.displayString.concat("+");
        if (selectionType == "*")
            memory.displayString = memory.displayString.concat("x");
        if (selectionType == "/")
            memory.displayString = memory.displayString.concat("÷");
        memory.operator = selectionType;
        displayScreen(memory.displayString);
        return (1);
    }
}
export { processOperator };
