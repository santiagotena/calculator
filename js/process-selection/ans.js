import { isFirstNumber, isLastResult, isOnlySecondNumberMissing, justReceivedAnswer } from "./booleans.js";
import { memory } from "../memory.js";
import { displayScreen } from "../display.js";
function concatAns() {
    memory.secondNumber = memory.lastResult;
    memory.displayString = memory.displayString.concat("Ans");
    memory.usedAns = true;
    displayScreen(memory.displayString);
}
function displayAns() {
    memory.firstNumber = memory.lastResult;
    memory.displayString = "Ans";
    memory.usedAns = true;
    displayScreen(memory.displayString);
}
function processAns() {
    if (!isLastResult())
        memory.lastResult = 0;
    if (!isFirstNumber() || justReceivedAnswer()) {
        displayAns();
        return (0);
    }
    else if (isOnlySecondNumberMissing()) {
        concatAns();
        return (0);
    }
}
export { processAns };
