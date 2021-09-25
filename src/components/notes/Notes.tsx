import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNotes } from "../../hooks/useNotes";
import { RootState } from "../../store/store";
import { AlertError } from "../ui/AlertError";
import { NewNoteContent } from "./NewNoteContent";

export const Notes = () => {
    useNotes();

    const { notes } = useSelector((state: RootState) => state.note);

    return (
        <>
            <div id="content">
                {(notes.length === 0) &&
                    <div className="alert alert-light alert-no-notes" role="alert">
                        <span>No hay ninguna nota para mostrar.</span>
                        <br />
                        <Link to="/new" className="btn btn-select shadow-none mt-2">
                            Agregar
                        </Link>
                    </div>
                }
                <div id="notes">
                    {notes.map((note, idx) => (
                        <NewNoteContent note={note} key={idx} />
                    ))}
                </div>
            </div>
            <AlertError />
        </>
    )
}
