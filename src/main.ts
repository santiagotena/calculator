import * as memoryImport from './memory.js';
let memory = memoryImport.memory;
// let memoryHistory = memoryImport.memoryHistory;
let copyToHistory = memoryImport.copyToHistory;
import * as processSelectionImport from './process-selection.js';
let processNumber = processSelectionImport.processNumber;
let processOperator = processSelectionImport.processOperator;
let processResult = processSelectionImport.processResult;
let processDecimal = processSelectionImport.processDecimal;
let addDot = processSelectionImport.addDot;
import * as utilsImport from './utils.js';
let clear = utilsImport.clear;
let processDelete = utilsImport.processDelete;
let processAns = utilsImport.processAns;

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