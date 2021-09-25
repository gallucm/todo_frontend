import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { startSaveNote, startUpdateNote } from "../../actions/Note";
import { RootState } from "../../store/store";
import { AlertError } from "../ui/AlertError";

export const New = ({ edit = false }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { selected, createOrUpdate } = useSelector((state: RootState) => state.note);
    const { user } = useSelector((state: RootState) => state.auth);

    const [title, setTitle] = useState(edit && selected  ? selected.title : '');
    const [content, setContent] = useState(edit && selected ? selected.content : '');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(startSaveNote({title, content}, (user ? user.id : '')));
    }

    const handleUpdate = (e: any) => {
        e.preventDefault();
        dispatch(startUpdateNote({_id: (selected ? selected._id + '' : ''), title, content, updatedAt: null}));
    }

    if (createOrUpdate) {
        history.push('/home');
    }

    return (
        <div id="content">
            <form id="content-new-note" onSubmit={(e) => { !edit ? handleSubmit(e) : handleUpdate(e) }}>
                <input type="text" className="form-control input-notes shadow-none" name="title" autoComplete="off" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Título" required />
                <textarea className="form-control input-notes note-content shadow-none" name="content" autoComplete="off" value={content} onChange={(e) => { setContent(e.target.value) }} placeholder="Contenido" required />

                <div>
                    <button type="submit" className="btn btn-app shadow-none" title={edit ? "Modificar nota" : "Guardar nota"}>
                        <i className="far fa-save fa-2x"></i>
                    </button>
                    <Link to="/" className="btn btn-app shadow-none" title="Volver">
                        <i className="fas fa-undo-alt fa-2x"></i>
                    </Link>
                </div>
                <AlertError/>
            </form>
        </div>
    )
}
