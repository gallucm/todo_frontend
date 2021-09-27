import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { startSaveNote, startUpdateNote } from "../../actions/Note";
import { RootState } from "../../store/store";

export const New = ({ edit = false }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { selected, createOrUpdate } = useSelector((state: RootState) => state.note);
    const { user } = useSelector((state: RootState) => state.auth);

    const [title, setTitle] = useState(edit && selected ? selected.title : '');
    const [content, setContent] = useState(edit && selected ? selected.content : '');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(startSaveNote({ title, content }, (user ? user.id : '')));
    }

    const handleUpdate = (e: any) => {
        e.preventDefault();
        dispatch(startUpdateNote({ _id: (selected ? selected._id + '' : ''), title, content, updatedAt: null }));
    }

    if (createOrUpdate) {
        history.push('/home');
    }

    return (
        <div className="content">
            <form className="note-new" onSubmit={edit ? handleUpdate : handleSubmit}>
                <input type="text" className="form-control shadow-none note-new-title" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Title" required />
                <textarea className="form-control shadow-none note-new-content" name="content" value={content} onChange={(e) => { setContent(e.target.value) }} placeholder="Contenido" required></textarea>
                <div className="note-buttons text-center">
                    <button type="submit" className="btn btn-select" title="Guardar">
                        <i className="fas fa-save"></i>
                    </button>
                    <Link to="/home" className="btn btn-select m-2" title="Volver">
                        <i className="fas fa-undo"></i>
                    </Link>
                </div>
            </form>
        </div>
    )
}
