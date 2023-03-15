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

function isAnsOrEqualUsed(): boolean {
	return (
			isFirstNumber() &&
			!isOperator() && 
			!isSecondNumber() && 
			(memory.usedAns || memory.usedEqual)
			);
}

function isCalculationEmpty(): boolean {
	return (!isFirstNumber() && !isOperator() && 
			!isSecondNumber() && !memory.isNegative);
}

function canFirstNumberHaveOperator(): boolean {
	return (!isFirstNumber() || (memory.firstNumber == 0 && isOperator()));
}

function reachedTheStart(): boolean {
	return (memory.memorySteps == 1 && !memory.usedAns);
}

export {
	isLastResult,
	isFirstNumber,
	isOperator,
	isSecondNumber,
	isOnlyFirstNumber,
	areBothNumbersAndOperator,
	isAnsOrEqualUsed,
	justReceivedAnswer,
	isOnlySecondNumberMissing,
	canFirstNumberHaveOperator,
	isCalculationEmpty,
	reachedTheStart
};
