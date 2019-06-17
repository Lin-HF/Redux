import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialStore = {
    counter: 0
}

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState;
            return updateObject(state, {counter: state.counter + 1})
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1})
        case actionTypes.ADD5:
            return updateObject(state, {counter: state.counter + action.val})
        case actionTypes.SUBSTRACT5:
            return updateObject(state, {counter: state.counter - action.val})
    }
    return state;
}

export default reducer;