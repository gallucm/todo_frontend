export interface NoteState {
    notes: Note[] | [];
    selected: Note | null;
    createOrUpdate: boolean;
}

export interface Note {
    _id: string | null;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date | null;
    done: boolean;
}

export interface ICreateNote {
    title: string;
    content: string;
}

export interface IUpdateNote {
    _id: string;
    title: string;
    content: string;
    updatedAt: Date | null;
}