export {
	processNumber,
	processOperator,
	processResult,
	processDecimal,
	addDot,
	isLastResult,
	isFirstNumber,
	isOperator,
	isSecondNumber
};

import * as operationsImport from '../operations.js';
const operate = operationsImport.operate;
import * as memoryImport from '../memory.js';
const memory = memoryImport.memory;
const resetMemory = memoryImport.resetMemory;
import * as displayImport from '../display.js';
const displayScreen = displayImport.displayScreen;

const isLastResult = (): boolean => (memory.lastResult != undefined);
const isFirstNumber = (): boolean => (memory.firstNumber != undefined);
const isOperator = (): boolean => (memory.operator != undefined);
const isSecondNumber = (): boolean => (memory.secondNumber != undefined);

function processNumber(selectionKey: string): number {
	let selectionNumber: number;

	selectionNumber = +selectionKey;
	if (!isOperator() && !isSecondNumber() && (memory.usedAns || memory.usedEqual || memory.reachedStart)) {
		memory.firstNumber = undefined;
		memory.displayString = "";
		displayScreen(memory.displayString);
		if (memory.usedAns)
			memory.usedAns = false;
		if (memory.usedEqual)
			memory.usedEqual = false;
		if (memory.reachedStart)
			memory.reachedStart = false;
	}
	if (isFirstNumber() && !isOperator() && !isSecondNumber()) {
		if (memory.firstNumber == 0 && selectionNumber == 0)
			return (1);
		else if (memory.firstNumber == 0 && selectionNumber != 0) {
			memory.firstNumber = selectionNumber;
			memory.displayString = memory.displayString.slice(0, -1);
			memory.displayString = memory.displayString.concat(selectionNumber.toString());
			displayScreen(memory.displayString);
			return (1);
		}
	}
	if (!isFirstNumber()) {
		memory.firstNumber = selectionNumber;
		if (memory.isNegative == true) {
			memory.firstNumber = memory.firstNumber * -1;
			if (memory.firstNumber != 0)
				memory.isNegative = false;
		}
		memory.displayString = memory.displayString.concat(selectionNumber.toString());
	} else if (!isOperator()) {
		if (memory.firstNumber < 0)
			memory.firstNumber = memory.firstNumber * 10 - selectionNumber;
		else	
			memory.firstNumber = memory.firstNumber * 10 + selectionNumber;
		if (memory.isNegative) {
			memory.firstNumber = memory.firstNumber * -1;
			if (memory.firstNumber != 0)
				memory.isNegative = false;
		}
		memory.displayString = memory.displayString.concat(selectionNumber.toString());
	} else if (!isSecondNumber()) {
		memory.secondNumber = selectionNumber;
		if (memory.isNegative == true) {
			memory.secondNumber = memory.secondNumber * -1;
			if (memory.secondNumber != 0)
				memory.isNegative = false;
		}
		memory.displayString = memory.displayString.concat(selectionNumber.toString());
	} else {
		if (memory.secondNumber == 0 && selectionNumber == 0)
			return (1);
		else if (memory.secondNumber == 0 && selectionNumber != 0) {
			memory.secondNumber = selectionNumber;
			memory.displayString = memory.displayString.slice(0, -1);
			memory.displayString = memory.displayString.concat(selectionNumber.toString());
			displayScreen(memory.displayString);
			return (1);
		} else {
			if (memory.secondNumber < 0)
				memory.secondNumber = memory.secondNumber * 10 - selectionNumber;
			else	
				memory.secondNumber = memory.secondNumber * 10 + selectionNumber;
			if (memory.isNegative) {
				memory.secondNumber = memory.secondNumber * -1;
				if (memory.secondNumber != 0)
					memory.isNegative = false;
			}
			memory.displayString = memory.displayString.concat(selectionNumber.toString());
		}
	}
	displayScreen(memory.displayString);
	return (0);
}

