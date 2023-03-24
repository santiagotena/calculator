import { areBothNumbersAndOperator, isOnlyFirstNumber } from "./booleans.js";
import { operate } from "../operations.js";
import { memory, resetMemory } from "../memory.js";
import { displayScreen } from "../display.js";
function displayEasterEgg(result) {
    let isEasterEgg;
    let message;
    isEasterEgg = false;
    if (result === 42) {
        message = "The meaning of life";
        isEasterEgg = true;
    }
    else if (result == 69) {
        message = "Nice";
        isEasterEgg = true;
    }
    displayScreen(message);
    resetMemory();
    memory.firstNumber = result;
    memory.lastResult = result;
    memory.displayString = message;
    memory.usedEqual = true;
    return (isEasterEgg);
}
function divideByZeroEasterEgg() {
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
    if (isOnlyFirstNumber()) {
        result = memory.firstNumber;
        isKeyValid = true;
    }
    else if (areBothNumbersAndOperator()) {
        if (memory.operator == "/" && memory.secondNumber == 0) {
            divideByZeroEasterEgg();
            return;
        }
        result = operate(memory.firstNumber, memory.secondNumber, memory.operator);
        if (displayEasterEgg(result))
            return;
        isKeyValid = true;
    }
    if (isKeyValid)
        setUpNextCalculation(result);
}
export { processResult };
