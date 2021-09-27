import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { startLogin } from "../../actions/Auth";
import { RootState } from "../../store/store";
import { AlertError } from "../ui/AlertError";
import { Loading } from "../ui/Loading";

export const LoginScreen = () => {

    const { loading } = useSelector((state: RootState) => state.ui);

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const handleLogin = (e: any) => {
        e.preventDefault();
        dispatch(startLogin({email, password}));
    }

    return (
        <>
            <div className="content">
                <form className="content-auth" onSubmit={handleLogin}>
                    <div className="logo-auth">
                        <h1>ToDoAPP</h1>
                    </div>
                    <input type="email" className="form-control input-generic shadow-none" placeholder="Email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} autoComplete="off" required />
                    <input type="password" className="form-control input-generic shadow-none" placeholder="Contraseña" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                    <button type="submit" className="btn btn-auth shadow-none" disabled={loading}>{loading ? <Loading /> : 'Ingresar'}</button>
                    <br />
                    <div className="text-center mt-2">
                        <span className="link">
                            No tiene cuenta ? cree una
                        </span>
                        <Link to="/register" className="link">
                            <strong> aquí</strong>
                        </Link>
                    </div>
                    
                </form>
                <AlertError/>
            </div>
        </>
    )
}
