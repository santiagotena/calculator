import * as processSelectionImport from './process-selection.js';
let processNumber = processSelectionImport.processNumber;
let processOperator = processSelectionImport.processOperator;
let processResult = processSelectionImport.processResult;
import * as utilsImport from './utils.js';
let clear = utilsImport.clear;
function processInput(selection) {
    let selectionType;
    let selectionKey;
    let selectionNumber;
    selectionType = selection.getAttribute('data-type');
    selectionKey = selection.getAttribute('data-key');
    if (selectionType === "number") {
        selectionNumber = +selectionKey;
        processNumber(selectionNumber);
    }
    if (selectionType === "operator")
        processOperator(selectionKey);
    if (selectionKey === "=")
        processResult();
    if (selectionKey == "CLEAR")
        clear();
}
let selections = document.querySelectorAll('.key');
selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        processInput(selection);
    });
});
///////////
// Debugger
// http://localhost:5500/top/projects/calculator/
// To do:
// [x] Chain calculations
// [ ] link JS/TS files
// [ ] Avoid multiple zeroes
// [ ] Ans
// [ ] .
// [ ] Keyboard Support
// [ ] CSS
