// Global object
const memory = {
    currentSelection: "",
    lastSelection: "",
    lastResult: 0,
};
// Core
function add(a, b) {
    return (a + b);
}
function substract(a, b) {
    return (a - b);
}
function multiply(a, b) {
    return (a * b);
}
function divide(a, b) {
    return (a / b);
}
function operate(a, b, operation) {
    if (operation == "add")
        return (add(a, b));
    else if (operation == "substract")
        return (substract(a, b));
    else if (operation == "multiply")
        return (multiply(a, b));
    else if (operation == "divide")
        return (divide(a, b));
}
function displayChoice(key) {
    let display = document.querySelector('.display');
    display.textContent = key;
    memory.lastSelection = memory.currentSelection;
    memory.currentSelection = key;
}
// Event Listeners
let selections = document.querySelectorAll('.key');
selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        displayChoice(selection.getAttribute('data-key'));
    });
});
