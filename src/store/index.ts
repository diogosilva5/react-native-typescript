import { configureStore, Action, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';

import counterReducer from './counter/counterSlice';
import todosReducer from './todos/todosSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch();

export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;
