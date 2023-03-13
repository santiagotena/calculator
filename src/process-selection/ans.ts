import { isFirstNumber, isLastResult, isOperator, isSecondNumber } from "./booleans.js";
import { memory } from "../memory.js";
import { displayScreen } from "../display.js";

function displayAns(): void {
	memory.firstNumber = memory.lastResult;
	memory.displayString = "Ans";
	memory.usedAns = true;
	displayScreen(memory.displayString);
}

function concatAns(): void {
	memory.secondNumber = memory.lastResult;
	memory.displayString = memory.displayString.concat("Ans");
	memory.usedAns = true;
	displayScreen(memory.displayString);
}

function processAns(): number {
	if (!isLastResult())
		memory.lastResult = 0;
	if (!isFirstNumber() ||
		(isLastResult() && !isOperator() && !isSecondNumber())) {
		displayAns();
		return (0);
	} 
	else if (isFirstNumber() && isOperator() && !isSecondNumber()) {
		concatAns();
		return (0);
	}
}

export {
	processAns
};
