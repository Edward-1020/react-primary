import * as actionTypes from './actionTypes';

const defaultState = {
    inputValue: '111',
    list: [1, 2, 3]
}

export default (state = defaultState, action) => {
    if (action.type === actionTypes.CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === actionTypes.ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    return state;
}