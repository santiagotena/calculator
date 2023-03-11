import * as memoryImport from './memory.js';
let memory = memoryImport.memory;
let copyToOldMemory = memoryImport.copyToOldMemory;
let copyFromOldMemory = memoryImport.copyFromOldMemory;
import * as processSelectionImport from './process-selection.js';
let processNumber = processSelectionImport.processNumber;
let processOperator = processSelectionImport.processOperator;
let processResult = processSelectionImport.processResult;
import * as displayImport from './display.js';
let displayScreen = displayImport.displayScreen;
import * as utilsImport from './utils.js';
let clear = utilsImport.clear;
let processAns = utilsImport.processAns;

function processInput(selection: Element): void {
	let selectionType: string;
	let selectionKey: string;
	let selectionNumber: number;
	
	selectionType = selection.getAttribute('data-type');
	selectionKey = selection.getAttribute('data-key');
	if (selectionKey === "DEL") {
		// Make function of this in utils
		copyFromOldMemory();
		displayScreen(memory.displayString);
		return ;
	}
	copyToOldMemory();
	if (selectionType === "number")
	{
		selectionNumber = +selectionKey;
		processNumber(selectionNumber);
	}
	else if (selectionType === "operator")
		processOperator(selectionKey);
	else if (selectionKey === "=")
		processResult();
	else if (selectionKey === "Ans")
		processAns();
	else if (selectionKey === "CLEAR")
		clear();
}

let selections = document.querySelectorAll('.key');
selections.forEach((selection): void => {
	selection.addEventListener('click', (): void => {
		processInput(selection);
	})
})

window.addEventListener('keydown', (e): void => {
	// console.log(e);
	let key = document.querySelector(`.key[data-key="${e.key}"]`);
	processInput(key);
})