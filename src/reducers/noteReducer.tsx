import { NoteState } from "../interfaces/Note";
import { NoteAction } from "../types/Note";

const initialState: NoteState = {
    notes: [],
    selected: []
}

export const noteReducer = (state: NoteState = initialState, action: NoteAction): NoteState => {
    switch (action.type) {
        case 'NOTE_ADD':
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }

        case 'NOTE_GET_ALL':
            return {
                ...state,
                notes: action.payload
            }

        case 'NOTE_REMOVE':
            return {
                ...state,
                notes: state.notes.filter(note => note._id !== action.payload)
            }
        case 'NOTE_ADD_SELECTED':
            return {
                ...state,
                selected: [...state.selected, action.payload]
            }
        case 'NOTE_REMOVE_SELECTED':
            return {
                ...state,
                selected: state.selected.filter(note => note._id !== action.payload)
            }
        case 'NOTE_UPDATE':
            return {
                ...state,
                notes: state.notes.map(note => note._id === action.payload._id ? action.payload : note)
            }

        case 'NOTE_REMOVE_ALL_SELECTED':
            return {
                ...state,
                selected: []
            }
        default:
            return state;
    }
}