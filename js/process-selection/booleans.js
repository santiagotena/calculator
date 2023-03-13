import { memory } from "../memory.js";
const isLastResult = () => (memory.lastResult != undefined);
const isFirstNumber = () => (memory.firstNumber != undefined);
const isOperator = () => (memory.operator != undefined);
const isSecondNumber = () => (memory.secondNumber != undefined);
function isOnlyFirstNumber() {
    return (isFirstNumber() && !isOperator() && !isSecondNumber());
}
function isOnlySecondNumberMissing() {
    return (isFirstNumber() && isOperator() && !isSecondNumber());
}
function areBothNumbersAndOperator() {
    return (isFirstNumber() && isOperator() && isSecondNumber());
}
function justReceivedAnswer() {
    return (isLastResult() && !isOperator() && !isSecondNumber());
}
function isNewCalculation() {
    return (!isOperator() &&
        !isSecondNumber() &&
        (memory.usedAns || memory.usedEqual || memory.reachedStart));
}
function isCalculationEmpty() {
    return (!isFirstNumber() && !isOperator() &&
        !isSecondNumber() && !memory.isNegative);
}
function canFirstNumberHaveOperator() {
    return (!isFirstNumber() || (memory.firstNumber == 0 && isOperator()));
}
export { isLastResult, isFirstNumber, isOperator, isSecondNumber, isOnlyFirstNumber, areBothNumbersAndOperator, isNewCalculation, justReceivedAnswer, isOnlySecondNumberMissing, canFirstNumberHaveOperator, isCalculationEmpty };
