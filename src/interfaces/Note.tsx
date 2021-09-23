export interface NoteState {
    notes: Note[] | [];
    selected: Note[] | [];
}

export interface Note {
    _id: string | null;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date | null;
    done: boolean;
}