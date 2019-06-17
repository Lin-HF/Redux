export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD5 = 'ADD5';
export const SUBSTRACT5 = 'SUBSTRACT5';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const add5 = (value) => {
    return {
        type: ADD5,
        val: value
    };
};

export const subtract = (value) => {
    return {
        type: SUBSTRACT5,
        val: value
    };
};

export const storeResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    };
};

export const deleteResult = (resElId) => {
    return {
        type: DELETE_RESULT,
        resultElId: resElId
    };
};
