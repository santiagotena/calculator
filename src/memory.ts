export {
		memory,
		resetMemory
	};

const memory: {
	firstNumber: number,
	operator: string,
	secondNumber: number,
	lastResult: number,
	applyNegative: boolean,
	displayString: string
} = {
	firstNumber: undefined,
	operator: undefined,
	secondNumber: undefined,
    lastResult: undefined,
	applyNegative: false,
	displayString: "",
};

// Memory //
function resetMemory(): void {
	memory.firstNumber = undefined;
	memory.operator = undefined;
	memory.secondNumber = undefined;
	memory.lastResult = undefined;
	memory.applyNegative = false;
	memory.displayString = "";
}