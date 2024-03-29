import { 
		areBothNumbersAndOperator, isAnsOrEqualUsed, isFirstNumber, 
		isOnlyFirstNumber, isOnlySecondNumberMissing 
		} from "./booleans.js";
import { memory } from "../memory.js";
import { displayScreen } from "../display.js";

function addDecimalToSecondNumber(selectionNumber: number): void {
	if (memory.secondNumber < 0)
		memory.secondNumber = memory.secondNumber - selectionNumber / 10 ** memory.decimalSpaces;
	else	
		memory.secondNumber = memory.secondNumber + selectionNumber / 10 ** memory.decimalSpaces;
	memory.secondNumber = Math.round((memory.secondNumber + Number.EPSILON) * 100) / 100;
	if (memory.isNegative) {
		memory.secondNumber = memory.secondNumber * -1;
		if (memory.secondNumber != 0)
			memory.isNegative = false;
	}
	memory.displayString = memory.displayString.concat(selectionNumber.toString());
}

function addDecimalToFirstNumber(selectionNumber: number): void {
	if (memory.firstNumber < 0)
		memory.firstNumber = memory.firstNumber - selectionNumber / 10 ** memory.decimalSpaces;
	else	
		memory.firstNumber = memory.firstNumber + selectionNumber / 10 ** memory.decimalSpaces;
	memory.firstNumber = Math.round((memory.firstNumber + Number.EPSILON) * 100) / 100;
	if (memory.isNegative) {
		memory.firstNumber = memory.firstNumber * -1;
		if (memory.firstNumber != 0)
			memory.isNegative = false;
	}
	memory.displayString = memory.displayString.concat(selectionNumber.toString());
}

function processDecimal(selectionKey: string): number {
	let selectionNumber: number;

	selectionNumber = +selectionKey;
	if (isOnlyFirstNumber())
		addDecimalToFirstNumber(selectionNumber);
	else if (areBothNumbersAndOperator())
		addDecimalToSecondNumber(selectionNumber);
	memory.decimalSpaces++;
	displayScreen(memory.displayString);
	return (0);
}

function addDot(): number {
	if (memory.isDecimal)
		return (1);

	if (!isFirstNumber() || isAnsOrEqualUsed()) {
		if (isAnsOrEqualUsed())
			memory.displayString = "";
		memory.firstNumber = 0;
		memory.displayString = memory.displayString.concat("0.");
	} else if (isOnlySecondNumberMissing()) {
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

export {
	processDecimal,
	addDot
};
