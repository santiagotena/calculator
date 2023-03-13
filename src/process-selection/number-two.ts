import { memory } from "../memory";
import { displayScreen } from "../display";

function addSecondNumber(selectionNumber: number): void {
	memory.secondNumber = selectionNumber;
	if (memory.isNegative == true) {
		memory.secondNumber = memory.secondNumber * -1;
		if (memory.secondNumber != 0)
		memory.isNegative = false;
	}
	memory.displayString = memory.displayString.concat(selectionNumber.toString());
}

function replaceSecondZero(selectionNumber: number): void {
	memory.secondNumber = selectionNumber;
	memory.displayString = memory.displayString.slice(0, -1);
	memory.displayString = memory.displayString.concat(selectionNumber.toString());
	displayScreen(memory.displayString);
}

function expandSecondNumber(selectionNumber: number): void {
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

export {
	addSecondNumber,
	replaceSecondZero,
	expandSecondNumber
};
