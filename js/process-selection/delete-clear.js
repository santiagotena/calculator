import { reachedTheStart } from "./booleans.js";
import { copyFromHistory, memory, resetMemory } from "../memory.js";
import { displayScreen, resetDisplay } from "../display.js";
function processDelete() {
    copyFromHistory();
    if (reachedTheStart())
        displayScreen("0");
    else
        displayScreen(memory.displayString);
}
function processClear() {
    resetMemory();
    resetDisplay();
}
export { processClear, processDelete, };
