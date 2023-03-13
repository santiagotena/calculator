import { operate } from "../operations.js";
import { memory, resetMemory } from "../memory.js";
import { displayScreen } from "../display.js";

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

export {
	processResult
};