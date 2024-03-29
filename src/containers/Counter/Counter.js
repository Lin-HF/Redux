import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux';

// import * as actionTypes from '../../store/actions/actions';
import * as actionCreator from '../../store/actions/index';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAdd5Counter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstract5Counter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storeResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDelteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storeResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreator.increment()),
        onDecrementCounter: () => dispatch(actionCreator.decrement()),
        // onAdd5Counter: () => dispatch({type: actionTypes.ADD5, val: 5}),
        // onSubstract5Counter: () => dispatch({type: actionTypes.SUBSTRACT5, val: 5}),
        // onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        // onDelteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
        onAdd5Counter: () => dispatch(actionCreator.add5(5)),
        onSubstract5Counter: () => dispatch(actionCreator.subtract(5)),
        onStoreResult: (result) => dispatch(actionCreator.storeResult(result)),
        onDelteResult: (id) => dispatch(actionCreator.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);