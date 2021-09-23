export interface NoteState {
    notes: Note[] | [];
    selected: Note[] | [];
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