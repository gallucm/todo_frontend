import { ICreateNote, IUpdateNote, Note } from "../interfaces/Note";
import { addNote, deleteNote, getAllNotes, updateNote } from "../services/Note";
import { setError, startLoading, stopLoading } from "./Ui";


export const startSaveNote = (note: ICreateNote, userId: string) => {
    return async (dispatch: any) => {
        try {
            dispatch(startLoading());
            const token = getToken();
            await addNote(token, note, userId);
            dispatch(createOrUpdate());
        } catch (error) {
            dispatch(setError('Error al crear la nota'));
        } finally {
            dispatch(stopLoading());
        }
    }
}

export const startUpdateNote = (note: IUpdateNote) => {
    return async (dispatch: any) => {
        try {
            dispatch(startLoading());

            const token = getToken();

            const { updatedAt } = await updateNote(token, note);
            note.updatedAt = updatedAt;
            
            dispatch(update(note));
            dispatch(createOrUpdate());
        } catch (error) {
            dispatch(setError('Error al actualizar la nota'));
        } finally {
            dispatch(stopLoading());
        }
    }
}

export const startGetNotes = (userId: string) => {
    return async (dispatch: any) => {
        try {
            dispatch(startLoading());

            dispatch(resetCreateOrUpdate());
            
            dispatch(removeAllSelected());

            const token = getToken();
            const notes = await getAllNotes(token, userId);
            dispatch(getAll(notes));
        } catch (error: any) {
            if (error.code !== 404) {
                dispatch(setError('Error al obtener las notas'));
            }
        } finally {
            dispatch(stopLoading());
        }
    }
}

export const startNoteSelected = (note: Note) => {
    return async (dispatch: any) => {
        dispatch(startLoading());

        dispatch(addSelected(note));

        dispatch(stopLoading());
    }
}

export const startRemoveNoteSelected = (noteId: string) => {
    return async (dispatch: any) => {
        dispatch(startLoading());

        dispatch(removeSelected(noteId));

        dispatch(stopLoading());
    }
}

export const startDeleteNote = (notes: Note[]) => {
    return async (dispatch: any) => {
        try {
            dispatch(startLoading());
            const token = getToken();
            deletetNotes(dispatch, token, notes)
            dispatch(removeAllSelected());
        } catch (error) {
            dispatch(setError('Error al eliminar la nota'));
        } finally {
            dispatch(stopLoading());
        }
    }
}

const deletetNotes = async (dispatch: any, token: string, notes: Note[]) => {
    try{
        for (let i = 0; i < notes.length; i++) {
            await deleteNote(token, notes[i]._id + '');
            dispatch(setDeleteNote(notes[i]._id + ''));
        }  
    } catch (error){
        throw error;
    }
}

const update = (payload: IUpdateNote) => ({
    type: 'NOTE_UPDATE',
    payload
});

const getAll = (payload: Note[]) => ({
    type: 'NOTE_GET_ALL',
    payload
});

const addSelected = (payload: Note) => ({
    type: 'NOTE_ADD_SELECTED',
    payload
});

const removeSelected = (payload: string) => ({
    type: 'NOTE_REMOVE_SELECTED',
    payload
});

const removeAllSelected = () => ({
    type: 'NOTE_REMOVE_ALL_SELECTED'
});

const setDeleteNote = (payload: string) => ({
    type: 'NOTE_REMOVE',
    payload
});

const createOrUpdate = () => ({
    type: 'NOTE_CREATE_OR_UPDATE'
});

const resetCreateOrUpdate = () => ({
    type: 'NOTE_CREATE_OR_UPDATE_RESET'
});

const getToken = () => {
    const token = localStorage.getItem('identity');
    if (token)
        return token

    return '';
}