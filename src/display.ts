function displayScreen(displayNumber: string): void {
	let display = document.querySelector('.display');

	display.textContent = displayNumber;
}

function resetDisplay(): void {
	let display = document.querySelector('.display');

	display.textContent = "0";
}

export {
	resetDisplay,
	displayScreen
};
