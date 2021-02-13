import { NotesState, NoteActionTypes, ADD_NOTE } from './types';

const initialState: NotesState = {
    notes: [],
};

export const notesReducer = (state = initialState, action: NoteActionTypes) => {
    switch (action.type) {
        case ADD_NOTE:
            return { ...state, notes: [...state.notes, action.payload] };
        default:
            return state;
    }
};
