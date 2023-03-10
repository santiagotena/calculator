export {
	resetDisplay,
	displayScreen
};

function resetDisplay(): void {
	let display = document.querySelector('.display');

	display.textContent = "0";
}

function displayScreen(displayNumber: string): void {
	let display = document.querySelector('.display');

	display.textContent = displayNumber;
}