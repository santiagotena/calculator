export { resetDisplay, displayScreen };
function resetDisplay() {
    let display = document.querySelector('.display');
    display.textContent = "0";
}
function displayScreen(displayNumber) {
    let display = document.querySelector('.display');
    display.textContent = displayNumber;
}
