import { Note } from "../interfaces/Note";

export type NoteAction = 
    | { type: 'NOTE_ADD'; payload: Note }
    | { type: 'NOTE_GET_ALL'; payload: Note[]}
    | { type: 'NOTE_REMOVE'; payload: string }
    | { type: 'NOTE_UPDATE'; payload: Note }
    | { type: 'NOTE_ADD_SELECTED'; payload: Note }
    | { type: 'NOTE_REMOVE_SELECTED'; payload: string }
    | { type: 'NOTE_REMOVE_ALL_SELECTED'}
    | { type: 'NOTE_CREATE_OR_UPDATE'}
    | { type: 'NOTE_CREATE_OR_UPDATE_RESET'};
