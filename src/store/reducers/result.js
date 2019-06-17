import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialStore = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, {results: updatedArray}); 
}

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) });
        // {
        //     ...state,
        //     results: state.results.concat({id: new Date(),value :action.result})
        // }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            // return {
            //     ...state,
            //     results: newArray
            // }
            // const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            // return updateObject(state, {results: updatedArray});
            // {
            //     ...state,
            //     results: updatedArray
            // }
            return deleteResult(state, action);
    }
    return state;
}

export default reducer;