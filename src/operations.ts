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
	let result: number;

	if (operation == "+")
		result = add(a, b);
	else if (operation == "-")
		result = substract(a, b);
	else if (operation == "*")
		result = multiply(a, b);
	else if (operation == "/")
		result = divide(a, b);
	return (Math.round((result + Number.EPSILON) * 100) / 100);
}

export {
	operate
};
