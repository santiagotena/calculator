export {
	clear,
	processAns
};

import * as memoryImport from './memory.js';
let memory = memoryImport.memory;
let oldMemory = memoryImport.memory;
let resetMemory = memoryImport.resetMemory;
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

function processAns(): void {
	if (!isLastResult())
		memory.lastResult = 0;
	if (!isFirstNumber()) {
		memory.firstNumber = memory.lastResult;
		memory.displayString = "Ans";
		displayScreen(memory.displayString);
		
	} 
	else if (isFirstNumber() && isOperator() && !isSecondNumber()) {
		memory.secondNumber = memory.lastResult;
		memory.displayString = memory.displayString.concat(" Ans");
		displayScreen(memory.displayString);
	}
	else if (isLastResult() && !isOperator() && !isSecondNumber()) {
		memory.firstNumber = memory.lastResult;
		memory.displayString = "Ans";
		displayScreen(memory.displayString);
	}
}