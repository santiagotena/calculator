export {
		memory,
		memoryHistory,
		resetMemory,
		copyToHistory,
		copyFromHistory
	};

interface MemoryInterface {
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
}

const memory: MemoryInterface = {
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
	memorySteps: 1,
}

const backupMemory: MemoryInterface = {
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
	memorySteps: 1,
}

let memoryHistory = [memory];

function resetMemory(): void {
	for (let key in memory)
		memory[key] = backupMemory[key];
}

function copyToHistory(): void {
	for (let key in memory)
		memoryHistory[memory.memorySteps - 1][key]= memory[key];
}

function copyFromHistory(): void {
	for (let key in memory)
		memory[key]= memoryHistory[memory.memorySteps - 1][key];
	if (memory.memorySteps == 1)
		memory.displayString = "0";
	if (memory.memorySteps > 1)
		memory.memorySteps--;
}
