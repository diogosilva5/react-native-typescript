import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../index';

export interface CounterState {
    value: number;
}

export const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increaseCounter: state => {
            state.value = state.value + 1;
        },

        decreaseCounter: state => {
            state.value = state.value - 1;
        },

        increaseAmount: (state, { payload }: PayloadAction<number>) => {
            state.value = state.value + payload;
        },
    },
});

export const counterActions = counterSlice.actions;

export const counterSelector = (state: RootState) => state.counter;

export default counterSlice.reducer;
