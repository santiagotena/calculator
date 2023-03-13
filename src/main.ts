import { processNumber } from "./process-selection/number.js";
import { addDot, processDecimal } from "./process-selection/decimal.js";
import { processOperator } from "./process-selection/operator.js";
import { processResult } from "./process-selection/result.js";
import { processAns } from "./process-selection/ans.js";
import { copyToHistory, memory } from "./memory.js";
import { processClear, processDelete } from "./process-selection/delete-clear.js";

function processInput(selection: Element): void {
	let selectionType: string;
	let selectionKey: string;
	let isValidInput: boolean;
	
	selectionType = selection.getAttribute('data-type');
	selectionKey = selection.getAttribute('data-key');
	isValidInput = false;
	if (selectionKey === "Backspace") {
		processDelete();
		return ;
	}
	copyToHistory();
	if (selectionType === "number" && !memory.isDecimal) {
		if (processNumber(selectionKey) == 0)
		isValidInput = true;
	}
	else if (selectionType === "number" && memory.isDecimal) {
		if (processDecimal(selectionKey) == 0)
			isValidInput = true;
	}
	else if (selectionType === "operator") {
		if (processOperator(selectionKey) == 0)
			isValidInput = true;
	}
	else if(selectionKey === ".") {
		if (addDot() == 0)
			isValidInput = true;
	}
	else if (selectionKey === "a") {
		if (processAns() == 0)
			isValidInput = true;
	}
	else if (selectionKey === "Enter")
		processResult();
	else if (selectionKey === "Clear")
		processClear();
	if (isValidInput)
		memory.memorySteps++;
}

let selections = document.querySelectorAll('.key');
selections.forEach((selection): void => {
	selection.addEventListener('click', (): void => {
		processInput(selection);
	})
})

window.addEventListener('keydown', (e): void => {
	try {
		let key = document.querySelector(`.key[data-key="${e.key}"]`);
		processInput(key);
	} catch (err) {
	}
})
