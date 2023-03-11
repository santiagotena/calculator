export {
	processNumber,
	processOperator,
	processResult,
	isLastResult,
	isFirstNumber,
	isOperator,
	isSecondNumber
};

import * as operationsImport from './operations.js';
let operate = operationsImport.operate;
import * as memoryImport from './memory.js';
let memory = memoryImport.memory;
let resetMemory = memoryImport.resetMemory;
import * as displayImport from './display.js';
let displayScreen = displayImport.displayScreen;

const isLastResult = (): boolean => (memory.lastResult != undefined);
const isFirstNumber = (): boolean => (memory.firstNumber != undefined);
const isOperator = (): boolean => (memory.operator != undefined);
const isSecondNumber = (): boolean => (memory.secondNumber != undefined);

function processNumber(selectionNumber: number): void {

	if (isLastResult() && !isOperator() && !isSecondNumber()) {
		memory.firstNumber = selectionNumber;
		memory.displayString = selectionNumber.toString();
		displayScreen(memory.displayString);
		return ;
	}

	if (!isOperator() && !isSecondNumber()) {
		if (memory.firstNumber == 0 && selectionNumber == 0)
			return ;
		else if (memory.firstNumber == 0 && selectionNumber != 0) {
			memory.firstNumber = selectionNumber;
			memory.displayString = memory.displayString.slice(0, -1);
			memory.displayString = memory.displayString.concat('', selectionNumber.toString());
			displayScreen(memory.displayString);
			return ;
		}
	}
	if (!isFirstNumber()) {
		memory.firstNumber = selectionNumber;
		if (memory.applyNegative == true) {
			memory.firstNumber = memory.firstNumber * -1;
			memory.applyNegative = false;
		}
		memory.displayString = memory.displayString.concat('', selectionNumber.toString());
	}
	else if (isFirstNumber() && !isOperator()) {
		if (memory.firstNumber < 0)
			memory.firstNumber = memory.firstNumber * 10 - selectionNumber;
		else	
			memory.firstNumber = memory.firstNumber * 10 + selectionNumber;
		memory.displayString = memory.displayString.concat('', selectionNumber.toString());
	}
	else if (isFirstNumber() && isOperator() && !isSecondNumber()) {
		memory.secondNumber = selectionNumber;
		if (memory.applyNegative == true) {
			memory.secondNumber = memory.secondNumber * -1;
			memory.applyNegative = false;
		}
		memory.displayString = memory.displayString.concat(' ', selectionNumber.toString());
	}
	else if (isOperator() && isSecondNumber()) {
		if (memory.secondNumber == 0 && selectionNumber == 0)
			return ;
		else if (memory.secondNumber == 0 && selectionNumber != 0) {
			memory.secondNumber = selectionNumber;
			memory.displayString = memory.displayString.slice(0, -1);
			memory.displayString = memory.displayString.concat('', selectionNumber.toString());
		}
		else {
			if (memory.secondNumber < 0)
				memory.secondNumber = memory.secondNumber * 10 - selectionNumber;
			else	
				memory.secondNumber = memory.secondNumber * 10 + selectionNumber;
			memory.displayString = memory.displayString.concat('', selectionNumber.toString());
		}
	}
	displayScreen(memory.displayString);
}

function processOperator(selectionType: string): void {
	if (!isFirstNumber() || (memory.firstNumber == 0 && isOperator())) {
		if (selectionType == "-") {
			memory.applyNegative = true;
			memory.displayString = "-";
			displayScreen(memory.displayString);
			return ;
		}
		if (memory.applyNegative == false)
		{
			if (selectionType == "+") {
				memory.firstNumber = 0;
				memory.displayString = "0 +";
			}
			if (selectionType == "*") {
				memory.firstNumber = 0;
				memory.displayString = "0 x";
			}
			if (selectionType == "/") {
				memory.firstNumber = 0;
				memory.displayString = "0 ÷";
			}
		}
		memory.operator = selectionType;
		displayScreen(memory.displayString);
		return ;
	}
	else if (isFirstNumber() && !isOperator() && !isSecondNumber()) {
		if (selectionType == "-")
			memory.displayString = memory.displayString.concat('', " -");
		if (selectionType == "+")
			memory.displayString = memory.displayString.concat('', " +");
		if (selectionType == "*")
			memory.displayString = memory.displayString.concat('', " x");
		if (selectionType == "/")
			memory.displayString = memory.displayString.concat('', " ÷");
		memory.operator = selectionType;
		displayScreen(memory.displayString);
		return ;
	}
	else if (isFirstNumber() && isOperator() && !isSecondNumber()) {
		memory.displayString = memory.displayString.slice(0, -1);
		if (selectionType == "-")
			memory.displayString = memory.displayString.concat('', "-");
		if (selectionType == "+")
			memory.displayString = memory.displayString.concat('', "+");
		if (selectionType == "*")
			memory.displayString = memory.displayString.concat('', "x");
		if (selectionType == "/")
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
		if (memory.operator == "/" && memory.secondNumber == 0)
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