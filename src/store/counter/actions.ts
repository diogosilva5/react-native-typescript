import { CounterActionTypes, INCREASE_COUNTER, DECREASE_COUNTER } from './types';

export function increaseCounter(): CounterActionTypes {
    return {
        type: INCREASE_COUNTER,
    };
}

export function decreaseCounter(): CounterActionTypes {
    return {
        type: DECREASE_COUNTER,
    };
}
