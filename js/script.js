// Global object
const memory = {
    currentSelection: undefined,
    lastSelection: undefined,
    firstNumber: 0,
    operator: undefined,
    secondNumber: undefined,
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
function udpateMemory(selectionKey) {
    //Modify:
    // memory.lastSelection = memory.currentSelection;
    // memory.currentSelection = selectionKey;
}
function displayChoice(key) {
    let display = document.querySelector('.display');
    display.textContent = key;
}
function processInput(selection) {
    let selectionType;
    let selectionKey;
    let selectionNumber;
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
selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        processInput(selection);
    });
});
