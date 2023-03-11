export { memory, resetMemory, copyToOldMemory, copyFromOldMemory };
const memory = {
    firstNumber: undefined,
    operator: undefined,
    secondNumber: undefined,
    lastResult: undefined,
    isNegative: false,
    usedAns: false,
    usedEqual: false,
    displayString: "",
};
const oldMemory = {
    firstNumber: undefined,
    operator: undefined,
    secondNumber: undefined,
    lastResult: undefined,
    isNegative: false,
    usedAns: false,
    usedEqual: false,
    displayString: "",
};
function resetMemory() {
    for (let key in memory) {
        if (typeof memory[key] == "boolean")
            memory[key] = false;
        else
            memory[key] = undefined;
        memory.displayString = "";
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
