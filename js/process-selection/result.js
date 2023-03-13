import { isFirstNumber, isOperator, isSecondNumber } from "./booleans.js";
import { operate } from "../operations.js";
import { memory, resetMemory } from "../memory.js";
import { displayScreen } from "../display.js";
function displayEasterEgg() {
    displayScreen("Wait. That's illegal.");
    resetMemory();
}
function setUpNextCalculation(result) {
    resetMemory();
    memory.firstNumber = result;
    memory.lastResult = result;
    memory.displayString = result.toString();
    memory.usedEqual = true;
    displayScreen(memory.displayString);
}
function processResult() {
    let result;
    let isKeyValid;
    isKeyValid = false;
    if (isFirstNumber() && !isOperator() && !isSecondNumber()) {
        result = memory.firstNumber;
        isKeyValid = true;
    }
    else if (isFirstNumber() && isOperator() && isSecondNumber()) {
        if (memory.operator == "/" && memory.secondNumber == 0) {
            displayEasterEgg();
            return;
        }
        result = operate(memory.firstNumber, memory.secondNumber, memory.operator);
        isKeyValid = true;
    }
    if (isKeyValid)
        setUpNextCalculation(result);
}
export { processResult };
