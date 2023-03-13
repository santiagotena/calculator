import { memory } from "../memory.js";

const isLastResult = (): boolean => (memory.lastResult != undefined);
const isFirstNumber = (): boolean => (memory.firstNumber != undefined);
const isOperator = (): boolean => (memory.operator != undefined);
const isSecondNumber = (): boolean => (memory.secondNumber != undefined);

function isOnlyFirstNumber(): boolean {
	return (isFirstNumber() && !isOperator() && !isSecondNumber());
}

function isOnlySecondNumberMissing(): boolean {
	return (isFirstNumber() && isOperator() && !isSecondNumber());
}

function areBothNumbersAndOperator(): boolean {
	return (isFirstNumber() && isOperator() && isSecondNumber());
}

function justReceivedAnswer(): boolean {
	return (isLastResult() && !isOperator() && !isSecondNumber());	
}

function isNewCalculation(): boolean {
	return (
			!isOperator() && 
			!isSecondNumber() && 
			(memory.usedAns || memory.usedEqual || memory.reachedStart)
			);
}

function isCalculationEmpty(): boolean {
	return (!isFirstNumber() && !isOperator() && 
	!isSecondNumber() && !memory.isNegative);
}

function canFirstNumberHaveOperator(): boolean {
	return (!isFirstNumber() || (memory.firstNumber == 0 && isOperator()));
}

export {
	isLastResult,
	isFirstNumber,
	isOperator,
	isSecondNumber,
	isOnlyFirstNumber,
	areBothNumbersAndOperator,
	isNewCalculation,
	justReceivedAnswer,
	isOnlySecondNumberMissing,
	canFirstNumberHaveOperator,
	isCalculationEmpty
};
