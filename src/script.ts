// Global object
const memory: {
	currentSelection: string,
	lastSelection: string,
	firstNumber: number,
	operator: string,
	secondNumber: number,
	lastResult: number
} = {
	currentSelection: undefined,
    lastSelection: undefined,
	firstNumber: 0,
	operator: undefined,
	secondNumber: undefined,
    lastResult: 0,
};

// Core
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

function udpateMemory(selectionKey: string): void {
	//Modify:
	// memory.lastSelection = memory.currentSelection;
	// memory.currentSelection = selectionKey;
}

function displayChoice(key: string): void {
	let display = document.querySelector('.display');
	display.textContent = key;
	
}

function processInput(selection: Element): void {
	let selectionType: string;
	let selectionKey: string;
	let selectionNumber: number;
	
	selectionType = selection.getAttribute('data_type');
	selectionKey = selection.getAttribute('data-key');
	
	if (selectionType === "number") {
		// Consider story
		selectionNumber = +selectionKey;
		// Update memory
	}

	if (selectionType === "operator") {
		// Consider story
		// Update memory
	}
	
	if (selectionKey === "=") {
		// Consider story
		operate(memory.firstNumber, memory.secondNumber, selectionType);
		// Reset memory
	}
	displayChoice(selectionKey);
	udpateMemory(selectionKey);
}

// Event Listeners
let selections = document.querySelectorAll('.key');
selections.forEach((selection): void => {
	selection.addEventListener('click', (): void => {
		processInput(selection);
	})
})
