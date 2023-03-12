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
	usedAns: boolean,
	usedEqual: boolean,
	displayString: string
} = {
	firstNumber: undefined,
	operator: undefined,
	secondNumber: undefined,
    lastResult: undefined,
	isNegative: false,
	isDecimal: false,
	usedAns: false,
	usedEqual: false,
	displayString: "",
};

const oldMemory: {
	firstNumber: number,
	operator: string,
	secondNumber: number,
	lastResult: number,
	isNegative: boolean,
	isDecimal: boolean,
	usedAns: boolean,
	usedEqual: boolean,
	displayString: string
} = {
	firstNumber: undefined,
	operator: undefined,
	secondNumber: undefined,
    lastResult: undefined,
	isNegative: false,
	isDecimal: false,
	usedAns: false,
	usedEqual: false,
	displayString: "",
};

function resetMemory(): void {
	for (let key in memory) {
		if (typeof memory[key] == "boolean")
			memory[key] = false;
		else
			memory[key] = undefined;
		memory.displayString = "";
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