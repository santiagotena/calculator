import { areBothNumbersAndOperator, isOnlyFirstNumber } from "./booleans.js";
import { operate } from "../operations.js";
import { memory, resetMemory } from "../memory.js";
import { displayScreen } from "../display.js";

function displayEasterEgg(result: number): boolean {
	let isEasterEgg: boolean;
	let message: string;
	
	isEasterEgg = false;
	if (result === 69) {
		message = "Nice";
		isEasterEgg = true;
	} else if (result == 420) {
		message = "Smoke Weed Everyday";
		isEasterEgg = true
	} else if (result == 58008) {
		message = "Cultured";
		isEasterEgg = true
	}
	displayScreen(message);
	resetMemory();
	memory.firstNumber = result;
	memory.lastResult = result;
	memory.displayString = message;
	memory.usedEqual = true;
	return (isEasterEgg);
}

function divideByZeroEasterEgg(): void {
	displayScreen("Wait. That's illegal.")
	resetMemory();
}

function setUpNextCalculation(result: number): void {
	resetMemory();
	memory.firstNumber = result;
	memory.lastResult = result;
	memory.displayString = result.toString();
	memory.usedEqual = true;
	displayScreen(memory.displayString);
}

function processResult(): void {
	let result: number;
	let isKeyValid: boolean;

	isKeyValid = false;
	if (isOnlyFirstNumber())
	{
		result = memory.firstNumber;
		isKeyValid = true;
	} else if (areBothNumbersAndOperator()) {
		if (memory.operator == "/" && memory.secondNumber == 0)
		{
			divideByZeroEasterEgg();
			return ;
		}
		result = operate(memory.firstNumber, memory.secondNumber, memory.operator);
		if (displayEasterEgg(result))
			return ;
		isKeyValid = true;
	}
	if (isKeyValid)
		setUpNextCalculation(result);
}

export {
	processResult
};