function processOperator(selectionType: string): number {
	if (!isFirstNumber() || (memory.firstNumber == 0 && isOperator())) {
		if (selectionType == "-") {
			memory.isNegative = true;
			memory.displayString = "-";
			displayScreen(memory.displayString);
			return (0);
		}
		if (memory.isNegative == false)
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
		return (0);
	} else if (isOperator() && !isSecondNumber()) {
		if (selectionType == "-") {
			if (memory.isNegative)
				return (1);
			memory.isNegative = true;
			memory.displayString = memory.displayString.concat("-");
			displayScreen(memory.displayString);
			return (0);
		}
	} else if (!isOperator()) {
		if (selectionType == "-")
			memory.displayString = memory.displayString.concat(" - ");
		if (selectionType == "+")
			memory.displayString = memory.displayString.concat(" + ");
		if (selectionType == "*")
			memory.displayString = memory.displayString.concat(" x ");
		if (selectionType == "/")
			memory.displayString = memory.displayString.concat(" ÷ ");
		memory.operator = selectionType;
		memory.isDecimal = false;
		memory.decimalSpaces = 0;
		displayScreen(memory.displayString);
		return (0);
	} else if (!isSecondNumber()) {
		memory.displayString = memory.displayString.slice(0, -1);
		if (selectionType == "-")
			memory.displayString = memory.displayString.concat("-");
		if (selectionType == "+")
			memory.displayString = memory.displayString.concat("+");
		if (selectionType == "*")
			memory.displayString = memory.displayString.concat("x");
		if (selectionType == "/")
			memory.displayString = memory.displayString.concat("÷");
		memory.operator = selectionType;
		displayScreen(memory.displayString);
		return (1);
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
	} else if (memory.firstNumber != undefined && memory.operator != undefined && memory.secondNumber != undefined) {
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
		memory.firstNumber = result;
		memory.lastResult = result;
		memory.displayString = result.toString();
		memory.usedEqual = true;
		displayScreen(memory.displayString);
	}
}

function processDecimal(selectionKey: string): number {
	let selectionNumber: number;

	selectionNumber = +selectionKey;
	if (isFirstNumber() && !isOperator() && !isSecondNumber()) {
		if (memory.firstNumber < 0)
			memory.firstNumber = memory.firstNumber - selectionNumber / 10**memory.decimalSpaces;
		else	
			memory.firstNumber = memory.firstNumber + selectionNumber / 10**memory.decimalSpaces;
		memory.firstNumber = Math.round((memory.firstNumber + Number.EPSILON) * 100) / 100;
		if (memory.isNegative) {
			memory.firstNumber = memory.firstNumber * -1;
			if (memory.firstNumber != 0)
				memory.isNegative = false;
		}
		memory.displayString = memory.displayString.concat(selectionNumber.toString());
	} else if (isFirstNumber() && isOperator() && isSecondNumber()) {
		if (memory.secondNumber < 0)
			memory.secondNumber = memory.secondNumber - selectionNumber / 10**memory.decimalSpaces;
		else	
			memory.secondNumber = memory.secondNumber + selectionNumber / 10**memory.decimalSpaces;
		memory.secondNumber = Math.round((memory.secondNumber + Number.EPSILON) * 100) / 100;
		if (memory.isNegative) {
			memory.secondNumber = memory.secondNumber * -1;
			if (memory.secondNumber != 0)
				memory.isNegative = false;
		}
		memory.displayString = memory.displayString.concat(selectionNumber.toString());
	}
	memory.decimalSpaces++;
	displayScreen(memory.displayString);
	return (0);
}

function addDot(): number {
	if (memory.isDecimal)
		return (1);
	if (!isOperator() && !isSecondNumber() && (memory.usedAns || memory.usedEqual || memory.reachedStart)) {
		memory.displayString = "";
		memory.firstNumber = 0;
		memory.displayString = memory.displayString.concat("0.");
	} else if (!isFirstNumber()) {
		memory.firstNumber = 0;
		memory.displayString = memory.displayString.concat("0.");
	} else if (!isOperator() && !isSecondNumber()) {
		memory.displayString = memory.displayString.concat(".");
	} else if (isOperator() && !isSecondNumber()) {
		memory.secondNumber = 0;
		memory.displayString = memory.displayString.concat("0.");
	} else {
		memory.displayString = memory.displayString.concat(".");
	}
	memory.isDecimal = true;
	memory.decimalSpaces++;
	displayScreen(memory.displayString);
	return (0);
}
