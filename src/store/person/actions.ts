import { Note, NoteActionTypes, ADD_NOTE } from './types';

export function addNote(data: Note): NoteActionTypes {
    return {
        type: ADD_NOTE,
        payload: data,
    };
}
