// Global object for memory //
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
    lastResult: 0,
	applyNegative: false,
	displayString: "",
};

// Operations //
function add(a: number, b: number): number {
	return (a + b);
}

function substract(a: number, b:number): number {
	return (a - b);
}

function multiply(a: number, b: number): number {
	return (a * b);
}

function divide(a: number, b: number): number {
	return (a / b);
}

function operate(a: number, b: number, operation: string): number {
	if (operation == "add")
		return (add(a, b));
	else if (operation == "substract")
		return (substract(a, b));
	else if (operation == "multiply")
		return (multiply(a, b));
	else if (operation == "divide")
		return (divide(a, b));
}

// Memory //
function resetMemory(): void {
	memory.firstNumber = undefined;
	memory.operator = undefined;
	memory.secondNumber = undefined;
	memory.lastResult = 0;
	memory.applyNegative = false;
	memory.displayString = "";
}

// Display selection and results //
function resetDisplay(): void {
	let display = document.querySelector('.display');

	display.textContent = "0";
}

function displayScreen(displayNumber: string): void {
	let display = document.querySelector('.display');

	display.textContent = displayNumber;
}

// Input processing //
function processNumber(selectionNumber: number): void {
	if (memory.firstNumber == undefined) {
		memory.firstNumber = selectionNumber;
		if (memory.applyNegative == true) {
			memory.firstNumber = memory.firstNumber * -1;
			memory.applyNegative = false;
		}
		memory.displayString = memory.displayString.concat('', selectionNumber.toString());
	}
	else if (memory.firstNumber != undefined && memory.operator == undefined) {
		memory.firstNumber = memory.firstNumber * 10 + selectionNumber;
		memory.displayString = memory.displayString.concat('', selectionNumber.toString());
	}
	else if (memory.firstNumber != undefined && memory.operator != undefined && memory.secondNumber == undefined) {
		memory.secondNumber = selectionNumber;
		if (memory.applyNegative == true) {
			memory.secondNumber = memory.secondNumber * -1;
			memory.applyNegative = false;
		}
		memory.displayString = memory.displayString.concat(' ', selectionNumber.toString());
	}
	else if (memory.secondNumber != undefined && memory.operator != undefined) {
		memory.secondNumber = memory.secondNumber * 10 + selectionNumber;
		memory.displayString = memory.displayString.concat('', selectionNumber.toString());
	}
	displayScreen(memory.displayString);
}

function processOperator(selectionType: string): void {
	if (memory.firstNumber == undefined || (memory.firstNumber == 0 && memory.operator != undefined)) {
		if (selectionType == "substract") {
			memory.applyNegative = true;
			memory.displayString = "-";
			displayScreen(memory.displayString);
			return ;
		}
		if (selectionType == "add" && memory.applyNegative == false) {
			memory.firstNumber = 0;
			memory.displayString = "0 +";
		}
		if (selectionType == "multiply" && memory.applyNegative == false) {
			memory.firstNumber = 0;
			memory.displayString = "0 x";
		}
		if (selectionType == "divide" && memory.applyNegative == false) {
			memory.firstNumber = 0;
			memory.displayString = "0 ÷";
		}
		memory.operator = selectionType;
		displayScreen(memory.displayString);
		return ;
	}
	else if (memory.firstNumber != undefined && memory.secondNumber == undefined && memory.operator == undefined) {
		if (selectionType == "substract")
			memory.displayString = memory.displayString.concat('', " -");
		if (selectionType == "add")
			memory.displayString = memory.displayString.concat('', " +");
		if (selectionType == "multiply")
			memory.displayString = memory.displayString.concat('', " x");
		if (selectionType == "divide")
			memory.displayString = memory.displayString.concat('', " ÷");
		memory.operator = selectionType;
		displayScreen(memory.displayString);
		return ;
	}
	else if (memory.firstNumber != undefined && memory.secondNumber == undefined && memory.operator != undefined) {
		memory.displayString = memory.displayString.slice(0, -1);
		if (selectionType == "substract")
			memory.displayString = memory.displayString.concat('', "-");
		if (selectionType == "add")
			memory.displayString = memory.displayString.concat('', "+");
		if (selectionType == "multiply")
			memory.displayString = memory.displayString.concat('', "x");
		if (selectionType == "divide")
			memory.displayString = memory.displayString.concat('', "÷");
		memory.operator = selectionType;
		displayScreen(memory.displayString);
		return ;
	}
}

function processResult(): void {
	// Consider story
	if (memory.operator == "divide" && memory.secondNumber == 0)
	{
		displayScreen("Wait. That's illegal.")
		return ;
	}
	operate(memory.firstNumber, memory.secondNumber, memory.operator);
	// Display result
	// Reset memory
}

function clear(): void {
	resetMemory();
	resetDisplay();
}

function processInput(selection: Element): void {
	let selectionType: string;
	let selectionKey: string;
	let selectionNumber: number;
	
	selectionType = selection.getAttribute('data-type');
	selectionKey = selection.getAttribute('data-key');
	if (selectionType === "number")
	{
		selectionNumber = +selectionKey;
		processNumber(selectionNumber);
	}
	if (selectionType === "operator")
		processOperator(selectionKey);
	if (selectionKey === "=")
		processResult();
	if (selectionKey == "CLEAR")
		clear();
}

// Event Listeners //
let selections = document.querySelectorAll('.key');
selections.forEach((selection): void => {
	selection.addEventListener('click', (): void => {
		processInput(selection);
	})
})

// Debugger
// http://localhost:5500/top/projects/calculator/