import stack from './stack';
import CONSTANTS from './constants';

const handleNumber = (initial, input) => {
    if (isNaN(initial) || !isFinite(initial)) {
        return initial;
    }

    const temp = initial + '';

    if (temp.indexOf('.') !== -1) {
        return parseFloat(temp + input);
    }

    return parseInt(temp + input);
};

const processNumber = ({ history, value, last }) => {
    if ((!history || history.length === 0) && value === 0) {
        return { history };
    }

    if (last === null || typeof last !== 'number') {
        stack.push(history, value);
    } else {
        const cur = handleNumber(last, value);
        stack.pop(history);
        stack.push(history, cur);
    }

    return { history };
};

const applyBinaryOperand = (first, operand, second) => {
    switch (operand) {
        case CONSTANTS.ADDITION:
            return first + second;
        case CONSTANTS.SUBTRACTION:
            return first - second;
        case CONSTANTS.MULTIPLICATION:
            return first * second;
        case CONSTANTS.DIVISION:
            return first / second;
        default:
            throw new Error('Unhandled Binary Operand', operand);
    }
}

const processStack = (history) => {
    if (history.length === 1) {
        return;
    }

    const second = history.pop();
    const operand = history.pop();
    const first = history.pop();

    stack.push(history, applyBinaryOperand(first, operand, second));
}

const processBinaryOperand = ({ history, value, last }) => {
    if (last === null) {
        stack.push(history, 0);
    }

    if (typeof last === 'number') {
        processStack(history);
    } else {
        stack.pop(history);
    }

    stack.push(history, value);
    return { history };
};

const processEquals = ({ history, value, last }) => {
    if (last === null) {
        return { history };
    }

    if (typeof last === 'number') {
        processStack(history);
    } else {
        stack.pop(history);
    }

    return { history };
};

const processClear = () => {
    return { history: stack.init() };
};

const processUnaryOperand = ({ history, last, value }) => {
    if (last === null) {
        return;
    }

    if (typeof last !== 'number') {
        stack.pop(history);
    }

    last = stack.pop(history);
    stack.push(history, applyUnaryOperand(last, value));

    return { history };
};

const applyUnaryOperand = (input, operand) => {
    switch (operand) {
        case CONSTANTS.NEGATE:
            return input * -1;
        case CONSTANTS.SQUARE:
            return input * input;
        case CONSTANTS.SQUARE_ROOT:
            return Math.sqrt(input);
        default:
            return new Error('Unhandled unary operand', operand);
    }
};

const getDisplayValue = (history) => {
    if (!history || history.length === 0) {
        return 0;
    }

    if (typeof stack.peek(history) === 'number') {
        return stack.peek(history);
    }

    const historyCopy = Object.assign([], history);
    stack.pop(historyCopy);
    return stack.peek(historyCopy);
}

export default {
    processNumber,
    processBinaryOperand,
    processEquals,
    processClear,
    processUnaryOperand,
    getDisplayValue
};
