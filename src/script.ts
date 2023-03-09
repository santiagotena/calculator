// Global object for memory //
const memory: {
	// currentSelection: string,
	// lastSelection: string,
	firstNumber: number,
	operator: string,
	secondNumber: number,
	lastResult: number,
	displayString: string
} = {
	// currentSelection: undefined,
    // lastSelection: undefined,
	firstNumber: undefined, // 0?
	operator: undefined,
	secondNumber: undefined,
    lastResult: 0,
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
function resetMemory(memory): void {
	// memory.currentSelection = undefined;
	// memory.lastSelection = undefined;
	memory.firstNumber = undefined;
	memory.operator = undefined;
	memory.secondNumber = undefined;
	memory.lastResult = 0;
	memory.displayString = "";
	resetDisplay();
}

function udpateMemory(selectionKey: string): void {
	//Modify:
	// memory.lastSelection = memory.currentSelection;
	// memory.currentSelection = selectionKey;
}

// Display selection and results //
function resetDisplay(): void {
	let display = document.querySelector('.display');

	display.textContent = "0";
}

function displayChoice(displayNumber: string): void {
	let display = document.querySelector('.display');

	display.textContent = displayNumber;
}

// Input processing //
function processNumber(selectionNumber: number): void {
	if (memory.firstNumber == undefined) {
		memory.firstNumber = selectionNumber;
		memory.displayString = memory.displayString.concat('', selectionNumber.toString());
		displayChoice(memory.displayString);
		return ;
	}
	else if (memory.operator != undefined) {
		memory.secondNumber = selectionNumber;
		memory.displayString = memory.displayString.concat(' ', selectionNumber.toString());
		displayChoice(memory.displayString);
		return ;
	}
	
	if (memory.firstNumber != undefined && memory.operator == undefined) {
		memory.firstNumber = memory.firstNumber * 10 + selectionNumber;
		memory.displayString = memory.displayString.concat('', selectionNumber.toString());
		displayChoice(memory.displayString);
		return ;
	}
	if (memory.secondNumber != undefined && memory.operator != undefined) {
		memory.secondNumber = memory.secondNumber * 10 + selectionNumber;
		memory.displayString = memory.displayString.concat('', selectionNumber.toString());
		displayChoice(memory.displayString);
		return ;
	}

}

function processOperator(selectionType: string): void {
	// Consider story
	// Update memory
}

function processResult(): void {
	// Consider story
	operate(memory.firstNumber, memory.secondNumber, memory.operator);
	// Reset memory
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
		processOperator(selectionType);
	if (selectionKey === "=")
		processResult();
	// displayChoice(selectionKey);
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