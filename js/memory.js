class Memory {
    constructor(firstNumber = undefined, operator = undefined, secondNumber = undefined, lastResult = undefined, isNegative = false, isDecimal = false, decimalSpaces = 0, usedAns = false, usedEqual = false, displayString = "", memorySteps = 1) {
        this.firstNumber = firstNumber;
        this.operator = operator;
        this.secondNumber = secondNumber;
        this.lastResult = lastResult;
        this.isNegative = isNegative;
        this.isDecimal = isDecimal;
        this.decimalSpaces = decimalSpaces;
        this.usedAns = usedAns;
        this.usedEqual = usedEqual;
        this.displayString = displayString;
        this.memorySteps = memorySteps;
    }
}
function makeMemoryHistory(n) {
    let memoryHistory = new Array(n);
    for (let i = 0; i < n; ++i) {
        memoryHistory[i] = new Memory();
    }
    return (memoryHistory);
}
const historySize = 1000;
let memoryHistory = makeMemoryHistory(historySize);
const memory = new Memory();
const backupMemory = new Memory();
function resetMemory() {
    for (let key in memory)
        memory[key] = backupMemory[key];
    memoryHistory = makeMemoryHistory(historySize);
}
function copyToHistory() {
    for (let key in memory)
        memoryHistory[memory.memorySteps][key] = memory[key];
}
function copyFromHistory() {
    if (memory.memorySteps == 1) {
        return;
    }
    for (let key in memory)
        memory[key] = memoryHistory[memory.memorySteps - 1][key];
}
export { memory, resetMemory, copyToHistory, copyFromHistory };
