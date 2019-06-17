import * as actionTypes from './actionTypes';

export const saveresult = res => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResult = (res) => {
    return function (dispatch) {
        setTimeout(()=>{
            dispatch(saveresult(res))
        }, 2000);
    } 
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};