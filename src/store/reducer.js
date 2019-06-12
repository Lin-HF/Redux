const initialStore = {
    counter: 0
}

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            }
        case 'ADD5':
            return {
                counter: state.counter + action.val
            }
        case 'SUBSTRACT5':
            return {
                counter: state.counter - action.val
            }
    }
    return state;
}

export default reducer;