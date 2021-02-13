export interface Counter {
    value: number;
}

export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

interface IncreaseAction {
    type: typeof INCREASE_COUNTER;
}

interface DecreaseAction {
    type: typeof DECREASE_COUNTER;
}

export type CounterActionTypes = IncreaseAction | DecreaseAction;
