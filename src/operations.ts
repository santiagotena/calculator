export {
	operate
};

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