import { isFirstNumber, isOperator, isSecondNumber } from "./booleans.js";
import { memory } from "../memory.js";
import { displayScreen } from "../display.js";

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

export {
	processNumber
};
