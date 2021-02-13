import { createSelector } from 'reselect';

import { RootState } from '../../store';

const counterReducer = (state: RootState) => state.counter;

export const getValue = createSelector([counterReducer], counter => counter.value);
