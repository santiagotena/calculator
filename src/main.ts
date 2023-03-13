import * as memoryImport from './memory.js';
const memory = memoryImport.memory;
const copyToHistory = memoryImport.copyToHistory;
import * as processSelectionImport from './process-selection.js';
const processNumber = processSelectionImport.processNumber;
const processOperator = processSelectionImport.processOperator;
const processResult = processSelectionImport.processResult;
const processDecimal = processSelectionImport.processDecimal;
const addDot = processSelectionImport.addDot;
import * as utilsImport from './utils.js';
const clear = utilsImport.clear;
const processDelete = utilsImport.processDelete;
const processAns = utilsImport.processAns;

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
		clear();
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