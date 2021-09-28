import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startUpdate } from "../../actions/Auth";
import { RootState } from "../../store/store";
import { Loading } from "../ui/Loading";

export const Profile = () => {

    const dispatch = useDispatch();

    const { user } = useSelector((state: RootState) => state.auth);
    const { loading } = useSelector((state: RootState) => state.ui);

    const [username, setUsername] = useState(user?.username);
    const [email, setEmail] = useState(user?.email);

    const handleUpdate = (e: any) => {
        e.preventDefault();
        dispatch(startUpdate(user?.id + '', { email: email + '', username: username + '' }));
    }

    return (
        <div className="content">
            <form onSubmit={(e) => { handleUpdate(e) }}>
                <input type="text" className="form-control shadow-none profile-input" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} required autoComplete="off" />
                <input type="email" className="form-control shadow-none profile-input" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required autoComplete="off" />
                <div className="buttons">
                    <button type="submit" className="btn btn-app shadow-none" disabled={loading}>
                        {
                            loading ?
                                <Loading />
                                :
                                <i className="fas fa-sync-alt"></i>
                        }

                    </button>
                </div>
            </form>
        </div>
    )
}
