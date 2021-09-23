import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startRegister } from "../../actions/Auth";
import { RootState } from "../../store/store";
import { Alert } from "../ui/Alert";
import { AlertError } from "../ui/AlertError";
import { Loading } from "../ui/Loading";

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { userCreated } = useSelector((state: RootState) => state.auth);
    const { loading } = useSelector((state: RootState) => state.ui);

    useEffect(() => {
        if (userCreated && !loading)
            clear();
    }, [loading, userCreated]);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const clear = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const handleRegister = (e: any) => {
        e.preventDefault();
        dispatch(startRegister({ username, email, password, password2: confirmPassword }));
    }

    return (
        <>
            <div id="content">
                <form className="content-auth" onSubmit={handleRegister}>
                    <div className="logo-auth">
                        <h1>ToDoAPP</h1>
                    </div>
                    <input type="text" className="form-control input-generic shadow-none" placeholder="Usuario" name="username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="off" required />
                    <input type="email" className="form-control input-generic shadow-none" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" required />
                    <input type="password" className="form-control input-generic shadow-none" placeholder="Contraseña" name="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                    <input type="password" className="form-control input-generic shadow-none" placeholder="Repetir contraseña" name="password2" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} required />
                    <button type="submit" className="btn btn-auth shadow-none" disabled={loading}>{loading ? <Loading /> : 'Registrarse'}</button>
                    <br />
                    <div className="text-center mt-2">
                        <span className="link">
                            Ya tiene cuenta ? ingrese
                        </span>
                        <Link to="/login" className="link">
                            <strong> aquí</strong>
                        </Link>
                    </div>
                </form>
                <Alert />
                <AlertError />
            </div>
        </>
    )
}
