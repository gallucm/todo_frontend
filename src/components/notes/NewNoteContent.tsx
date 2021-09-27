import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { startDeleteNote, startMarkDone, startNoteSelected } from "../../actions/Note";
import { DateUpdated } from "../ui/DateUpdated";

export const NewNoteContent = ({ note }: any) => {

    const dispatch = useDispatch();

    const history = useHistory();

    const handleEdit = (e: any) => {
        if (!note.done) {
            e.preventDefault();
            dispatch(startNoteSelected(note));
            history.push('/edit/' + note._id);
        }
    }

    const handleMark = (e: any) => {
        dispatch(startMarkDone(note._id));
    }

    const handleDelete = () => {
        dispatch(startDeleteNote(note._id));
    };

    return (
        <div className="note">
            <div className={note.done ? "note-body blocked" : "note-body"}>
                <h4 className={note.done ? "note-title done" : "note-title"}>{note.title}</h4>
                <div className={note.done ? "note-content done" : "note-content"}>
                    <p>{note.content}</p>
                
                </div>
                <div className="note-buttons">
                    <button className="btn btn-select shadow-none" title={!note.done ? 'Finalizar' : 'Revertir'} onClick={(e) => { handleMark(e) }}>
                        {
                            !note.done ?
                                <i className="fas fa-check"></i>
                                : <i className="fas fa-undo"></i>
                        }

                    </button>
                    <button className="btn btn-select shadow-none m-2" title="Editar" onClick={(e) => { handleEdit(e) }} disabled={note.done}>
                        <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-select shadow-none" title="Eliminar" onClick={handleDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
                {
                    note.updatedAt &&
                    <DateUpdated date={note.updatedAt} />
                }
            </div>
        </div>
    )
}
