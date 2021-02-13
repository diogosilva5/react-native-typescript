export interface Note {
    note: string;
    date: string;
}

export interface NotesState {
    notes: Note[];
}

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

interface NweNoteAction {
    type: typeof ADD_NOTE;
    payload: Note;
}

export type NoteActionTypes = NweNoteAction;
