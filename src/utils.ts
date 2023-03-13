export {
	clear,
	processDelete,
	processAns
};

import * as memoryImport from './memory.js';
let memory = memoryImport.memory;
let oldMemory = memoryImport.memory;
let resetMemory = memoryImport.resetMemory;
let copyFromHistory = memoryImport.copyFromHistory;
import * as displayImport from './display.js';
let displayScreen = displayImport.displayScreen;
let resetDisplay = displayImport.resetDisplay;
import * as processSelectionImport from './process-selection.js';
let isLastResult = processSelectionImport.isLastResult;
let isFirstNumber = processSelectionImport.isFirstNumber;
let isOperator = processSelectionImport.isOperator;
let isSecondNumber = processSelectionImport.isSecondNumber;

function clear(): void {
	resetMemory();
	resetDisplay();
}

function processDelete(): void {
	if (memory.usedEqual) {
		memory.displayString = "0";
		memory.firstNumber = 0;
		displayScreen(memory.displayString);
	}
	copyFromHistory();
	displayScreen(memory.displayString);
}

function processAns(): number {
	if (!isLastResult())
		memory.lastResult = 0;
	if (!isFirstNumber()) {
		memory.firstNumber = memory.lastResult;
		memory.displayString = "Ans";
		memory.usedAns = true;
		displayScreen(memory.displayString);
		return (0);
	} 
	else if (isFirstNumber() && isOperator() && !isSecondNumber()) {
		memory.secondNumber = memory.lastResult;
		memory.displayString = memory.displayString.concat(" Ans");
		memory.usedAns = true;
		displayScreen(memory.displayString);
		return (0);
	}
	else if (isLastResult() && !isOperator() && !isSecondNumber()) {
		memory.firstNumber = memory.lastResult;
		memory.displayString = "Ans";
		memory.usedAns = true;
		displayScreen(memory.displayString);
		return (0);
	}
}