import { memory } from "../memory.js";

const isLastResult = (): boolean => (memory.lastResult != undefined);
const isFirstNumber = (): boolean => (memory.firstNumber != undefined);
const isOperator = (): boolean => (memory.operator != undefined);
const isSecondNumber = (): boolean => (memory.secondNumber != undefined);

export {
	isLastResult,
	isFirstNumber,
	isOperator,
	isSecondNumber
};
