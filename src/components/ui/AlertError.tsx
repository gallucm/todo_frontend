import { useDispatch, useSelector } from 'react-redux';
import { removeError } from '../../actions/Ui';
import { RootState } from '../../store/store';

export const AlertError = () => {

    const dispatch = useDispatch();

    const { error } = useSelector((state: RootState) => state.ui);

    const handleRemoveError = (e: any) => {
        e.preventDefault();
        dispatch(removeError());
    }

    return (
        <>
            {error &&
                <div className="alert alert-dismissible alert-danger fade show alert-todo animate__animated animate__jello mt-4" role="alert">
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleRemoveError}></button>
                </div>
            }
        </>
    )
}