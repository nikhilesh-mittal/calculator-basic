import CONSTANTS from './constants';

const getNumber = (value) => {
    return {
        type: CONSTANTS.NUMBER,
        value: value,
        display: `${value}`
    };
};

const getOperand = (value, subType, display) => {
    return {
        type: CONSTANTS.OPERAND,
        subType,
        value,
        display
    };
};

const basic = [
    [
        getNumber(1),
        getNumber(2),
        getNumber(3),
        getOperand(CONSTANTS.ADDITION, CONSTANTS.BINARY, 'Add (+)')
    ],
    [
        getNumber(4),
        getNumber(5),
        getNumber(6),
        getOperand(CONSTANTS.SUBTRACTION, CONSTANTS.BINARY, 'Subtract (-)')
    ],
    [
        getNumber(7),
        getNumber(8),
        getNumber(9),
        getOperand(CONSTANTS.MULTIPLICATION, CONSTANTS.BINARY, 'Multiply (*)')
    ],
    [
        getOperand(CONSTANTS.CLEAR, null, 'Clear'),
        getNumber(0),
        getOperand(CONSTANTS.EQUALS, null, '='),
        getOperand(CONSTANTS.DIVISION, CONSTANTS.BINARY, 'Divide (/)')
    ]
];

const scientific = [
    getOperand(CONSTANTS.NEGATE, CONSTANTS.UNARY, '+/-'),
    getOperand(CONSTANTS.SQUARE, CONSTANTS.UNARY, 'Square (x^2)'),
    getOperand(CONSTANTS.SQUARE_ROOT, CONSTANTS.UNARY, 'Root (x^0.5)')
];

export { basic as baseConfig, scientific as scientificConfig };