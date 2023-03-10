export {
	clear
};

import * as memoryImport from './memory.js';
let resetMemory = memoryImport.resetMemory;

import * as displayImport from './display.js';
let resetDisplay = displayImport.resetDisplay;

function clear(): void {
	resetMemory();
	resetDisplay();
}
