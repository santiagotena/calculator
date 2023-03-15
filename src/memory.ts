class Memory {
	firstNumber: number;
	operator: string;
	secondNumber: number;
	lastResult: number;
	isNegative: boolean;
	isDecimal: boolean;
	decimalSpaces: number;
	usedAns: boolean;
	usedEqual: boolean;
	displayString: string;
	memorySteps: number;

	constructor(
		firstNumber = undefined, 
		operator = undefined,
		secondNumber = undefined,
		lastResult = undefined,
		isNegative = false,
		isDecimal = false,
		decimalSpaces = 0,
		usedAns = false,
		usedEqual = false,
		displayString = "",
		memorySteps = 1
	) {
		this.firstNumber = firstNumber;
		this.operator = operator;
		this.secondNumber = secondNumber;
		this.lastResult = lastResult;
		this.isNegative = isNegative;
		this.isDecimal = isDecimal;
		this.decimalSpaces = decimalSpaces;
		this.usedAns = usedAns;
		this.usedEqual = usedEqual;
		this.displayString = displayString;
		this.memorySteps = memorySteps;
	}
}
	
function makeMemoryHistory(n: number) {
	let memoryHistory = new Array(n)
	for (let i = 0; i < n; ++i) {
		memoryHistory[i] = new Memory()
	}
	return (memoryHistory);
}

const historySize = 1000;
let memoryHistory = makeMemoryHistory(historySize);
const memory = new Memory();
const backupMemory = new Memory();

function resetMemory(): void {
	for (let key in memory)
		memory[key] = backupMemory[key];
	memoryHistory = makeMemoryHistory(historySize);
}

function copyToHistory(): void {
	for (let key in memory)
		memoryHistory[memory.memorySteps][key]= memory[key];
}

function copyFromHistory(): void {
	if (memory.memorySteps == 1) {
		return ;
	}
	for (let key in memory)
		memory[key]= memoryHistory[memory.memorySteps - 1][key];
}

export {
	memory,
	resetMemory,
	copyToHistory,
	copyFromHistory
};
