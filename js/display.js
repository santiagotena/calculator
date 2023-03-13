function displayScreen(displayNumber) {
    let display = document.querySelector('.display');
    display.textContent = displayNumber;
}
function resetDisplay() {
    let display = document.querySelector('.display');
    display.textContent = "0";
}
export { resetDisplay, displayScreen };
