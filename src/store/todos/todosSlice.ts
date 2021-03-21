import {
    createSlice,
    PayloadAction,
    createDraftSafeSelector,
    createAsyncThunk,
} from '@reduxjs/toolkit';

import { RootState } from '../index';

import { TodosState, Todo } from './todosTypes';

export const fetchUserById = createAsyncThunk('users/fetch', async => {
    return fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(json => {
            return json.data;
        })
        .catch(error => {
            console.error(error);
        });
});

export const initialState: TodosState = {
    todos: [],
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        newTodo: (state, { payload }: PayloadAction<any>) => {
            state.todos.push(payload);
        },
        deleteTodo: (state, { payload }: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== payload);
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchUserById.fulfilled, (state, { payload }) => {
            console.log('payload: ', payload);
            state.todos.push(...payload);
        });
    },
});

export const todosActions = todosSlice.actions;

export const todosSelector = (state: RootState) => state.todos;

export const todos = createDraftSafeSelector(todosSelector, state => state.todos);

export default todosSlice.reducer;
