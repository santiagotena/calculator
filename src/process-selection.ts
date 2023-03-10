export {
	processNumber,
	processOperator,
	processResult
};

import * as operationsImport from './operations.js';
let operate = operationsImport.operate;
import * as memoryImport from './memory.js';
let memory = memoryImport.memory;
let resetMemory = memoryImport.resetMemory;
import * as displayImport from './display.js';
let displayScreen = displayImport.displayScreen;
let resetDisplay = displayImport.resetDisplay;


function processNumber(selectionNumber: number): void {

	if (memory.lastResult != undefined && memory.operator == undefined && memory.secondNumber == undefined) {
		memory.firstNumber = selectionNumber;
		memory.displayString = selectionNumber.toString();
		resetDisplay();
		displayScreen(memory.displayString);
		console.table(memory);
		return ;
	}

	if (memory.firstNumber == 0 && selectionNumber == 0)
		return ;
	else if (memory.firstNumber == 0 && selectionNumber != 0) {
		memory.firstNumber = selectionNumber;
		memory.displayString = memory.displayString.slice(0, -1);
		memory.displayString = memory.displayString.concat('', selectionNumber.toString());
		displayScreen(memory.displayString);
		return ;
	}

	if (memory.firstNumber == undefined) {
		memory.firstNumber = selectionNumber;
		if (memory.applyNegative == true) {
			memory.firstNumber = memory.firstNumber * -1;
			memory.applyNegative = false;
		}
		memory.displayString = memory.displayString.concat('', selectionNumber.toString());
	}
	else if (memory.firstNumber != undefined && memory.operator == undefined) {
		memory.firstNumber = memory.firstNumber * 10 + selectionNumber;
		memory.displayString = memory.displayString.concat('', selectionNumber.toString());
	}
	else if (memory.firstNumber != undefined && memory.operator != undefined && memory.secondNumber == undefined) {
		memory.secondNumber = selectionNumber;
		if (memory.applyNegative == true) {
			memory.secondNumber = memory.secondNumber * -1;
			memory.applyNegative = false;
		}
		memory.displayString = memory.displayString.concat(' ', selectionNumber.toString());
	}
	else if (memory.operator != undefined && memory.secondNumber != undefined) {
		if (memory.secondNumber == 0 && selectionNumber == 0)
			return ;
		else if (memory.secondNumber == 0 && selectionNumber != 0) {
			memory.secondNumber = selectionNumber;
			memory.displayString = memory.displayString.slice(0, -1);
			memory.displayString = memory.displayString.concat('', selectionNumber.toString());
		}
		else {
			memory.secondNumber = memory.secondNumber * 10 + selectionNumber;
			memory.displayString = memory.displayString.concat('', selectionNumber.toString());
		}
	}
	displayScreen(memory.displayString);
}

function processOperator(selectionType: string): void {
	if (memory.firstNumber == undefined || (memory.firstNumber == 0 && memory.operator != undefined)) {
		if (selectionType == "substract") {
			memory.applyNegative = true;
			memory.displayString = "-";
			displayScreen(memory.displayString);
			return ;
		}
		if (selectionType == "add" && memory.applyNegative == false) {
			memory.firstNumber = 0;
			memory.displayString = "0 +";
		}
		if (selectionType == "multiply" && memory.applyNegative == false) {
			memory.firstNumber = 0;
			memory.displayString = "0 x";
		}
		if (selectionType == "divide" && memory.applyNegative == false) {
			memory.firstNumber = 0;
			memory.displayString = "0 ÷";
		}
		memory.operator = selectionType;
		displayScreen(memory.displayString);
		return ;
	}
	else if (memory.firstNumber != undefined && memory.operator == undefined && memory.secondNumber == undefined) {
		if (selectionType == "substract")
			memory.displayString = memory.displayString.concat('', " -");
		if (selectionType == "add")
			memory.displayString = memory.displayString.concat('', " +");
		if (selectionType == "multiply")
			memory.displayString = memory.displayString.concat('', " x");
		if (selectionType == "divide")
			memory.displayString = memory.displayString.concat('', " ÷");
		memory.operator = selectionType;
		displayScreen(memory.displayString);
		return ;
	}
	else if (memory.firstNumber != undefined && memory.operator != undefined && memory.secondNumber == undefined) {
		memory.displayString = memory.displayString.slice(0, -1);
		if (selectionType == "substract")
			memory.displayString = memory.displayString.concat('', "-");
		if (selectionType == "add")
			memory.displayString = memory.displayString.concat('', "+");
		if (selectionType == "multiply")
			memory.displayString = memory.displayString.concat('', "x");
		if (selectionType == "divide")
			memory.displayString = memory.displayString.concat('', "÷");
		memory.operator = selectionType;
		displayScreen(memory.displayString);
		return ;
	}
}

function processResult(): void {
	let result: number;
	let isKeyValid: boolean;

	isKeyValid = false;
	if (memory.firstNumber != undefined && memory.operator == undefined && memory.secondNumber == undefined)
	{
		result = memory.firstNumber;
		isKeyValid = true;
	}
	else if (memory.firstNumber != undefined && memory.operator != undefined && memory.secondNumber != undefined)
	{
		if (memory.operator == "divide" && memory.secondNumber == 0)
		{
			displayScreen("Wait. That's illegal.")
			resetMemory();
			return ;
		}
		result = operate(memory.firstNumber, memory.secondNumber, memory.operator);
		isKeyValid = true;
	}
	if (isKeyValid)
	{
		resetMemory();
		memory.lastResult = result;
		memory.firstNumber = result;
		memory.displayString = result.toString();
		displayScreen(memory.displayString);
	}
}