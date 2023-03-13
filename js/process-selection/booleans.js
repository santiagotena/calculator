import { memory } from "../memory.js";
const isLastResult = () => (memory.lastResult != undefined);
const isFirstNumber = () => (memory.firstNumber != undefined);
const isOperator = () => (memory.operator != undefined);
const isSecondNumber = () => (memory.secondNumber != undefined);
export { isLastResult, isFirstNumber, isOperator, isSecondNumber };
