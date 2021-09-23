import { useSelector } from "react-redux";
import { useNotes } from "../../hooks/useNotes";
import { RootState } from "../../store/store";
import { AlertError } from "../ui/AlertError";
import { NoteContent } from "./NoteContent";

export const Notes = () => {
    useNotes();

    const { notes } = useSelector((state: RootState) => state.note);

    return (
        <>
            <div id="content">
                <div id="notes">
                    {notes.map((note, idx) => (
                        <NoteContent note={note} key={idx} />
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <AlertError />
            </div>
        </>
    )
}
