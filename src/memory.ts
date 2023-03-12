export {
		memory,
		resetMemory,
		copyToOldMemory,
		copyFromOldMemory
	};

const memory: {
	firstNumber: number,
	operator: string,
	secondNumber: number,
	lastResult: number,
	isNegative: boolean,
	isDecimal: boolean,
	decimalSpaces: number,
	usedAns: boolean,
	usedEqual: boolean,
	displayString: string,
	memorySteps: number
} = {
	firstNumber: undefined,
	operator: undefined,
	secondNumber: undefined,
    lastResult: undefined,
	isNegative: false,
	isDecimal: false,
	decimalSpaces: 0,
	usedAns: false,
	usedEqual: false,
	displayString: "",
	memorySteps: 0,
};

const oldMemory: {
	firstNumber: number,
	operator: string,
	secondNumber: number,
	lastResult: number,
	isNegative: boolean,
	isDecimal: boolean,
	decimalSpaces: number,
	usedAns: boolean,
	usedEqual: boolean,
	displayString: string,
	memorySteps: number
} = {
	firstNumber: undefined,
	operator: undefined,
	secondNumber: undefined,
    lastResult: undefined,
	isNegative: false,
	isDecimal: false,
	decimalSpaces: 0,
	usedAns: false,
	usedEqual: false,
	displayString: "",
	memorySteps: 0,
};

function resetMemory(): void {
	for (let key in memory) {
		if (typeof memory[key] == "boolean")
			memory[key] = false;
		else
			memory[key] = undefined;
		memory.displayString = "";
		memory.decimalSpaces = 0;
		memory.memorySteps = 0;
	}
}

function copyFromOldMemory(): void {
	for (let key in memory) {
		memory[key] = oldMemory[key];
	}
}

function copyToOldMemory(): void {
	for (let key in memory) {
		oldMemory[key] = memory[key];
	}
}