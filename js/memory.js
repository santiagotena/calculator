export { memory, resetMemory };
const memory = {
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
