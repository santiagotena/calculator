export { memory, resetMemory, copyToOldMemory, copyFromOldMemory };
const memory = {
    firstNumber: undefined,
    operator: undefined,
    secondNumber: undefined,
    lastResult: undefined,
    applyNegative: false,
    displayString: "",
};
const oldMemory = {
    firstNumber: undefined,
    operator: undefined,
    secondNumber: undefined,
    lastResult: undefined,
    applyNegative: false,
    displayString: "",
};
function resetMemory() {
    memory.firstNumber = undefined;
    memory.operator = undefined;
    memory.secondNumber = undefined;
    memory.lastResult = undefined;
    memory.applyNegative = false;
    memory.displayString = "";
}
function copyFromOldMemory() {
    // Use for loop
    memory.firstNumber = oldMemory.firstNumber;
    memory.operator = oldMemory.operator;
    memory.secondNumber = oldMemory.secondNumber;
    memory.lastResult = oldMemory.lastResult;
    memory.applyNegative = oldMemory.applyNegative;
    memory.displayString = oldMemory.displayString;
}
function copyToOldMemory() {
    // Use for loop
    oldMemory.firstNumber = memory.firstNumber;
    oldMemory.operator = memory.operator;
    oldMemory.secondNumber = memory.secondNumber;
    oldMemory.lastResult = memory.lastResult;
    oldMemory.applyNegative = memory.applyNegative;
    oldMemory.displayString = memory.displayString;
}
