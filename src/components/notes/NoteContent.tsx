import { useDispatch } from "react-redux"
import { useHistory } from "react-router";
import { startMarkDone, startNoteSelected } from "../../actions/Note";
import { DateUpdated } from "../ui/DateUpdated";

export const NoteContent = ({ note }: any) => {

    const history = useHistory();

    const dispatch = useDispatch();

    // const handleSelected = (e: any) => {
    //     if (e.target.checked)
    //         dispatch(startNoteSelected(note));
    //     else
    //         dispatch(startRemoveNoteSelected(note._id));
    // }

    const handleSelect = (e: any) => {
        if (!note.done){
            e.preventDefault();
            dispatch(startNoteSelected(note));
        }
    }

    const handleEdit = (e: any) => {
        if (!note.done){
            e.preventDefault();
            history.push('/edit/' + note._id);
        }
    }

    const handleMark = (e: any) => {
        dispatch(startMarkDone(note._id));
    }

    return (
        <div className={!note.done ? 'note pointer': 'note blocked'} onClick={(e) => { handleSelect(e) }} onDoubleClick={(e) => {handleEdit(e)}}>
            <div className="note-content ms-4">
                <h3 className={note.done ? 'done': ''}>{note.title}</h3>
                <span className={note.done ? 'done': ''}>{note.content}</span>
                <br />
                {
                    note.updatedAt &&
                    <DateUpdated date={note.updatedAt} />
                }
            </div>
            <div>
                <button className="btn btn-select shadow-none" title={note.done ? 'Deshacer' : 'Finalizar'} onClick={(e) => {handleMark(e)}}>
                    {
                        note.done 
                        ? <i className="fas fa-undo"></i>
                        : <i className="fas fa-check"></i>
                    }
                </button>
            </div>
            {/* <div>
                <div className="form-check">
                    <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault" onChange={(e) => handleSelected(e)} />
                </div>
            </div> */}
        </div>
    )
}
