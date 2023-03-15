import { isAnsOrEqualUsed, isCalculationEmpty, reachedTheStart } from "./booleans.js";
import { copyFromHistory, memory, resetMemory } from "../memory.js";
import { displayScreen, resetDisplay } from "../display.js";

function processDelete(): void {
	if (isCalculationEmpty() || isAnsOrEqualUsed())
		return ;
	copyFromHistory();
	if (reachedTheStart())
		memory.displayString = "0";
	displayScreen(memory.displayString);
}

function processClear(): void {
	resetMemory();
	resetDisplay();
}

export {
	processClear,
	processDelete,
};
