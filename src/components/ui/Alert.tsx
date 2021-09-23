import { useDispatch, useSelector } from 'react-redux';
import { removeCreated } from '../../actions/Auth';
import { removeMessage } from '../../actions/Ui';
import { RootState } from '../../store/store';

export const Alert = () => {

    const { loading, message } = useSelector((state: RootState) => state.ui);

    const dispatch = useDispatch();

    const handleResetMessage = (e: any) => {
        e.preventDefault();
        dispatch(removeMessage());
        dispatch(removeCreated());
    }

    return (
        <>
            {
                (!loading && message) && 
                <div className="alert alert-dismissible alert-success fade show mt-4" role="alert">
                    {message}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleResetMessage}></button>
                </div>
            }
        </>
    )
}