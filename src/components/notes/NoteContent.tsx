import { useDispatch } from "react-redux"
import { startNoteSelected, startRemoveNoteSelected } from "../../actions/Note";

export const NoteContent = ({note}:any) => {

    const dispatch = useDispatch();

    const handleSelected = (e: any) => {

        if (e.target.checked)
            dispatch(startNoteSelected(note));
        else
            dispatch(startRemoveNoteSelected(note.id));
    }

    return (
        <div className="note">
            <div className="note-content">
                <h3>{note.title}</h3>
                <span>{note.content}</span>
            </div>
            <div className="note-button">
                <div className="form-check">
                    <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault" onChange={(e) => handleSelected(e)} />
                </div>
            </div>
        </div>
    )
}
