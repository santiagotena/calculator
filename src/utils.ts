export {
	clear,
	processDelete,
	processAns
};

import * as memoryImport from './memory.js';
const memory = memoryImport.memory;
const resetMemory = memoryImport.resetMemory;
const copyFromHistory = memoryImport.copyFromHistory;
import * as displayImport from './display.js';
const displayScreen = displayImport.displayScreen;
const resetDisplay = displayImport.resetDisplay;
import * as processSelectionImport from './process-selection.js';
const isLastResult = processSelectionImport.isLastResult;
const isFirstNumber = processSelectionImport.isFirstNumber;
const isOperator = processSelectionImport.isOperator;
const isSecondNumber = processSelectionImport.isSecondNumber;

function clear(): void {
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

function processAns(): number {
	if (!isLastResult())
		memory.lastResult = 0;
	if (!isFirstNumber() ||
		(isLastResult() && !isOperator() && !isSecondNumber())) {
		memory.firstNumber = memory.lastResult;
		memory.displayString = "Ans";
		memory.usedAns = true;
		displayScreen(memory.displayString);
		return (0);
	} 
	else if (isFirstNumber() && isOperator() && !isSecondNumber()) {
		memory.secondNumber = memory.lastResult;
		memory.displayString = memory.displayString.concat("Ans");
		memory.usedAns = true;
		displayScreen(memory.displayString);
		return (0);
	}
}
