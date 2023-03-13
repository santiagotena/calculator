import { isCalculationEmpty } from "./booleans.js";
import { copyFromHistory, memory, resetMemory } from "../memory.js";
import { displayScreen, resetDisplay } from "../display.js";
function processDelete() {
    if (isCalculationEmpty())
        return;
    copyFromHistory();
    displayScreen(memory.displayString);
}
function processClear() {
    resetMemory();
    resetDisplay();
}
export { processClear, processDelete, };
