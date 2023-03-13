import { isFirstNumber, isOperator, isSecondNumber } from "./booleans.js";
import { copyFromHistory, memory, resetMemory } from "../memory.js";
import { displayScreen, resetDisplay } from "../display.js";

function processClear(): void {
	resetMemory();
	resetDisplay();
}

function processDelete(): void {
	if (!isFirstNumber() && !isOperator() && !isSecondNumber()) {
		return ;
	}
	copyFromHistory();
	displayScreen(memory.displayString);
}

export {
	processClear,
	processDelete,
};
