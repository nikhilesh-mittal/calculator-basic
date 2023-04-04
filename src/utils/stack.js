const init = () => {
    return [ 0 ];
};

const push = (stack, value) => {
    if (!stack) {
        stack = [];
    }

    stack.push(value);
    return stack;
};

const peek = (stack) => {
    if (!stack || stack.length === 0) {
        return null;
    }

    return stack[stack.length - 1];
};

const pop = (stack) => {
    if (!stack || stack.length === 0) {
        return 0;
    }

    return stack.pop();
};

export default {
    init, push, peek, pop
};