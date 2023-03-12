export { memory, resetMemory, copyToOldMemory, copyFromOldMemory };
const memory = {
    firstNumber: undefined,
    operator: undefined,
    secondNumber: undefined,
    lastResult: undefined,
    isNegative: false,
    isDecimal: false,
    decimalSpaces: 0,
    usedAns: false,
    usedEqual: false,
    displayString: "",
    memorySteps: 0,
};
const oldMemory = {
    firstNumber: undefined,
    operator: undefined,
    secondNumber: undefined,
    lastResult: undefined,
    isNegative: false,
    isDecimal: false,
    decimalSpaces: 0,
    usedAns: false,
    usedEqual: false,
    displayString: "",
    memorySteps: 0,
};
function resetMemory() {
    for (let key in memory) {
        if (typeof memory[key] == "boolean")
            memory[key] = false;
        else
            memory[key] = undefined;
        memory.displayString = "";
        memory.decimalSpaces = 0;
        memory.memorySteps = 0;
    }
}
function copyFromOldMemory() {
    for (let key in memory) {
        memory[key] = oldMemory[key];
    }
}
function copyToOldMemory() {
    for (let key in memory) {
        oldMemory[key] = memory[key];
    }
}
