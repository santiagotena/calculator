export {
	processClear,
	processDelete,
};

import * as memoryImport from '../memory.js';
const memory = memoryImport.memory;
const resetMemory = memoryImport.resetMemory;
const copyFromHistory = memoryImport.copyFromHistory;
import * as displayImport from '../display.js';
const displayScreen = displayImport.displayScreen;
const resetDisplay = displayImport.resetDisplay;
import * as processSelectionImport from './process-selection.js';
const isFirstNumber = processSelectionImport.isFirstNumber;
const isOperator = processSelectionImport.isOperator;
const isSecondNumber = processSelectionImport.isSecondNumber;

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

