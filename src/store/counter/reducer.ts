import { combineReducers } from 'redux';
import { Counter, CounterActionTypes, INCREASE_COUNTER, DECREASE_COUNTER } from './types';

export type CounterState = Readonly<{
    value: number;
}>;

const initialState: Counter = {
    value: 0,
};

export const counterReducer = (state = initialState, action: CounterActionTypes): Counter => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return { value: state.value + 1 };
        case DECREASE_COUNTER:
            return { value: state.value - 1 };
        default:
            return state;
    }
};

const reducer = combineReducers({
    counterReducer,
});

export default reducer;
