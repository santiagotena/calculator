import { isFirstNumber, isOperator, isSecondNumber } from "./booleans.js";
import { memory } from "../memory.js";
import { displayScreen } from "../display.js";

function addOperatorToZero(selectionType: string): void {
	if (selectionType == "+") {
		memory.firstNumber = 0;
		memory.displayString = "0 + ";
	}
	if (selectionType == "*") {
		memory.firstNumber = 0;
		memory.displayString = "0 x ";
	}
	if (selectionType == "/") {
		memory.firstNumber = 0;
		memory.displayString = "0 ÷ ";
	}
	memory.operator = selectionType;
	displayScreen(memory.displayString);
}

function makeFirstNumberNegative(): void {
	memory.isNegative = true;
	memory.displayString = "-";
	displayScreen(memory.displayString);
}

function placeOperator(selectionType: string): void {
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
}

function replaceOperator(selectionType: string): void {
	memory.displayString = memory.displayString.slice(0, -2);
	if (selectionType == "-")
		memory.displayString = memory.displayString.concat("- ");
	if (selectionType == "+")
		memory.displayString = memory.displayString.concat("+ ");
	if (selectionType == "*")
		memory.displayString = memory.displayString.concat("x ");
	if (selectionType == "/")
		memory.displayString = memory.displayString.concat("÷ ");
	memory.operator = selectionType;
	displayScreen(memory.displayString);
}

function makeSecondNumberNegative(): void {
	memory.isNegative = true;
	memory.displayString = memory.displayString.concat("-");
	displayScreen(memory.displayString);
}

function processOperator(selectionType: string): number {
	if (!isFirstNumber() || (memory.firstNumber == 0 && isOperator())) {
		if (selectionType == "-") {
			makeFirstNumberNegative();
			return (0);
		}
		if (!memory.isNegative) {
			addOperatorToZero(selectionType);
			return (0);
		}
	} else if (!isOperator()) {
		placeOperator(selectionType);
		return (0);
	} else if (isOperator() && !isSecondNumber()) {
		if (selectionType == "-") {
			if (memory.isNegative)
				return (1);
			makeSecondNumberNegative();
			return (0);
		} else {
			replaceOperator(selectionType);
			return (1);
		}
	}
}

export {
	processOperator
};
