import * as processSelectionImport from './process-selection.js';
let processNumber = processSelectionImport.processNumber;
let processOperator = processSelectionImport.processOperator;
let processResult = processSelectionImport.processResult;
import * as utilsImport from './utils.js';
let clear = utilsImport.clear;

function processInput(selection: Element): void {
	let selectionType: string;
	let selectionKey: string;
	let selectionNumber: number;
	
	selectionType = selection.getAttribute('data-type');
	selectionKey = selection.getAttribute('data-key');
	if (selectionType === "number")
	{
		selectionNumber = +selectionKey;
		processNumber(selectionNumber);
	}
	if (selectionType === "operator")
		processOperator(selectionKey);
	if (selectionKey === "=")
		processResult();
	if (selectionKey == "CLEAR")
		clear();
}

let selections = document.querySelectorAll('.key');
selections.forEach((selection): void => {
	selection.addEventListener('click', (): void => {
		processInput(selection);
	})
})