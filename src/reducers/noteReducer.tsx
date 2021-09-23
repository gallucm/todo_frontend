import { NoteState } from "../interfaces/Note";
import { NoteAction } from "../types/Note";

const initialState: NoteState = {
    notes: [],
    selected: [],
    createOrUpdate: false
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
                notes: state.notes.map(note => {
                    if (note._id === action.payload._id) {
                        return {
                            ...note,
                            title: action.payload.title,
                            content: action.payload.content,
                            updatedAt: action.payload.updatedAt

                        }
                    } else {
                        return note
                    }
                })
            }
        case 'NOTE_REMOVE_ALL_SELECTED':
            return {
                ...state,
                selected: []
            }

        case 'NOTE_CREATE_OR_UPDATE':
            return {
                ...state,
                createOrUpdate: true
            }

        case 'NOTE_CREATE_OR_UPDATE_RESET':
            return {
                ...state,
                createOrUpdate: false
            }
        default:
            return state;
    }
}