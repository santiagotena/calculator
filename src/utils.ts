export {
	clear,
	processAns
};

import * as memoryImport from './memory.js';
let memory = memoryImport.memory;
let resetMemory = memoryImport.resetMemory;

import * as displayImport from './display.js';
let displayScreen = displayImport.displayScreen;
let resetDisplay = displayImport.resetDisplay;

function clear(): void {
	resetMemory();
	resetDisplay();
}

function processAns(): void {
	if (memory.firstNumber == undefined) {
		
		displayScreen(memory.displayString);
	}
}