import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startUpdatePassword } from "../../actions/Auth";
import { RootState } from "../../store/store";
import { Alert } from "../ui/Alert";
import { AlertError } from "../ui/AlertError";
import { Loading } from "../ui/Loading";

export const Password = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state: RootState) => state.auth);
    const { loading } = useSelector((state: RootState) => state.ui);

    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handlePasswordChange = (e: any) => {
        e.preventDefault();
        dispatch(startUpdatePassword(user?.id + '', password, passwordConfirm))
    }

    return (
        <div className="content">
            <form onSubmit={handlePasswordChange}>
                <input type="password" className="form-control shadow-none profile-input" name="pswd1" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Contraseña anterior" required />
                <input type="password" className="form-control shadow-none profile-input" name="pswd2" value={passwordConfirm} onChange={(e) => { setPasswordConfirm(e.target.value) }} placeholder="Contraseña nueva" required />
                <div className="buttons">
                    <button type="submit" className="btn btn-app shadow-none" disabled={loading}>
                        {
                            loading 
                                ? <Loading />
                                : <i className="fas fa-sync-alt"></i>
                        }
                    </button>
                </div>
                <Alert />
                <AlertError />
            </form>
        </div>
    )
}
