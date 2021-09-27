import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNotes } from "../../hooks/useNotes";
import { RootState } from "../../store/store";
import { AlertError } from "../ui/AlertError";
import { LoadingBig } from "../ui/LoadingBig";
import { NewNoteContent } from "./NewNoteContent";

export const Notes = () => {
    useNotes();

    const { notes } = useSelector((state: RootState) => state.note);
    const { loading } = useSelector((state: RootState) => state.ui);

    return (
        <>
            <div className="content">
                {
                    (notes && notes.length > 0) &&
                    <div id="notes">
                        {notes.map((note, idx) => (
                            <NewNoteContent note={note} key={idx} />
                            ))}
                    </div>
                }
                {
                    loading &&
                    <LoadingBig />
                }
                {(notes.length === 0) &&
                    <div className="alert alert-light alert-no-notes" role="alert">
                        <span>No hay ninguna nota para mostrar.</span>
                        <br />
                        <Link to="/new" className="btn btn-select shadow-none mt-2">
                            Nueva
                        </Link>
                    </div>
                }
            </div>
            <AlertError />
        </>
    )
}
