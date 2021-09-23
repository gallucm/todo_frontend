
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory} from "react-router-dom";
import { startDeleteNote } from "../../actions/Note";
import { RootState } from "../../store/store";

export const HomeButtons = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const { selected } = useSelector((state: RootState) => state.note);

    const handleDelete = () => {
        if (selected && selected.length > 0)
            dispatch(startDeleteNote(selected));
    };

    const handleEdit = () => {
        if (selected && selected.length === 1)
            history.push('/edit/' + selected[0]._id);
    }


    return (
        <>
            <div className="fixed-bottom buttons text-center">
                <Link to="/new" className="btn btn-app">
                    <i className="fas fa-plus"></i>
                </Link>
                {
                    (selected && selected.length === 1) &&
                    <button className="btn btn-app" title="Editar" onClick={handleEdit}>
                        <i className="fas fa-edit"></i>
                    </button>
                }
                {
                    (selected && selected.length > 0) &&

                    <button className="btn btn-app" title="Eliminar" onClick={handleDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                }
            </div>
        </>
    )
}
