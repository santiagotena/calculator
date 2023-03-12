export { memory, memoryHistory, resetMemory, copyToHistory, copyFromHistory };
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
    memorySteps: 1,
    reachedStart: false,
};
const backupMemory = {
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
    memorySteps: 1,
    reachedStart: false,
};
let memoryHistory = [memory];
function resetMemory() {
    for (let key in memory)
        memory[key] = backupMemory[key];
}
function copyToHistory() {
    memoryHistory.push(memory);
    for (let key in memory)
        memoryHistory[memory.memorySteps - 1][key] = memory[key];
}
function copyFromHistory() {
    for (let key in memory)
        memory[key] = memoryHistory[memory.memorySteps - 1][key];
    if (memory.memorySteps == 1) {
        memory.displayString = "0";
        memory.reachedStart = true;
    }
    if (memory.memorySteps > 1)
        memory.memorySteps--;
}
