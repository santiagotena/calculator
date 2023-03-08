// Global object
const memory: {
	currentSelection: string,
	lastSelection: string,
	lastResult: number
} = {
	currentSelection: "",
    lastSelection: "",
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

function displayChoice(key: string): void {
	let display = document.querySelector('.display');
	
	display.textContent = key;
	memory.lastSelection = memory.currentSelection;
	memory.currentSelection = key;
}

// Event Listeners
let selections = document.querySelectorAll('.key');
selections.forEach((selection): void => {
	selection.addEventListener('click', (): void => {
		displayChoice(selection.getAttribute('data-key'));
	})
})
