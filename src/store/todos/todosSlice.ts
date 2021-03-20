import { createSlice, PayloadAction, createDraftSafeSelector } from '@reduxjs/toolkit';

import { RootState } from '../index';

export interface Todo {
    id: number;
    text: string;
}

export interface TodosState {
    todos: Array<Todo>;
}

export const initialState: TodosState = {
    todos: [],
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        newTodo: (state, { payload }: PayloadAction<Todo>) => {
            state.todos.push(payload);
        },
        deleteTodo: (state, { payload }: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== payload);
        },
    },
});

export const todosActions = todosSlice.actions;

export const todosSelector = (state: RootState) => state.todos;

export const unsafeSelector = createDraftSafeSelector(todosSelector, state => state.todos);

export default todosSlice.reducer;
