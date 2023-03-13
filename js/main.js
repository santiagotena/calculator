import * as memoryImport from './memory.js';
const memory = memoryImport.memory;
const copyToHistory = memoryImport.copyToHistory;
import * as processSelectionImport from './process-selection.js';
const processNumber = processSelectionImport.processNumber;
const processOperator = processSelectionImport.processOperator;
const processResult = processSelectionImport.processResult;
const processDecimal = processSelectionImport.processDecimal;
const addDot = processSelectionImport.addDot;
import * as utilsImport from './utils.js';
const processClear = utilsImport.processClear;
const processDelete = utilsImport.processDelete;
const processAns = utilsImport.processAns;
function processInput(selection) {
    let selectionType;
    let selectionKey;
    let isValidInput;
    selectionType = selection.getAttribute('data-type');
    selectionKey = selection.getAttribute('data-key');
    isValidInput = false;
    if (selectionKey === "Backspace") {
        processDelete();
        return;
    }
    copyToHistory();
    if (selectionType === "number" && !memory.isDecimal) {
        if (processNumber(selectionKey) == 0)
            isValidInput = true;
    }
    else if (selectionType === "number" && memory.isDecimal) {
        if (processDecimal(selectionKey) == 0)
            isValidInput = true;
    }
    else if (selectionType === "operator") {
        if (processOperator(selectionKey) == 0)
            isValidInput = true;
    }
    else if (selectionKey === ".") {
        if (addDot() == 0)
            isValidInput = true;
    }
    else if (selectionKey === "a") {
        if (processAns() == 0)
            isValidInput = true;
    }
    else if (selectionKey === "Enter")
        processResult();
    else if (selectionKey === "Clear")
        processClear();
    if (isValidInput)
        memory.memorySteps++;
}
let selections = document.querySelectorAll('.key');
selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        processInput(selection);
    });
});
window.addEventListener('keydown', (e) => {
    try {
        let key = document.querySelector(`.key[data-key="${e.key}"]`);
        processInput(key);
    }
    catch (err) {
    }
});
