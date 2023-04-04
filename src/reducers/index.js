import CONSTANTS from '../utils/constants';
import stack from '../utils/stack';
import myMath from '../utils/math';

const initState = () => {
    return { history: stack.init(), isScientific: false, theme: CONSTANTS.LIGHT };
};

const functionMaps = {
    [CONSTANTS.BINARY]: myMath.processBinaryOperand,
    [CONSTANTS.UNARY]: myMath.processUnaryOperand,
    [CONSTANTS.EQUALS]: myMath.processEquals,
    [CONSTANTS.CLEAR]: myMath.processClear,
};

export default function (state = initState(), action) {
    const stateCopy = { ...state, history: JSON.parse(JSON.stringify(state.history)) };
    const last = stack.peek(stateCopy.history);
    switch (action.type) {
        case CONSTANTS.NUMBER:
            return {
                ...state,
                ...myMath.processNumber({ history: stateCopy.history, value: action.value, last })
            };
        case CONSTANTS.OPERAND:
            if (action.subType && functionMaps[action.subType]) {
                return {
                    ...state,
                    ...functionMaps[action.subType]({ history: stateCopy.history, value: action.value, last }) 
                };
            } else if (functionMaps[action.value]) {
                return {
                    ...state,
                    ...functionMaps[action.value]({ history: stateCopy.history, value: action.value, last })
                };
            } else {
                return state;
            }
        case CONSTANTS.SCIENTIFIC:
            return {
                ...state,
                isScientific: action.value
            };
        case CONSTANTS.THEME:
            return {
                ...state,
                theme: action.value ? CONSTANTS.DARK : CONSTANTS.LIGHT
            };
        default:
            return state;
    }
};