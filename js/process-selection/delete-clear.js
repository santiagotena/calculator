import { isFirstNumber, isOperator, isSecondNumber } from "./booleans.js";
import { copyFromHistory, memory, resetMemory } from "../memory.js";
import { displayScreen, resetDisplay } from "../display.js";
function processClear() {
    resetMemory();
    resetDisplay();
}
function processDelete() {
    if (!isFirstNumber() && !isOperator() &&
        !isSecondNumber() && !memory.isNegative) {
        return;
    }
    copyFromHistory();
    displayScreen(memory.displayString);
}
export { processClear, processDelete, };
